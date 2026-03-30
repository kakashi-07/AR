/**
 * furnitureBuilder.js
 * Procedural Three.js furniture models for AR visualization.
 * All units are in meters (roughly real-world scale).
 */
import * as THREE from 'three'

// ── Shared geometry cache ──
const geoCache = {}
function cached(key, factory) {
  if (!geoCache[key]) geoCache[key] = factory()
  return geoCache[key]
}

// ── Material helpers ──
function mat(colorHex, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color:     colorHex,
    roughness: opts.roughness ?? 0.75,
    metalness: opts.metalness ?? 0.05,
    ...opts,
  })
}
function legMat() {
  return mat(0x2a2a2a, { roughness: 0.4, metalness: 0.6 })
}
function cushionMat(colorHex) {
  return mat(colorHex, { roughness: 0.9, metalness: 0.0 })
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

// ─────────────────────────────────────────────────────────────
//  BUILD FUNCTIONS
// ─────────────────────────────────────────────────────────────

/** 3-Seater Sofa */
export function buildSofa3Seater(colorHex = 0x8B5E3C) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.8, D = 0.85
  // Platform base
  const base = box(W, 0.1, D, 0x2a2a2a, false)
  base.position.y = 0.05
  g.add(base)
  // Seat
  const seat = box(W - 0.04, 0.22, D - 0.2, colorHex)
  seat.position.set(0, 0.27, 0.04)
  g.add(seat)
  // Backrest
  const back = box(W - 0.04, 0.55, 0.14, colorHex)
  back.position.set(0, 0.615, -(D/2 - 0.1))
  g.add(back)
  // Armrests
  const armL = box(0.14, 0.42, D, colorHex)
  armL.position.set(-W/2 + 0.07, 0.31, 0)
  g.add(armL)
  const armR = armL.clone()
  armR.position.set(W/2 - 0.07, 0.31, 0)
  g.add(armR)
  // 3 seat cushions
  for (let i = -1; i <= 1; i++) {
    const cushion = box(0.52, 0.1, 0.58, colorHex)
    cushion.position.set(i * 0.55, 0.44, 0.05)
    cushion.scale.set(1, 1, 1)
    g.add(cushion)
  }
  // Back cushions
  for (let i = -1; i <= 1; i++) {
    const bc = box(0.52, 0.38, 0.1, colorHex)
    bc.position.set(i * 0.55, 0.62, -(D/2 - 0.2))
    g.add(bc)
  }
  // Metal legs
  addLegs(g, W - 0.04, D - 0.04, 0.1, 0.05, 0x1a1a1a)
  return g
}

/** Loveseat */
export function buildLoveseat(colorHex = 0xD4B896) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.3, D = 0.82
  const base = box(W, 0.1, D, 0x2a2a2a, false)
  base.position.y = 0.05
  g.add(base)
  const seat = box(W - 0.04, 0.22, D - 0.2, colorHex)
  seat.position.set(0, 0.27, 0.04)
  g.add(seat)
  const back = box(W - 0.04, 0.55, 0.14, colorHex)
  back.position.set(0, 0.615, -(D/2 - 0.1))
  g.add(back)
  const armL = box(0.14, 0.42, D, colorHex)
  armL.position.set(-W/2 + 0.07, 0.31, 0)
  g.add(armL)
  const armR = armL.clone()
  armR.position.set(W/2 - 0.07, 0.31, 0)
  g.add(armR)
  for (let i = -0.5; i <= 0.5; i++) {
    const cushion = box(0.55, 0.1, 0.58, colorHex)
    cushion.position.set(i * 1.1 * 0.5, 0.44, 0.05)
    g.add(cushion)
    const bc = box(0.55, 0.38, 0.1, colorHex)
    bc.position.set(i * 1.1 * 0.5, 0.62, -(D/2 - 0.2))
    g.add(bc)
  }
  addLegs(g, W, D, 0.1, 0.05, 0x1a1a1a)
  return g
}

/** Armchair */
export function buildArmchair(colorHex = 0x4A2C0A) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 0.75, D = 0.8
  const base = box(W, 0.08, D, 0x2a2a2a, false)
  base.position.y = 0.04
  g.add(base)
  const seat = box(W - 0.04, 0.2, D - 0.22, colorHex)
  seat.position.set(0, 0.24, 0.04)
  g.add(seat)
  const back = box(W - 0.04, 0.55, 0.12, colorHex)
  back.position.set(0, 0.59, -(D/2 - 0.1))
  g.add(back)
  const armL = box(0.12, 0.35, D, colorHex)
  armL.position.set(-W/2 + 0.06, 0.27, 0)
  g.add(armL)
  const armR = armL.clone()
  armR.position.set(W/2 - 0.06, 0.27, 0)
  g.add(armR)
  const cushion = box(W - 0.26, 0.08, 0.5, colorHex)
  cushion.position.set(0, 0.38, 0.06)
  g.add(cushion)
  addLegs(g, W, D, 0.08, 0.04, 0x1a1a1a)
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

  const W = 0.45, D = 0.48, SH = 0.46
  // Seat
  const seat = box(W, 0.06, D, colorHex)
  seat.position.y = SH
  g.add(seat)
  // Cushion
  const cushion = box(W - 0.04, 0.05, D - 0.04, colorHex)
  cushion.position.y = SH + 0.055
  g.add(cushion)
  // Backrest (2 rails + panel)
  const br = box(W, 0.36, 0.04, colorHex)
  br.position.set(0, SH + 0.38, -(D/2 - 0.02))
  g.add(br)
  const topRail = box(W, 0.06, 0.04, colorHex)
  topRail.position.set(0, SH + 0.6, -(D/2 - 0.02))
  g.add(topRail)
  // Legs
  const legH = SH
  addLegs(g, W - 0.04, D - 0.04, legH, legH/2, colorHex, 0.04)
  return g
}

/** Queen Bed */
export function buildQueenBed(colorHex = 0x4A2C0A) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.6, L = 2.1, FH = 0.22

  // Platform frame
  const frame = box(W, 0.14, L, colorHex)
  frame.position.y = 0.07
  g.add(frame)
  // Mattress
  const mattress = box(W - 0.06, 0.22, L - 0.1, 0xEEEEEE)
  mattress.userData.colorable = false
  mattress.position.y = 0.25
  g.add(mattress)
  // Headboard
  const headboard = box(W, 0.65, 0.1, colorHex)
  headboard.position.set(0, 0.47, -(L/2 - 0.06))
  g.add(headboard)
  // Footboard (smaller)
  const footboard = box(W, 0.28, 0.08, colorHex)
  footboard.position.set(0, 0.28, L/2 - 0.05)
  g.add(footboard)
  // Pillows
  for (let i = -0.5; i <= 0.5; i += 1) {
    const pillow = box(0.65, 0.1, 0.38, 0xFAF7F2)
    pillow.userData.colorable = false
    pillow.position.set(i * 0.68, 0.39, -(L/2 - 0.55))
    g.add(pillow)
  }
  // Legs
  addLegs(g, W, L, 0.1, 0.05, 0x1a1a1a)
  return g
}

/** Wardrobe */
export function buildWardrobe(colorHex = 0xF5F0EB) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.5, H = 2.0, D = 0.55
  // Main body
  const body = box(W, H, D, colorHex)
  body.position.y = H / 2
  g.add(body)
  // Door panels (3 with slight inset)
  const dW = W / 3 - 0.02
  for (let i = -1; i <= 1; i++) {
    const door = box(dW, H - 0.06, 0.02, colorHex)
    door.position.set(i * (W/3), H/2, D/2 + 0.01)
    g.add(door)
    // Handle
    const handle = cylinder(0.01, 0.01, 0.12, 0xaaaaaa, false)
    handle.rotation.z = Math.PI / 2
    handle.userData.colorable = false
    handle.position.set(i * (W/3) + (i >= 0 ? -dW/2 + 0.05 : dW/2 - 0.05), H/2, D/2 + 0.03)
    g.add(handle)
  }
  // Base plinth
  const plinth = box(W, 0.08, D, 0x222222, false)
  plinth.position.y = 0.04
  g.add(plinth)
  // Top panel
  const top = box(W, 0.04, D, colorHex)
  top.position.y = H + 0.02
  g.add(top)
  return g
}

/** Bookshelf */
export function buildBookshelf(colorHex = 0x8B5E3C) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 0.8, H = 1.8, D = 0.3, panels = 5
  // Side panels
  const sideL = box(0.03, H, D, colorHex)
  sideL.position.set(-W/2 + 0.015, H/2, 0)
  g.add(sideL)
  const sideR = sideL.clone()
  sideR.position.set(W/2 - 0.015, H/2, 0)
  g.add(sideR)
  // Top & bottom
  const topB = box(W, 0.03, D, colorHex)
  topB.position.y = H - 0.015
  g.add(topB)
  const botB = topB.clone()
  botB.position.y = 0.015
  g.add(botB)
  // Shelves
  const shelfH = H / (panels + 1)
  for (let i = 1; i <= panels - 1; i++) {
    const shelf = box(W - 0.06, 0.025, D - 0.02, colorHex)
    shelf.position.y = shelfH * i
    g.add(shelf)
    // Decorative books (colored boxes)
    const bookColors = [0xC45C26, 0x2C5F8A, 0x47804E, 0x8A3B8A, 0xB8860B]
    let x = -W/2 + 0.06
    for (let b = 0; b < 4; b++) {
      const bW = 0.04 + Math.random() * 0.04
      const bH = 0.12 + Math.random() * 0.06
      const book = box(bW, bH, D - 0.04, bookColors[b % bookColors.length], false)
      book.position.set(x + bW/2, shelfH * i + 0.025 + bH/2, 0)
      g.add(book)
      x += bW + 0.005
    }
  }
  return g
}

/** Office Desk */
export function buildOfficeDesk(colorHex = 0xF5F0EB) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.4, H = 0.75, D = 0.7
  // Top
  const top = box(W, 0.04, D, colorHex)
  top.position.y = H - 0.02
  g.add(top)
  // Left side panel (storage unit)
  const leftPanel = box(0.45, H - 0.04, D, colorHex)
  leftPanel.position.set(-W/2 + 0.225, (H - 0.04)/2, 0)
  g.add(leftPanel)
  // Drawer faces
  for (let i = 0; i < 3; i++) {
    const drawer = box(0.41, 0.14, 0.02, colorHex)
    drawer.position.set(-W/2 + 0.225, 0.1 + i * 0.18, D/2 + 0.01)
    g.add(drawer)
    const handle = box(0.12, 0.015, 0.015, 0xaaaaaa, false)
    handle.userData.colorable = false
    handle.position.set(-W/2 + 0.225, 0.1 + i * 0.18, D/2 + 0.025)
    g.add(handle)
  }
  // Right leg
  const legR = box(0.04, H - 0.04, D, colorHex)
  legR.position.set(W/2 - 0.02, (H - 0.04)/2, 0)
  g.add(legR)
  return g
}

/** TV Stand */
export function buildTVStand(colorHex = 0x4A2C0A) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 1.5, H = 0.5, D = 0.4
  // Body
  const body = box(W, H, D, colorHex)
  body.position.y = H/2
  g.add(body)
  // 2 cabinet doors
  const dW = W/2 - 0.04
  for (let i = -1; i <= 1; i += 2) {
    const door = box(dW, H - 0.06, 0.02, colorHex)
    door.position.set(i * (W/4), H/2, D/2 + 0.01)
    g.add(door)
    const handle = cylinder(0.008, 0.008, 0.1, 0xaaaaaa, false)
    handle.rotation.z = Math.PI/2
    handle.userData.colorable = false
    handle.position.set(i * (W/4) - i * 0.1, H/2, D/2 + 0.025)
    g.add(handle)
  }
  // Center divider (open slot)
  const dividerL = box(0.02, H - 0.06, D, colorHex)
  dividerL.position.set(-0.02, H/2, 0)
  g.add(dividerL)
  const dividerR = dividerL.clone()
  dividerR.position.set(0.02, H/2, 0)
  g.add(dividerR)
  // Plinth base
  const plinth = box(W - 0.1, 0.04, D - 0.06, 0x1a1a1a, false)
  plinth.position.y = 0.02
  g.add(plinth)
  return g
}

/** Side/Bedside Table */
export function buildSideTable(colorHex = 0x8B5E3C) {
  const g = new THREE.Group()
  g.userData.isFurniture = true

  const W = 0.45, H = 0.58, D = 0.45
  // Top
  const top = box(W, 0.035, D, colorHex)
  top.position.y = H - 0.018
  g.add(top)
  // Drawer body
  const body = box(W, 0.2, D, colorHex)
  body.position.y = H - 0.22
  g.add(body)
  // Drawer face
  const drawer = box(W - 0.04, 0.16, 0.02, colorHex)
  drawer.position.set(0, H - 0.22, D/2 + 0.01)
  g.add(drawer)
  const handle = cylinder(0.008, 0.008, 0.08, 0xaaaaaa, false)
  handle.rotation.z = Math.PI/2
  handle.userData.colorable = false
  handle.position.set(0, H - 0.22, D/2 + 0.025)
  g.add(handle)
  // Legs
  const legH = H - 0.24
  addLegs(g, W - 0.06, D - 0.06, legH, legH/2 + 0.02, colorHex, 0.04)
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
  return fn(colorHex)
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
