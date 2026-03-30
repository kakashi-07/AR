/**
 * furnitureBuilder.js
 * Procedural Three.js furniture models for AR visualization.
 * All units are in meters (roughly real-world scale).
 */
import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// ── Shared geometry cache ──
const geoCache = {}
function cached(key, factory) {
  if (!geoCache[key]) geoCache[key] = factory()
  return geoCache[key]
}

const textureCache = {}
const gltfLoader = new GLTFLoader()
const glbAssetCache = new Map()
const GLB_MODEL_PATHS = {
  sofa_3seater: '/models/sofa_3seater.glb',
  loveseat: '/models/loveseat.glb',
  armchair: '/models/armchair.glb',
  coffee_table: '/models/coffee_table.glb',
  dining_table: '/models/dining_table.glb',
  dining_chair: '/models/dining_chair.glb',
  bed_queen: '/models/bed_queen.glb',
  wardrobe: '/models/wardrobe.glb',
  bookshelf: '/models/bookshelf.glb',
  office_desk: '/models/office_desk.glb',
  tv_stand: '/models/tv_stand.glb',
  side_table: '/models/side_table.glb',
  floor_lamp: '/models/floor_lamp.glb',
  metal_locker: '/models/metal_locker.glb',
}

function randomFromSeed(seed) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function canvasTexture(key, draw, repeatX = 1, repeatY = 1) {
  if (textureCache[key]) return textureCache[key]

  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  draw(ctx, canvas.width, canvas.height)

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(repeatX, repeatY)
  texture.anisotropy = 4
  texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true
  textureCache[key] = texture
  return texture
}

function makeWoodTexture(baseHex = '#8B5E3C') {
  return canvasTexture(`wood:${baseHex}`, (ctx, w, h) => {
    ctx.fillStyle = baseHex
    ctx.fillRect(0, 0, w, h)
    for (let i = 0; i < 90; i++) {
      const y = (i / 90) * h
      const alpha = 0.05 + randomFromSeed(i * 7.3) * 0.07
      ctx.strokeStyle = `rgba(60,32,14,${alpha})`
      ctx.lineWidth = 1 + randomFromSeed(i * 4.1)
      ctx.beginPath()
      ctx.moveTo(0, y)
      for (let x = 0; x <= w; x += 24) {
        const offset = (randomFromSeed((i + 1) * (x + 3)) - 0.5) * 10
        ctx.lineTo(x, y + offset)
      }
      ctx.stroke()
    }
  }, 2, 2)
}

function makeFabricTexture(baseHex = '#D4B896') {
  return canvasTexture(`fabric:${baseHex}`, (ctx, w, h) => {
    ctx.fillStyle = baseHex
    ctx.fillRect(0, 0, w, h)
    for (let i = 0; i < 140; i++) {
      const alpha = 0.03 + randomFromSeed(i * 1.13) * 0.05
      ctx.fillStyle = `rgba(255,255,255,${alpha})`
      ctx.fillRect((i * 7) % w, 0, 1, h)
      ctx.fillRect(0, (i * 5) % h, w, 1)
    }
  }, 3, 3)
}

function makeLeatherTexture(baseHex = '#1A1A1A') {
  return canvasTexture(`leather:${baseHex}`, (ctx, w, h) => {
    ctx.fillStyle = baseHex
    ctx.fillRect(0, 0, w, h)
    for (let i = 0; i < 500; i++) {
      const x = randomFromSeed(i * 2.7) * w
      const y = randomFromSeed(i * 8.9) * h
      const size = 1 + randomFromSeed(i * 4.4) * 3
      const alpha = 0.02 + randomFromSeed(i * 5.1) * 0.06
      ctx.fillStyle = `rgba(255,255,255,${alpha})`
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }
  }, 2, 2)
}

function makeMetalTexture(baseHex = '#b9b9b9') {
  return canvasTexture(`metal:${baseHex}`, (ctx, w, h) => {
    ctx.fillStyle = baseHex
    ctx.fillRect(0, 0, w, h)
    for (let i = 0; i < 180; i++) {
      const alpha = 0.04 + randomFromSeed(i * 1.9) * 0.05
      ctx.strokeStyle = `rgba(255,255,255,${alpha})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo((i / 180) * w, 0)
      ctx.lineTo((i / 180) * w, h)
      ctx.stroke()
    }
  }, 1, 2)
}

// ── Material helpers ──
function mat(colorHex, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color:     colorHex,
    map:       opts.map ?? null,
    roughness: opts.roughness ?? 0.75,
    metalness: opts.metalness ?? 0.05,
    ...opts,
  })
}
function legMat() {
  return mat(0x2a2a2a, { roughness: 0.4, metalness: 0.6, map: makeMetalTexture('#3b3b3b') })
}
function cushionMat(colorHex) {
  return mat(colorHex, { roughness: 0.9, metalness: 0.0, map: makeFabricTexture(`#${colorHex.toString(16).padStart(6, '0')}`) })
}
function woodMat(colorHex) {
  return mat(colorHex, { roughness: 0.68, metalness: 0.08, map: makeWoodTexture(`#${colorHex.toString(16).padStart(6, '0')}`) })
}
function metalMat(colorHex = 0x8c8c8c) {
  return mat(colorHex, { roughness: 0.22, metalness: 0.82, map: makeMetalTexture(`#${colorHex.toString(16).padStart(6, '0')}`) })
}
function glossyMat(colorHex) {
  return mat(colorHex, { roughness: 0.35, metalness: 0.15, map: makeLeatherTexture(`#${colorHex.toString(16).padStart(6, '0')}`) })
}

// ── Box helper ──
function box(w, h, d, colorHex, colorable = true) {
  const geo  = new THREE.BoxGeometry(w, h, d)
  const mesh = new THREE.Mesh(geo, mat(colorHex))
  mesh.castShadow    = true
  mesh.receiveShadow = true
  mesh.userData.colorable = colorable
  return mesh
}

function roundedBox(w, h, d, colorHex, colorable = true, radius = 0.04, segments = 4, materialFactory = mat) {
  const safeRadius = Math.max(0.004, Math.min(radius, w * 0.25, h * 0.45, d * 0.25))
  const key = `rounded:${w}:${h}:${d}:${safeRadius}:${segments}`
  const geo = cached(key, () => new RoundedBoxGeometry(w, h, d, segments, safeRadius))
  const mesh = new THREE.Mesh(geo, materialFactory(colorHex))
  mesh.castShadow = true
  mesh.receiveShadow = true
  mesh.userData.colorable = colorable
  return mesh
}

// ── Cylinder helper ──
function cylinder(rt, rb, h, colorHex, colorable = false, segs = 8) {
  const geo  = new THREE.CylinderGeometry(rt, rb, h, segs)
  const mesh = new THREE.Mesh(geo, mat(colorHex))
  mesh.castShadow = true
  mesh.userData.colorable = colorable
  return mesh
}

// ── Add legs to a group ──
function addLegs(group, w, d, legH, offsetY, colorHex, inset = 0.07) {
  const positions = [
    [ w/2 - inset,  offsetY,  d/2 - inset],
    [-w/2 + inset,  offsetY,  d/2 - inset],
    [ w/2 - inset,  offsetY, -d/2 + inset],
    [-w/2 + inset,  offsetY, -d/2 + inset],
  ]
  positions.forEach(([x, y, z]) => {
    const leg = cylinder(0.03, 0.025, legH, colorHex, false)
    leg.position.set(x, y, z)
    group.add(leg)
  })
}

function addDeskHandle(group, x, y, z, width = 0.12) {
  const handleBar = cylinder(0.006, 0.006, width, 0xb88a44, false, 12)
  handleBar.rotation.z = Math.PI / 2
  handleBar.position.set(x, y, z)
  handleBar.material = metalMat(0xb88a44)
  handleBar.userData.colorable = false
  group.add(handleBar)
}

function addShelfBackSlats(group, width, height, depth, count = 6, colorHex = 0x84664b) {
  const gap = width / count
  for (let i = 0; i < count; i++) {
    const slat = roundedBox(gap - 0.01, height, 0.018, colorHex, false, 0.005, 2, woodMat)
    slat.position.set(-width / 2 + gap * i + gap / 2, height / 2, -depth / 2 + 0.015)
    group.add(slat)
  }
}

function addCaster(group, x, y, z) {
  const fork = cylinder(0.009, 0.009, 0.045, 0xb8903c, false, 10)
  fork.rotation.z = Math.PI / 2
  fork.position.set(x, y + 0.022, z)
  fork.material = metalMat(0xb8903c)
  group.add(fork)

  const wheel = cylinder(0.018, 0.018, 0.016, 0x1f1f1f, false, 14)
  wheel.rotation.x = Math.PI / 2
  wheel.position.set(x, y, z)
  wheel.material = glossyMat(0x1f1f1f)
  group.add(wheel)
}

function prepareImportedScene(scene) {
  scene.traverse((child) => {
    if (!child.isMesh) return
    child.castShadow = true
    child.receiveShadow = true
    if (Array.isArray(child.material)) {
      child.material = child.material.map((material) => material.clone())
    } else if (child.material) {
      child.material = child.material.clone()
    }
  })
}

function loadGlbAsset(url) {
  if (glbAssetCache.has(url)) return glbAssetCache.get(url)

  const promise = new Promise((resolve) => {
    gltfLoader.load(
      url,
      (gltf) => {
        prepareImportedScene(gltf.scene)
        resolve(gltf.scene)
      },
      undefined,
      () => resolve(null)
    )
  })

  glbAssetCache.set(url, promise)
  return promise
}

function buildWithOptionalGlb(furnitureId, colorHex, fallbackBuilder) {
  const root = new THREE.Group()
  root.userData.isFurniture = true

  const fallback = fallbackBuilder(colorHex)
  root.add(fallback)

  const modelUrl = GLB_MODEL_PATHS[furnitureId]
  if (!modelUrl) return root

  loadGlbAsset(modelUrl).then((scene) => {
    if (!scene) return
    root.clear()
    const clone = scene.clone(true)
    root.add(clone)
    applyColor(root, colorHex)
  })

  return root
}

// ─────────────────────────────────────────────────────────────
//  BUILD FUNCTIONS
// ─────────────────────────────────────────────────────────────

/** 3-Seater Sofa */
export function buildSofa3Seater(colorHex = 0x8B5E3C) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.8
  const D = 0.9

  const frame = roundedBox(W, 0.14, D, 0x3e2f24, false, 0.035, 4, woodMat)
  frame.position.y = 0.12
  g.add(frame)

  const lowerPlinth = roundedBox(W - 0.08, 0.08, D - 0.08, 0x2a211a, false, 0.02, 3, woodMat)
  lowerPlinth.position.y = 0.05
  g.add(lowerPlinth)

  const backShell = roundedBox(W - 0.06, 0.54, 0.16, colorHex, true, 0.05, 4, cushionMat)
  backShell.position.set(0, 0.63, -(D / 2 - 0.09))
  g.add(backShell)

  const armL = roundedBox(0.19, 0.5, D - 0.04, colorHex, true, 0.06, 4, cushionMat)
  armL.position.set(-W / 2 + 0.1, 0.38, 0.01)
  g.add(armL)
  const armR = armL.clone()
  armR.position.x = W / 2 - 0.1
  g.add(armR)

  const armPadL = roundedBox(0.14, 0.08, 0.44, colorHex, true, 0.04, 4, cushionMat)
  armPadL.position.set(-W / 2 + 0.105, 0.56, 0.12)
  g.add(armPadL)
  const armPadR = armPadL.clone()
  armPadR.position.x = W / 2 - 0.105
  g.add(armPadR)

  for (let i = -1; i <= 1; i++) {
    const cushion = roundedBox(0.5, 0.16, 0.58, colorHex, true, 0.05, 4, cushionMat)
    cushion.position.set(i * 0.54, 0.38, 0.06)
    g.add(cushion)
  }

  for (let i = -1; i <= 1; i++) {
    const bc = roundedBox(0.48, 0.3, 0.12, colorHex, true, 0.04, 4, cushionMat)
    bc.position.set(i * 0.54, 0.58, -(D / 2 - 0.18))
    g.add(bc)
  }

  addLegs(g, W - 0.12, D - 0.12, 0.12, 0.06, 0x2d1f17, 0.08)
  return g
}

/** Loveseat */
export function buildLoveseat(colorHex = 0xD4B896) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.3
  const D = 0.84

  const frame = roundedBox(W, 0.13, D, 0x433126, false, 0.03, 4, woodMat)
  frame.position.y = 0.11
  g.add(frame)

  const back = roundedBox(W - 0.05, 0.5, 0.16, colorHex, true, 0.05, 4, cushionMat)
  back.position.set(0, 0.61, -(D / 2 - 0.09))
  g.add(back)

  const armL = roundedBox(0.18, 0.48, D - 0.04, colorHex, true, 0.05, 4, cushionMat)
  armL.position.set(-W / 2 + 0.09, 0.36, 0.01)
  g.add(armL)
  const armR = armL.clone()
  armR.position.set(W / 2 - 0.09, 0.36, 0.01)
  g.add(armR)

  for (let i = -0.5; i <= 0.5; i += 1) {
    const cushion = roundedBox(0.5, 0.16, 0.56, colorHex, true, 0.05, 4, cushionMat)
    cushion.position.set(i * 0.54, 0.37, 0.06)
    g.add(cushion)

    const bc = roundedBox(0.46, 0.28, 0.12, colorHex, true, 0.04, 4, cushionMat)
    bc.position.set(i * 0.54, 0.57, -(D / 2 - 0.18))
    g.add(bc)
  }

  addLegs(g, W - 0.1, D - 0.08, 0.12, 0.06, 0x2d1f17, 0.07)
  return g
}

/** Armchair */
export function buildArmchair(colorHex = 0x4A2C0A) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const seat = roundedBox(0.6, 0.14, 0.58, colorHex, true, 0.05, 4, cushionMat)
  seat.position.set(0, 0.48, 0.03)
  g.add(seat)

  const back = roundedBox(0.54, 0.74, 0.12, colorHex, true, 0.08, 5, cushionMat)
  back.position.set(0, 0.83, -0.22)
  g.add(back)

  const armSupportL = roundedBox(0.05, 0.34, 0.08, 0x5a4030, false, 0.016, 3, woodMat)
  armSupportL.position.set(-0.25, 0.52, -0.03)
  g.add(armSupportL)
  const armSupportR = armSupportL.clone()
  armSupportR.position.x = 0.25
  g.add(armSupportR)

  const armPadL = roundedBox(0.12, 0.07, 0.24, colorHex, true, 0.04, 4, cushionMat)
  armPadL.position.set(-0.27, 0.69, -0.02)
  g.add(armPadL)
  const armPadR = armPadL.clone()
  armPadR.position.x = 0.27
  g.add(armPadR)

  const backBraceL = roundedBox(0.045, 0.44, 0.08, 0x4a3427, false, 0.014, 3, woodMat)
  backBraceL.position.set(-0.23, 0.76, -0.19)
  backBraceL.rotation.z = 0.08
  g.add(backBraceL)
  const backBraceR = backBraceL.clone()
  backBraceR.position.x = 0.23
  backBraceR.rotation.z = -0.08
  g.add(backBraceR)

  const hub = cylinder(0.08, 0.09, 0.16, 0x1f1f1f, false, 18)
  hub.position.y = 0.23
  hub.material = glossyMat(0x1f1f1f)
  g.add(hub)

  const post = cylinder(0.04, 0.05, 0.34, 0x262626, false, 18)
  post.position.y = 0.33
  post.material = glossyMat(0x262626)
  g.add(post)

  const legRadius = 0.24
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2
    const leg = roundedBox(0.28, 0.04, 0.065, 0x4f372b, false, 0.016, 3, woodMat)
    leg.position.set(Math.cos(angle) * 0.1, 0.08, Math.sin(angle) * 0.1)
    leg.rotation.y = -angle
    g.add(leg)

    addCaster(
      g,
      Math.cos(angle) * legRadius,
      0.03,
      Math.sin(angle) * legRadius
    )
  }
  return g
}

/** Coffee Table */
export function buildCoffeeTable(colorHex = 0x8B5E3C) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.1, H = 0.42, D = 0.55
  const top = box(W, 0.04, D, colorHex)
  top.position.y = H - 0.02
  g.add(top)
  // Lower shelf
  const shelf = box(W - 0.06, 0.025, D - 0.06, colorHex)
  shelf.position.y = H * 0.35
  g.add(shelf)
  // Frame legs (4 vertical bars)
  const legH = H - 0.04
  addLegs(g, W - 0.06, D - 0.06, legH, H * 0.5 - 0.01, colorHex, 0.04)
  return g
}

/** Dining Table */
export function buildDiningTable(colorHex = 0x8B5E3C) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.8, H = 0.76, D = 0.9
  const top = box(W, 0.05, D, colorHex)
  top.position.y = H - 0.025
  g.add(top)
  const legH = H - 0.05
  addLegs(g, W - 0.12, D - 0.12, legH, legH/2, colorHex, 0.08)
  // Crossbar
  const bar = box(W - 0.25, 0.04, 0.04, colorHex)
  bar.position.set(0, legH * 0.3, 0)
  g.add(bar)
  return g
}

/** Dining Chair */
export function buildDiningChair(colorHex = 0x4A2C0A) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 0.48
  const D = 0.52
  const SH = 0.47

  const seat = roundedBox(W, 0.06, D, 0x694a36, false, 0.015, 3, woodMat)
  seat.position.y = SH
  g.add(seat)

  const cushion = roundedBox(W - 0.05, 0.055, D - 0.06, colorHex, true, 0.03, 4, cushionMat)
  cushion.position.y = SH + 0.055
  g.add(cushion)

  const br = roundedBox(W - 0.04, 0.28, 0.05, colorHex, true, 0.03, 4, cushionMat)
  br.position.set(0, SH + 0.34, -(D / 2 - 0.03))
  g.add(br)

  const topRail = roundedBox(W, 0.055, 0.05, 0x694a36, false, 0.014, 3, woodMat)
  topRail.position.set(0, SH + 0.54, -(D / 2 - 0.03))
  g.add(topRail)

  const backPostL = roundedBox(0.045, 0.68, 0.045, 0x694a36, false, 0.01, 3, woodMat)
  backPostL.position.set(-W / 2 + 0.03, 0.34, -(D / 2 - 0.025))
  g.add(backPostL)
  const backPostR = backPostL.clone()
  backPostR.position.x = W / 2 - 0.03
  g.add(backPostR)

  const legH = SH
  addLegs(g, W - 0.04, D - 0.04, legH, legH / 2, 0x694a36, 0.04)
  return g
}

/** Queen Bed */
export function buildQueenBed(colorHex = 0x4A2C0A) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.6
  const L = 2.1

  const frame = roundedBox(W, 0.16, L, colorHex, true, 0.025, 4, woodMat)
  frame.position.y = 0.11
  g.add(frame)

  const mattress = roundedBox(W - 0.08, 0.22, L - 0.14, 0xf0ede8, false, 0.05, 4, cushionMat)
  mattress.userData.colorable = false
  mattress.position.y = 0.28
  g.add(mattress)

  const duvet = roundedBox(W - 0.14, 0.16, L * 0.6, 0xe3d5b8, false, 0.07, 4, cushionMat)
  duvet.userData.colorable = false
  duvet.position.set(0, 0.38, 0.05)
  g.add(duvet)

  const headboard = roundedBox(W + 0.04, 0.78, 0.12, colorHex, true, 0.05, 4, cushionMat)
  headboard.position.set(0, 0.5, -(L / 2 - 0.05))
  g.add(headboard)

  const footboard = roundedBox(W - 0.02, 0.18, 0.06, colorHex, true, 0.02, 3, woodMat)
  footboard.position.set(0, 0.18, L / 2 - 0.04)
  g.add(footboard)

  for (let i = -0.5; i <= 0.5; i += 1) {
    const pillow = roundedBox(0.56, 0.1, 0.32, 0xf8f7f4, false, 0.04, 4, cushionMat)
    pillow.userData.colorable = false
    pillow.position.set(i * 0.58, 0.4, -(L / 2 - 0.46))
    g.add(pillow)
  }

  addLegs(g, W - 0.12, L - 0.14, 0.1, 0.05, 0x1d1d1d, 0.08)
  return g
}

/** Wardrobe */
export function buildWardrobe(colorHex = 0xF5F0EB) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.5
  const H = 2.0
  const D = 0.58

  const body = roundedBox(W, H, D, colorHex, true, 0.012, 3, glossyMat)
  body.position.y = H / 2
  g.add(body)

  const frameInset = 0.035
  const doorW = W / 2 - 0.05
  const doorH = 0.58
  const rows = [1.7, 1.08, 0.46]
  for (let col = -1; col <= 1; col += 2) {
    for (const y of rows) {
      const door = roundedBox(doorW, doorH, 0.035, colorHex, true, 0.01, 2, glossyMat)
      door.position.set(col * (W / 4), y, D / 2 + 0.018)
      g.add(door)

      const inset = roundedBox(doorW - 0.07, doorH - 0.08, 0.01, colorHex, true, 0.008, 2, glossyMat)
      inset.position.set(col * (W / 4), y, D / 2 + 0.037)
      inset.scale.set(0.98, 0.98, 1)
      g.add(inset)

      const label = roundedBox(0.18, 0.085, 0.012, 0xc6c6c6, false, 0.006, 2, glossyMat)
      label.userData.colorable = false
      label.position.set(col * (W / 4), y + 0.16, D / 2 + 0.04)
      g.add(label)

      const handleFrame = roundedBox(0.14, 0.05, 0.02, 0xbfc2c6, false, 0.008, 2, metalMat)
      handleFrame.userData.colorable = false
      handleFrame.position.set(col * (W / 4), y - 0.16, D / 2 + 0.043)
      g.add(handleFrame)

      const pull = cylinder(0.006, 0.006, 0.08, 0x8f959b, false, 12)
      pull.rotation.z = Math.PI / 2
      pull.position.set(col * (W / 4), y - 0.16, D / 2 + 0.056)
      pull.material = metalMat(0x8f959b)
      g.add(pull)
    }
  }

  const sidePanelL = roundedBox(0.03, H - 0.04, D - 0.04, colorHex, true, 0.008, 2, glossyMat)
  sidePanelL.position.set(-W / 2 + frameInset / 2, H / 2, 0)
  g.add(sidePanelL)
  const sidePanelR = sidePanelL.clone()
  sidePanelR.position.x = W / 2 - frameInset / 2
  g.add(sidePanelR)

  const centerDivider = roundedBox(0.03, H - 0.04, D - 0.04, colorHex, true, 0.008, 2, glossyMat)
  centerDivider.position.set(0, H / 2, 0)
  g.add(centerDivider)

  const plinth = roundedBox(W, 0.08, D, 0x171717, false, 0.008, 2, glossyMat)
  plinth.position.y = 0.04
  g.add(plinth)

  const top = roundedBox(W, 0.04, D, 0x2a2a2a, false, 0.008, 2, glossyMat)
  top.position.y = H + 0.02
  g.add(top)
  return g
}

/** Bookshelf */
export function buildBookshelf(colorHex = 0x8B5E3C) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 0.86
  const H = 1.86
  const D = 0.34

  const sideL = roundedBox(0.05, H, D, colorHex, true, 0.01, 3, woodMat)
  sideL.position.set(-W / 2 + 0.025, H / 2, 0)
  g.add(sideL)
  const sideR = sideL.clone()
  sideR.position.set(W / 2 - 0.025, H / 2, 0)
  g.add(sideR)

  const topB = roundedBox(W, 0.05, D, colorHex, true, 0.012, 3, woodMat)
  topB.position.y = H - 0.025
  g.add(topB)
  const botB = topB.clone()
  botB.position.y = 0.025
  g.add(botB)

  addShelfBackSlats(g, W - 0.08, H - 0.14, D - 0.04, 7, 0x6d5642)

  const shelfYs = [1.5, 1.15, 0.8, 0.45]
  shelfYs.forEach((y) => {
    const shelf = roundedBox(W - 0.08, 0.035, D - 0.04, 0xd8c39a, false, 0.01, 3, woodMat)
    shelf.userData.colorable = false
    shelf.position.y = y
    g.add(shelf)
  })

  for (const x of [-0.16, 0.16]) {
    const drawer = roundedBox(0.28, 0.16, D - 0.02, colorHex, true, 0.014, 3, woodMat)
    drawer.position.set(x, 0.08, 0)
    g.add(drawer)

    const knob = cylinder(0.012, 0.012, 0.025, 0x98724f, false, 12)
    knob.position.set(x, 0.08, D / 2 + 0.015)
    knob.material = metalMat(0x98724f)
    g.add(knob)
  }

  return g
}

/** Office Desk */
export function buildOfficeDesk(colorHex = 0xF5F0EB) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.55
  const H = 0.78
  const D = 0.74

  const top = roundedBox(W, 0.06, D, colorHex, true, 0.02, 3, woodMat)
  top.position.y = H - 0.03
  g.add(top)

  const leftPedestal = roundedBox(0.42, H - 0.08, D - 0.04, colorHex, true, 0.015, 3, woodMat)
  leftPedestal.position.set(-W / 2 + 0.24, (H - 0.08) / 2, 0)
  g.add(leftPedestal)

  const rightPedestal = leftPedestal.clone()
  rightPedestal.position.x = W / 2 - 0.24
  g.add(rightPedestal)

  for (let i = 0; i < 4; i++) {
    const y = 0.12 + i * 0.15

    const leftDrawer = roundedBox(0.34, 0.1, 0.03, 0x2f231b, false, 0.01, 2, woodMat)
    leftDrawer.userData.colorable = false
    leftDrawer.position.set(-W / 2 + 0.24, y, D / 2 + 0.02)
    g.add(leftDrawer)
    addDeskHandle(g, -W / 2 + 0.24, y, D / 2 + 0.045, 0.1)

    const rightDrawer = leftDrawer.clone()
    rightDrawer.position.x = W / 2 - 0.24
    g.add(rightDrawer)
    addDeskHandle(g, W / 2 - 0.24, y, D / 2 + 0.045, 0.1)
  }

  const centerDrawer = roundedBox(0.48, 0.11, 0.035, 0x2f231b, false, 0.012, 2, woodMat)
  centerDrawer.userData.colorable = false
  centerDrawer.position.set(0, H - 0.17, D / 2 + 0.02)
  g.add(centerDrawer)
  addDeskHandle(g, 0, H - 0.17, D / 2 + 0.047, 0.12)

  const modestyPanel = roundedBox(0.72, 0.18, 0.03, 0x3a2b22, false, 0.01, 2, woodMat)
  modestyPanel.userData.colorable = false
  modestyPanel.position.set(0, 0.47, -D / 2 + 0.06)
  g.add(modestyPanel)

  const innerSupportL = roundedBox(0.04, H - 0.08, 0.08, 0x433126, false, 0.01, 2, woodMat)
  innerSupportL.position.set(-0.24, (H - 0.08) / 2, -D / 2 + 0.08)
  g.add(innerSupportL)
  const innerSupportR = innerSupportL.clone()
  innerSupportR.position.x = 0.24
  g.add(innerSupportR)
  return g
}

/** TV Stand */
export function buildTVStand(colorHex = 0x4A2C0A) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.55
  const H = 0.54
  const D = 0.42

  const top = roundedBox(W, 0.05, D, colorHex, true, 0.02, 3, woodMat)
  top.position.y = H - 0.025
  g.add(top)

  const body = roundedBox(W - 0.03, H - 0.08, D - 0.02, colorHex, true, 0.016, 3, woodMat)
  body.position.y = (H - 0.08) / 2
  g.add(body)

  for (let i = -1; i <= 1; i += 2) {
    const door = roundedBox(0.48, H - 0.16, 0.028, 0x3a2b22, false, 0.012, 2, woodMat)
    door.userData.colorable = false
    door.position.set(i * 0.38, H / 2 - 0.05, D / 2 + 0.018)
    g.add(door)

    const inset = roundedBox(0.34, H - 0.24, 0.012, 0x4a3528, false, 0.008, 2, woodMat)
    inset.userData.colorable = false
    inset.position.set(i * 0.38, H / 2 - 0.05, D / 2 + 0.034)
    g.add(inset)

    addDeskHandle(g, i * 0.38, H / 2 - 0.05, D / 2 + 0.05, 0.08)
  }

  const centerShelf = roundedBox(0.42, 0.025, D - 0.08, 0x2f231b, false, 0.008, 2, woodMat)
  centerShelf.position.set(0, 0.25, 0)
  g.add(centerShelf)

  const openingFrameL = roundedBox(0.03, H - 0.14, D - 0.04, 0x39291f, false, 0.008, 2, woodMat)
  openingFrameL.position.set(-0.23, (H - 0.14) / 2 + 0.02, 0)
  g.add(openingFrameL)
  const openingFrameR = openingFrameL.clone()
  openingFrameR.position.x = 0.23
  g.add(openingFrameR)

  const plinth = roundedBox(W - 0.08, 0.05, D - 0.05, 0x231a15, false, 0.008, 2, woodMat)
  plinth.position.y = 0.025
  g.add(plinth)
  return g
}

/** Side/Bedside Table */
export function buildSideTable(colorHex = 0x8B5E3C) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 0.48
  const H = 0.6
  const D = 0.46

  const top = roundedBox(W, 0.04, D, colorHex, true, 0.014, 3, woodMat)
  top.position.y = H - 0.02
  g.add(top)

  const body = roundedBox(W, 0.22, D - 0.02, colorHex, true, 0.015, 3, woodMat)
  body.position.y = H - 0.2
  g.add(body)

  const drawer = roundedBox(W - 0.06, 0.14, 0.03, 0x654832, false, 0.012, 2, woodMat)
  drawer.userData.colorable = false
  drawer.position.set(0, H - 0.2, D / 2 + 0.018)
  g.add(drawer)
  const handle = cylinder(0.008, 0.008, 0.08, 0xa98865, false, 12)
  handle.rotation.z = Math.PI / 2
  handle.position.set(0, H - 0.2, D / 2 + 0.043)
  handle.material = metalMat(0xa98865)
  g.add(handle)

  const shelf = roundedBox(W - 0.08, 0.028, D - 0.08, 0x3a2a1f, false, 0.008, 2, woodMat)
  shelf.position.y = 0.22
  g.add(shelf)

  const legH = H - 0.26
  addLegs(g, W - 0.08, D - 0.08, legH, legH / 2 + 0.02, 0x5c412f, 0.04)
  return g
}

/** Floor Lamp */
export function buildFloorLamp(colorHex = 0xF5F0EB) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const base = cylinder(0.16, 0.18, 0.04, 0xc8c4bb, false, 24)
  base.position.y = 0.02
  base.material = metalMat(0xc8c4bb)
  g.add(base)

  const baseStep = cylinder(0.1, 0.12, 0.05, 0xd7d2c8, false, 24)
  baseStep.position.y = 0.065
  baseStep.material = metalMat(0xd7d2c8)
  g.add(baseStep)

  const pole = cylinder(0.012, 0.014, 1.25, 0xb8b2a8, false, 18)
  pole.position.y = 0.72
  pole.material = metalMat(0xb8b2a8)
  g.add(pole)

  const collarA = cylinder(0.02, 0.02, 0.02, 0xcfc8be, false, 18)
  collarA.position.y = 0.48
  collarA.material = metalMat(0xcfc8be)
  g.add(collarA)
  const collarB = collarA.clone()
  collarB.position.y = 0.92
  g.add(collarB)

  const shade = cylinder(0.18, 0.28, 0.3, colorHex, true, 28)
  shade.position.y = 1.45
  shade.material = cushionMat(colorHex)
  g.add(shade)

  const shadeInner = cylinder(0.11, 0.2, 0.22, 0xf4efe7, false, 24)
  shadeInner.position.y = 1.39
  shadeInner.material = cushionMat(0xf4efe7)
  shadeInner.userData.colorable = false
  g.add(shadeInner)

  return g
}

/** Metal Locker / Storage Cabinet */
export function buildMetalLocker(colorHex = 0x1A1A1A) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 0.82
  const H = 1.92
  const D = 0.44

  const shell = roundedBox(W, H, D, colorHex, true, 0.01, 3, glossyMat)
  shell.position.y = H / 2
  g.add(shell)

  const rows = [1.62, 1.0, 0.38]
  for (let col = -1; col <= 1; col += 2) {
    for (const y of rows) {
      const door = roundedBox(0.35, 0.54, 0.026, colorHex, true, 0.008, 2, glossyMat)
      door.position.set(col * 0.2, y, D / 2 + 0.015)
      g.add(door)

      const inset = roundedBox(0.29, 0.48, 0.01, colorHex, true, 0.006, 2, glossyMat)
      inset.position.set(col * 0.2, y, D / 2 + 0.03)
      g.add(inset)

      const label = roundedBox(0.11, 0.055, 0.01, 0xc8c8c8, false, 0.004, 2, glossyMat)
      label.userData.colorable = false
      label.position.set(col * 0.2, y + 0.15, D / 2 + 0.033)
      g.add(label)

      const pullPlate = roundedBox(0.11, 0.05, 0.018, 0xb7bcc2, false, 0.006, 2, metalMat)
      pullPlate.userData.colorable = false
      pullPlate.position.set(col * 0.2, y - 0.15, D / 2 + 0.035)
      g.add(pullPlate)

      const pull = cylinder(0.005, 0.005, 0.06, 0x848a91, false, 12)
      pull.rotation.z = Math.PI / 2
      pull.position.set(col * 0.2, y - 0.15, D / 2 + 0.048)
      pull.material = metalMat(0x848a91)
      g.add(pull)
    }
  }

  const plinth = roundedBox(W, 0.05, D, 0x101010, false, 0.006, 2, glossyMat)
  plinth.position.y = 0.025
  g.add(plinth)

  return g
}

// ── Main dispatcher ──
export function buildFurniture(furnitureId, colorHex) {
  const builders = {
    sofa_3seater:  buildSofa3Seater,
    loveseat:      buildLoveseat,
    armchair:      buildArmchair,
    coffee_table:  buildCoffeeTable,
    dining_table:  buildDiningTable,
    dining_chair:  buildDiningChair,
    bed_queen:     buildQueenBed,
    wardrobe:      buildWardrobe,
    bookshelf:     buildBookshelf,
    office_desk:   buildOfficeDesk,
    tv_stand:      buildTVStand,
    side_table:    buildSideTable,
    floor_lamp:    buildFloorLamp,
    metal_locker:  buildMetalLocker,
  }
  const fn = builders[furnitureId]
  if (!fn) {
    console.warn(`No builder for ${furnitureId}, using fallback box`)
    const g = new THREE.Group()
    g.userData.isFurniture = true
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: colorHex ?? 0x8B5E3C })
    )
    mesh.position.y = 0.5
    g.add(mesh)
    return g
  }
  return buildWithOptionalGlb(furnitureId, colorHex, fn)
}

/** Apply color change to all colorable meshes in a group */
export function applyColor(group, colorHex) {
  group.traverse(child => {
    if (child.isMesh && child.userData.colorable !== false) {
      child.material = child.material.clone()
      child.material.color.setHex(colorHex)
    }
  })
}

/** Highlight or unhighlight selected furniture */
export function setHighlight(group, on) {
  group.traverse(child => {
    if (child.isMesh) {
      if (!child.material._originalEmissive) {
        child.material._originalEmissive = child.material.emissive.getHex()
      }
      child.material.emissive.setHex(on ? 0x333322 : (child.material._originalEmissive ?? 0x000000))
    }
  })
}
