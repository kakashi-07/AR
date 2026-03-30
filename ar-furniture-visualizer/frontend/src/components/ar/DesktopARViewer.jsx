/**
 * DesktopARViewer.jsx
 * Three.js-based AR viewer for desktop.
 * - Uploaded room photo as background
 * - Interactive 3D furniture placement
 * - Drag to move, scroll to scale, R to rotate, Delete to remove
 */
import { useEffect, useRef, useCallback, useState } from 'react'
import * as THREE from 'three'
import { useScene } from '../../contexts/SceneContext'
import { buildFurniture, applyColor, setHighlight } from '../../utils/furnitureBuilder'

function normalizeAngleDelta(delta) {
  let next = delta
  while (next > Math.PI) next -= Math.PI * 2
  while (next < -Math.PI) next += Math.PI * 2
  return next
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

function drawExactImage(ctx, img, width, height) {
  ctx.drawImage(img, 0, 0, width, height)
}

export default function DesktopARViewer() {
  const [isCompactMobile, setIsCompactMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 768
  })
  const viewportRef = useRef(null)
  const containerRef = useRef(null)
  const canvasRef    = useRef(null)
  const rendererRef  = useRef(null)
  const sceneRef     = useRef(null)
  const cameraRef    = useRef(null)
  const groundRef    = useRef(null)
  const meshMapRef   = useRef({})     // id → THREE.Group
  const selectedIdRef = useRef(null)  // currently selected object id
  const isDraggingRef = useRef(false)
  const dragOffsetRef = useRef(new THREE.Vector3())
  const raycasterRef  = useRef(new THREE.Raycaster())
  const mouseRef      = useRef(new THREE.Vector2())
  const rafRef        = useRef(null)
  const [roomImageSize, setRoomImageSize] = useState(null)
  const [stageSize, setStageSize] = useState(null)
  const {
    objects, selectedId, roomImage,
    selectObject, removeObject, updateTransform,
  } = useScene()

  useEffect(() => {
    selectedIdRef.current = selectedId
  }, [selectedId])

  const persistTransform = useCallback((id) => {
    if (!id) return
    const mesh = meshMapRef.current[id]
    if (!mesh) return

    updateTransform(id, {
      scale: mesh.scale.x,
      rotationY: mesh.rotation.y,
      position: {
        x: mesh.position.x,
        y: mesh.position.y,
        z: mesh.position.z,
      },
    })
  }, [updateTransform])

  useEffect(() => {
    let cancelled = false

    if (!roomImage) {
      setRoomImageSize(null)
      return
    }

    loadImage(roomImage)
      .then((img) => {
        if (!cancelled) {
          setRoomImageSize({ width: img.width, height: img.height })
        }
      })
      .catch(() => {
        if (!cancelled) {
          setRoomImageSize(null)
        }
      })

    return () => {
      cancelled = true
    }
  }, [roomImage])

  useEffect(() => {
    const updateStageSize = () => {
      const viewport = viewportRef.current
      if (!viewport) return

      const viewportWidth = viewport.clientWidth
      const viewportHeight = viewport.clientHeight

      if (!viewportWidth || !viewportHeight) return

      if (!roomImageSize?.width || !roomImageSize?.height) {
        setStageSize({ width: viewportWidth, height: viewportHeight })
        return
      }

      const imageAspect = roomImageSize.width / roomImageSize.height
      let nextWidth = viewportWidth
      let nextHeight = nextWidth / imageAspect

      if (nextHeight > viewportHeight) {
        nextHeight = viewportHeight
        nextWidth = nextHeight * imageAspect
      }

      setStageSize({
        width: Math.max(1, Math.round(nextWidth)),
        height: Math.max(1, Math.round(nextHeight)),
      })
    }

    updateStageSize()
    window.addEventListener('resize', updateStageSize)
    return () => window.removeEventListener('resize', updateStageSize)
  }, [roomImageSize])

  // ── Initialize Three.js scene ──────────────────────────────
  useEffect(() => {
    const updateViewportMode = () => {
      setIsCompactMobile(window.innerWidth < 768)
    }

    const container = containerRef.current
    if (!container) return

    const w = container.clientWidth
    const h = container.clientHeight

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
    })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace

    // Scene
    const scene = new THREE.Scene()

    // Camera (isometric-ish perspective)
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.01, 100)
    camera.position.set(0, 4.5, 7)
    camera.lookAt(0, 0, 0)

    // Lighting
    const ambient = new THREE.AmbientLight(0xfff8f0, 0.7)
    scene.add(ambient)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
    dirLight.position.set(5, 10, 7)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width  = 2048
    dirLight.shadow.mapSize.height = 2048
    dirLight.shadow.camera.near = 0.1
    dirLight.shadow.camera.far  = 50
    dirLight.shadow.camera.left = -10
    dirLight.shadow.camera.right = 10
    dirLight.shadow.camera.top  = 10
    dirLight.shadow.camera.bottom = -10
    scene.add(dirLight)

    const fillLight = new THREE.DirectionalLight(0xc8d8ff, 0.4)
    fillLight.position.set(-5, 3, -5)
    scene.add(fillLight)

    // Invisible ground plane for raycasting & shadows
    const groundGeo = new THREE.PlaneGeometry(30, 30)
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.25 })
    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    ground.name = 'ground'
    scene.add(ground)
    groundRef.current = ground

    // Subtle grid
    const grid = new THREE.GridHelper(20, 40, 0x444455, 0x2a2a3a)
    grid.material.opacity = 0.25
    grid.material.transparent = true
    scene.add(grid)

    sceneRef.current   = scene
    rendererRef.current = renderer
    cameraRef.current   = camera

    // Render loop
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const onResize = () => {
      updateViewportMode()
      const cw = container.clientWidth
      const ch = container.clientHeight
      if (!cw || !ch) return
      camera.aspect = cw / ch
      camera.updateProjectionMatrix()
      renderer.setSize(cw, ch)
    }

    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(container)
    updateViewportMode()
    onResize()
    window.addEventListener('resize', updateViewportMode)

    return () => {
      cancelAnimationFrame(rafRef.current)
      renderer.dispose()
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateViewportMode)
    }
  }, [])

  // ── Sync Three.js meshes with React scene objects ──────────
  useEffect(() => {
    const scene   = sceneRef.current
    const meshMap = meshMapRef.current
    if (!scene) return

    // Find newly added objects
    objects.forEach(obj => {
      if (!meshMap[obj.id]) {
        // Build and add the mesh
        const group = buildFurniture(obj.furnitureId, obj.colorHex)
        group.userData.sceneObjId = obj.id
        group.userData.isFurniture = true

        // Center on ground
        group.position.set(
          (Math.random() - 0.5) * 2,
          0,
          (Math.random() - 0.5) * 2
        )
        scene.add(group)
        meshMap[obj.id] = group
      }
    })

    // Find removed objects
    const currentIds = new Set(objects.map(o => o.id))
    Object.keys(meshMap).forEach(id => {
      if (!currentIds.has(id)) {
        scene.remove(meshMap[id])
        delete meshMap[id]
      }
    })

    // Update highlights
    Object.entries(meshMap).forEach(([id, group]) => {
      setHighlight(group, id === selectedId)
    })

  }, [objects, selectedId])

  // ── Sync color changes ──────────────────────────────────────
  useEffect(() => {
    objects.forEach(obj => {
      const mesh = meshMapRef.current[obj.id]
      if (mesh) {
        applyColor(mesh, obj.colorHex)
        setHighlight(mesh, obj.id === selectedId)
      }
    })
  }, [objects.map(o => `${o.id}:${o.colorHex}`).join(',')]) // eslint-disable-line

  // ── Mouse helpers ───────────────────────────────────────────
  const setPointerFromClient = useCallback((clientX, clientY) => {
    const rect = canvasRef.current.getBoundingClientRect()
    mouseRef.current.x = ((clientX - rect.left) / rect.width) * 2 - 1
    mouseRef.current.y = -((clientY - rect.top) / rect.height) * 2 + 1
  }, [])

  const getNDC = useCallback((e) => {
    setPointerFromClient(e.clientX, e.clientY)
  }, [setPointerFromClient])

  const raycastGround = useCallback((e) => {
    getNDC(e)
    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current)
    const hits = raycasterRef.current.intersectObject(groundRef.current)
    return hits.length > 0 ? hits[0].point : null
  }, [getNDC])

  const raycastGroundAtClient = useCallback((clientX, clientY) => {
    setPointerFromClient(clientX, clientY)
    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current)
    const hits = raycasterRef.current.intersectObject(groundRef.current)
    return hits.length > 0 ? hits[0].point : null
  }, [setPointerFromClient])

  const getFurnitureAtMouse = useCallback((e) => {
    getNDC(e)
    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current)
    const meshes = Object.values(meshMapRef.current)
    const hits   = raycasterRef.current.intersectObjects(meshes, true)
    if (hits.length === 0) return null

    // Walk up to root furniture group
    let obj = hits[0].object
    while (obj.parent && !obj.userData.isFurniture) {
      obj = obj.parent
    }
    return obj.userData.isFurniture ? obj : null
  }, [getNDC])

  const getFurnitureAtClient = useCallback((clientX, clientY) => {
    setPointerFromClient(clientX, clientY)
    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current)
    const meshes = Object.values(meshMapRef.current)
    const hits = raycasterRef.current.intersectObjects(meshes, true)
    if (hits.length === 0) return null

    let obj = hits[0].object
    while (obj.parent && !obj.userData.isFurniture) {
      obj = obj.parent
    }
    return obj.userData.isFurniture ? obj : null
  }, [setPointerFromClient])

  // ── Mouse event handlers ────────────────────────────────────
  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return
    const hit = getFurnitureAtMouse(e)
    const activeId = hit?.userData.sceneObjId || selectedIdRef.current
    const activeMesh = activeId ? meshMapRef.current[activeId] : null
    const groundPt = raycastGround(e)

    if (activeId && activeMesh && groundPt) {
      selectObject(activeId)
      selectedIdRef.current = activeId
      isDraggingRef.current = true
      canvasRef.current.classList.add('dragging')
      dragOffsetRef.current.copy(activeMesh.position).sub(groundPt)
      dragOffsetRef.current.y = 0
    }
  }, [getFurnitureAtMouse, raycastGround, selectObject])

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current || !selectedIdRef.current) return
    const groundPt = raycastGround(e)
    if (!groundPt) return
    const mesh = meshMapRef.current[selectedIdRef.current]
    if (!mesh) return
    const targetX = groundPt.x + dragOffsetRef.current.x
    const targetZ = groundPt.z + dragOffsetRef.current.z
    mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, targetX, 0.4)
    mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, targetZ, 0.4)
  }, [raycastGround])

  const handleMouseUp = useCallback(() => {
    if (selectedIdRef.current) {
      persistTransform(selectedIdRef.current)
    }
    isDraggingRef.current = false
    canvasRef.current?.classList.remove('dragging')
  }, [persistTransform])

  const handleWheel = useCallback((e) => {
    e.preventDefault()
    if (!selectedIdRef.current) return
    const mesh = meshMapRef.current[selectedIdRef.current]
    if (!mesh) return
    const delta = e.deltaY > 0 ? 0.95 : 1.05
    mesh.scale.multiplyScalar(delta)
    // Clamp scale
    const s = Math.max(0.1, Math.min(5, mesh.scale.x))
    mesh.scale.set(s, s, s)
    persistTransform(selectedIdRef.current)
  }, [persistTransform])

  // ── Keyboard controls ────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (!selectedIdRef.current) return
      const mesh = meshMapRef.current[selectedIdRef.current]
      if (!mesh) return
      const rotationStep = Math.PI / 12

      if (e.key === 'r' || e.key === 'R') {
        mesh.rotation.y += rotationStep
        persistTransform(selectedIdRef.current)
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        mesh.rotation.y -= rotationStep
        persistTransform(selectedIdRef.current)
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        mesh.rotation.y += rotationStep
        persistTransform(selectedIdRef.current)
      }
      if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault()
        removeObject(selectedIdRef.current)
        selectedIdRef.current = null
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [removeObject])

  // ── Touch support ────────────────────────────────────────────
  const touchModeRef = useRef('none') // 'drag' | 'pinch'
  const lastPinchRef = useRef(0)
  const lastTouchAngleRef = useRef(0)

  const handleTouchStart = useCallback((e) => {
    e.preventDefault()
    if (e.touches.length === 1) {
      const t = e.touches[0]
      const hit = getFurnitureAtClient(t.clientX, t.clientY)
      const activeId = hit?.userData.sceneObjId || selectedIdRef.current
      const activeMesh = activeId ? meshMapRef.current[activeId] : null
      const groundPt = raycastGroundAtClient(t.clientX, t.clientY)

      if (activeId && activeMesh && groundPt) {
        selectObject(activeId)
        selectedIdRef.current = activeId
        isDraggingRef.current = true
        canvasRef.current?.classList.add('dragging')
        dragOffsetRef.current.copy(activeMesh.position).sub(groundPt)
        dragOffsetRef.current.y = 0
      }
      touchModeRef.current = 'drag'
    } else if (e.touches.length === 2) {
      touchModeRef.current = 'pinch'
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      lastPinchRef.current = Math.hypot(dx, dy)
      lastTouchAngleRef.current = Math.atan2(dy, dx)
      handleMouseUp()
      isDraggingRef.current = false
      canvasRef.current?.classList.remove('dragging')
    }
  }, [getFurnitureAtClient, handleMouseUp, raycastGroundAtClient, selectObject])

  const handleTouchMove = useCallback((e) => {
    e.preventDefault()
    if (touchModeRef.current === 'drag' && e.touches.length === 1) {
      const t = e.touches[0]
      if (!isDraggingRef.current || !selectedIdRef.current) return
      const groundPt = raycastGroundAtClient(t.clientX, t.clientY)
      if (!groundPt) return
      const mesh = meshMapRef.current[selectedIdRef.current]
      if (!mesh) return
      const targetX = groundPt.x + dragOffsetRef.current.x
      const targetZ = groundPt.z + dragOffsetRef.current.z
      mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, targetX, 0.45)
      mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, targetZ, 0.45)
    } else if (touchModeRef.current === 'pinch' && e.touches.length === 2) {
      if (!selectedIdRef.current) return
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      const dist = Math.hypot(dx, dy)
      const scale = dist / lastPinchRef.current
      const angle = Math.atan2(dy, dx)
      const angleDelta = angle - lastTouchAngleRef.current
      lastPinchRef.current = dist
      lastTouchAngleRef.current = angle
      const mesh = meshMapRef.current[selectedIdRef.current]
      if (mesh) {
        const s = Math.max(0.1, Math.min(5, THREE.MathUtils.lerp(mesh.scale.x, mesh.scale.x * scale, 0.28)))
        mesh.scale.set(s, s, s)
        mesh.rotation.y += normalizeAngleDelta(angleDelta) * 0.65
        persistTransform(selectedIdRef.current)
      }
    }
  }, [persistTransform, raycastGroundAtClient])

  const handleTouchEnd = useCallback(() => {
    handleMouseUp()
    touchModeRef.current = 'none'
  }, [handleMouseUp])

  // ── Expose rotate / scale for panel controls ────────────────
  useEffect(() => {
    window.__arRotate = (deg) => {
      if (!selectedIdRef.current) return
      const mesh = meshMapRef.current[selectedIdRef.current]
      if (mesh) {
        mesh.rotation.y += (deg * Math.PI) / 180
        persistTransform(selectedIdRef.current)
      }
    }
    window.__arScale = (factor) => {
      if (!selectedIdRef.current) return
      const mesh = meshMapRef.current[selectedIdRef.current]
      if (mesh) {
        const s = Math.max(0.1, Math.min(5, mesh.scale.x * factor))
        mesh.scale.set(s, s, s)
        persistTransform(selectedIdRef.current)
      }
    }
    window.__saveLayoutPicture = async () => {
      const renderer = rendererRef.current
      const scene = sceneRef.current
      const camera = cameraRef.current
      const sourceCanvas = canvasRef.current

      if (!renderer || !scene || !camera || !sourceCanvas) {
        throw new Error('Viewer is not ready yet.')
      }

      renderer.render(scene, camera)

      const exportCanvas = document.createElement('canvas')
      exportCanvas.width = sourceCanvas.width
      exportCanvas.height = sourceCanvas.height
      const ctx = exportCanvas.getContext('2d')

      if (!ctx) {
        throw new Error('Could not prepare image export.')
      }

      if (roomImage) {
        const bg = await loadImage(roomImage)
        exportCanvas.width = bg.width
        exportCanvas.height = bg.height
        drawExactImage(ctx, bg, exportCanvas.width, exportCanvas.height)
      } else {
        const gradient = ctx.createLinearGradient(0, 0, 0, exportCanvas.height)
        gradient.addColorStop(0, '#1a1a28')
        gradient.addColorStop(0.6, '#22222e')
        gradient.addColorStop(1, '#2a2a3a')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height)
      }

      ctx.drawImage(sourceCanvas, 0, 0, exportCanvas.width, exportCanvas.height)

      const downloadUrl = exportCanvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = `ar-layout-${Date.now()}.png`
      link.click()
    }

    return () => {
      delete window.__arRotate
      delete window.__arScale
      delete window.__saveLayoutPicture
    }
  }, [persistTransform, roomImage])

  return (
    <div ref={viewportRef} className="relative w-full h-full overflow-hidden rounded-2xl bg-bg-secondary">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl"
          style={stageSize
            ? { width: `${stageSize.width}px`, height: `${stageSize.height}px` }
            : { width: '100%', height: '100%' }}
        >
          {/* Room photo background */}
          {roomImage ? (
            <img
              src={roomImage}
              alt="Room"
              className="absolute inset-0 w-full h-full object-contain"
              style={{ filter: 'brightness(0.92) saturate(0.96)' }}
            />
          ) : (
            /* Default floor pattern when no photo uploaded */
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, #1a1a28 0%, #22222e 60%, #2a2a3a 100%)',
                backgroundImage: `
                  linear-gradient(rgba(212,165,116,0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(212,165,116,0.04) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
              }}
            />
          )}

          {/* Three.js Canvas (transparent bg overlaid on photo) */}
          <canvas
            id="ar-canvas"
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'none' }}
          />
        </div>
      </div>

      {/* Instructions overlay */}
      {objects.length === 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="glass-card px-8 py-6 text-center max-w-sm">
            <div className="text-5xl mb-3 animate-float">🛋️</div>
            <p className="text-text-primary font-display text-lg mb-1">Your Room, Your Style</p>
            <p className="text-text-secondary text-sm">
              Select furniture from the sidebar, then click <span className="text-accent">"Add to Scene"</span>
            </p>
          </div>
        </div>
      )}

      {/* Controls hint */}
      {objects.length > 0 && !isCompactMobile && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="bg-black/70 backdrop-blur-sm text-text-secondary text-xs px-4 py-2 rounded-full flex gap-4">
            <span>🖱️ Drag to move</span>
            <span>🖱️ Scroll to scale</span>
            <span>⌨️ R / ← / → to rotate</span>
            <span>⌨️ Del to remove</span>
          </div>
        </div>
      )}
    </div>
  )
}
