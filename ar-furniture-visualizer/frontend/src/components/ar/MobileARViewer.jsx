/**
 * MobileARViewer.jsx
 * Mobile-first camera experience with two modes:
 * - Live camera preview with touch placement
 * - WebXR surface AR when supported by the device/browser
 */
import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { useScene } from '../../contexts/SceneContext'
import { buildFurniture, applyColor, setHighlight } from '../../utils/furnitureBuilder'
import { FURNITURE_ITEMS } from '../../data/furnitureData'
import {
  RotateCcw, RotateCw, Plus, Minus, Trash2, X, Camera, Upload, ScanLine, ImagePlus,
} from 'lucide-react'

function createReticle() {
  const ring = new THREE.RingGeometry(0.12, 0.15, 32)
  ring.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2))
  const material = new THREE.MeshBasicMaterial({
    color: 0xD4A574,
    side: THREE.DoubleSide,
  })
  const mesh = new THREE.Mesh(ring, material)
  mesh.visible = false
  mesh.matrixAutoUpdate = false
  return mesh
}

export default function MobileARViewer() {
  const [arSupported, setArSupported] = useState(null)
  const [mode, setMode] = useState('idle') // idle | starting-live | live | starting-webxr | webxr | error
  const [errorMsg, setErrorMsg] = useState('')
  const [webxrFeatureLevel, setWebxrFeatureLevel] = useState('none') // none | hit-test | dom-overlay | anchors
  const [placementStatus, setPlacementStatus] = useState('Move your phone to find a flat surface.')

  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  const overlayRef = useRef(null)
  const uploadInputRef = useRef(null)
  const captureInputRef = useRef(null)

  const rendererRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const sessionRef = useRef(null)
  const hitSrcRef = useRef(null)
  const refSpaceRef = useRef(null)
  const latestHitResultRef = useRef(null)
  const reticleRef = useRef(null)
  const meshMapRef = useRef({})
  const anchorMapRef = useRef({})
  const mediaStreamRef = useRef(null)
  const rafRef = useRef(null)
  const resizeHandlerRef = useRef(null)
  const raycasterRef = useRef(new THREE.Raycaster())
  const pointerRef = useRef(new THREE.Vector2())
  const selectedIdRef = useRef(null)
  const knownObjectIdsRef = useRef(new Set())
  const dragStateRef = useRef({
    active: false,
    pointerId: null,
    objectId: null,
    offset: new THREE.Vector3(),
    mode: 'idle',
  })
  const liveInteractionRef = useRef({
    pinchInProgress: false,
  })
  const pinchStateRef = useRef({
    active: false,
    distance: 0,
    startScale: 1,
    lastCenter: null,
    lastAngle: 0,
    touches: new Map(),
    objectId: null,
  })
  const webxrPlacementRef = useRef({
    inProgress: false,
    ignoreSelectUntil: 0,
  })
  const placementStatusRef = useRef('Move your phone to find a flat surface.')
  const surfaceStateRef = useRef('searching')

  const {
    objects,
    selectedId,
    selectedObject,
    selectObject,
    removeObject,
    setRoomImage,
    setARMode,
    updateTransform,
  } = useScene()

  useEffect(() => {
    selectedIdRef.current = selectedId
  }, [selectedId])

  useEffect(() => {
    knownObjectIdsRef.current = new Set(objects.map((obj) => obj.id))
  }, [])

  useEffect(() => {
    if (!navigator.xr) {
      setArSupported(false)
      return
    }

    navigator.xr.isSessionSupported('immersive-ar')
      .then((supported) => setArSupported(supported))
      .catch(() => setArSupported(false))
  }, [])

  const updatePlacementStatus = useCallback((nextStatus) => {
    if (!nextStatus || placementStatusRef.current === nextStatus) return
    placementStatusRef.current = nextStatus
    setPlacementStatus(nextStatus)
  }, [])

  const resetInteractionState = useCallback(() => {
    dragStateRef.current = {
      active: false,
      pointerId: null,
      objectId: null,
      offset: new THREE.Vector3(),
      mode: 'idle',
    }

    pinchStateRef.current = {
      active: false,
      distance: 0,
      startScale: 1,
      lastCenter: null,
      lastAngle: 0,
      touches: new Map(),
      objectId: null,
    }

    liveInteractionRef.current.pinchInProgress = false
    webxrPlacementRef.current.inProgress = false
    webxrPlacementRef.current.ignoreSelectUntil = 0
    surfaceStateRef.current = 'searching'
  }, [])

  const getSceneObjectById = useCallback((id) => {
    if (!id) return null
    return objects.find((obj) => obj.id === id) || null
  }, [objects])

  const getFurnitureRoot = useCallback((object) => {
    let target = object
    while (target?.parent && !target.userData?.isFurniture) {
      target = target.parent
    }
    return target?.userData?.isFurniture ? target : null
  }, [])

  const protectOverlayInteraction = useCallback((event) => {
    if (mode !== 'webxr') return
    event.preventDefault()
    event.stopPropagation()
    webxrPlacementRef.current.ignoreSelectUntil = performance.now() + 400
  }, [mode])

  const persistMeshTransform = useCallback((id, mesh) => {
    if (!id || !mesh) return

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

  const refreshObjectAnchor = useCallback(async (objectId) => {
    const hitResult = latestHitResultRef.current
    if (webxrFeatureLevel !== 'anchors' || !hitResult?.createAnchor || !objectId) return

    try {
      anchorMapRef.current[objectId]?.delete?.()
      anchorMapRef.current[objectId] = await hitResult.createAnchor()
    } catch {
      // Keep local-space placement when anchors cannot be refreshed.
    }
  }, [webxrFeatureLevel])

  const applyComfortableSurfaceScale = useCallback((sceneObjId, mesh) => {
    if (!sceneObjId || !mesh) return

    const sceneObj = getSceneObjectById(sceneObjId)
    if (!sceneObj) return

    const existingScale = sceneObj.scale ?? 1
    if (Math.abs(existingScale - 1) > 0.001) {
      mesh.scale.setScalar(existingScale)
      return
    }

    const furniture = FURNITURE_ITEMS.find((item) => item.id === sceneObj.furnitureId)
    const dims = furniture?.dimensions
    if (!dims) {
      mesh.scale.setScalar(0.7)
      return
    }

    const largestDimension = Math.max(dims.w || 0, dims.h || 0, dims.d || 0)
    let targetLargestDimension = 0.9
    if (largestDimension >= 1.8) {
      targetLargestDimension = 1.15
    } else if (largestDimension >= 1.2) {
      targetLargestDimension = 1.0
    }

    const scaleFactor = Math.max(
      0.45,
      Math.min(0.85, targetLargestDimension / Math.max(largestDimension, 0.001))
    )
    mesh.scale.setScalar(scaleFactor)
  }, [getSceneObjectById])

  const cleanupRenderer = useCallback(() => {
    if (rendererRef.current) {
      rendererRef.current.setAnimationLoop(null)
      rendererRef.current.dispose()
      rendererRef.current = null
    }

    if (resizeHandlerRef.current) {
      window.removeEventListener('resize', resizeHandlerRef.current)
      resizeHandlerRef.current = null
    }

    cancelAnimationFrame(rafRef.current)
    rafRef.current = null
    sceneRef.current = null
    cameraRef.current = null
    reticleRef.current = null
    hitSrcRef.current?.cancel?.()
    hitSrcRef.current = null
    refSpaceRef.current = null
    latestHitResultRef.current = null
    Object.values(anchorMapRef.current).forEach((anchor) => {
      anchor?.delete?.()
    })
    anchorMapRef.current = {}
    meshMapRef.current = {}
    resetInteractionState()
  }, [resetInteractionState])

  const stopLiveStream = useCallback(() => {
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop())
    mediaStreamRef.current = null

    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.srcObject = null
    }
  }, [])

  const stopAllModes = useCallback(async () => {
    const session = sessionRef.current
    sessionRef.current = null

    if (session) {
      try {
        await session.end()
      } catch {
        // Ignore end race conditions during cleanup.
      }
    }

    stopLiveStream()
    cleanupRenderer()
    updatePlacementStatus('Move your phone to find a flat surface.')
    setMode('idle')
  }, [cleanupRenderer, stopLiveStream, updatePlacementStatus])

  useEffect(() => {
    return () => {
      stopAllModes()
    }
  }, [stopAllModes])

  const setupRendererScene = useCallback(({ enableXR = false } = {}) => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) {
      throw new Error('Camera surface is not ready yet.')
    }

    cleanupRenderer()

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.shadowMap.enabled = true
    renderer.xr.enabled = enableXR

    const scene = new THREE.Scene()
    scene.add(new THREE.AmbientLight(0xffffff, 1.2))

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2)
    keyLight.position.set(1.5, 3, 2)
    keyLight.castShadow = true
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0xd5e4ff, 0.4)
    fillLight.position.set(-2, 1, 0.5)
    scene.add(fillLight)

    const camera = new THREE.PerspectiveCamera(60, 1, 0.01, 30)
    camera.position.set(0, 0, 0)
    camera.lookAt(0, 0, -1)

    const resize = () => {
      const width = container.clientWidth || window.innerWidth
      const height = container.clientHeight || window.innerHeight
      if (!width || !height) return

      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    resize()
    window.addEventListener('resize', resize)
    resizeHandlerRef.current = resize

    sceneRef.current = scene
    cameraRef.current = camera
    rendererRef.current = renderer

    return { renderer, scene, camera }
  }, [cleanupRenderer])

  const syncSceneMeshes = useCallback((scene) => {
    const meshMap = meshMapRef.current
    objects.forEach((obj) => {
      if (!meshMap[obj.id]) {
        const group = buildFurniture(obj.furnitureId, obj.colorHex)
        group.userData.sceneObjId = obj.id
        group.userData.isFurniture = true
        group.rotation.y = obj.rotationY || 0
        if (obj.scale) {
          group.scale.setScalar(obj.scale)
        }
        if (obj.position) {
          group.position.set(obj.position.x || 0, obj.position.y || 0, obj.position.z || 0)
        }
        group.visible = false
        scene.add(group)
        meshMap[obj.id] = group
      }
    })

    const currentIds = new Set(objects.map((obj) => obj.id))
    Object.keys(meshMap).forEach((id) => {
      if (!currentIds.has(id)) {
        anchorMapRef.current[id]?.delete?.()
        delete anchorMapRef.current[id]
        scene?.remove(meshMap[id])
        delete meshMap[id]
      }
    })
  }, [objects])

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    syncSceneMeshes(scene)
  }, [syncSceneMeshes])

  useEffect(() => {
    objects.forEach((obj) => {
      const mesh = meshMapRef.current[obj.id]
      if (!mesh) return
      applyColor(mesh, obj.colorHex)
      setHighlight(mesh, obj.id === selectedId)
    })
  }, [objects, selectedId])

  const getSelectedMesh = useCallback(() => {
    const activeId = selectedIdRef.current || objects[0]?.id || null
    if (!activeId) return null
    return {
      id: activeId,
      mesh: meshMapRef.current[activeId] || null,
    }
  }, [objects])

  const getSurfaceStatusMessage = useCallback((surfaceState = surfaceStateRef.current) => {
    const selected = getSelectedMesh()
    if (surfaceState === 'ready') {
      return selected?.id
        ? `Surface ready. Tap to place or move ${selected.name || 'selected item'}.`
        : 'Surface ready. Add or select a furniture item to place it.'
    }

    return selected?.id
      ? `Scanning for a flat surface for ${selected.name || 'selected item'}…`
      : 'Scanning for a flat surface…'
  }, [getSelectedMesh])

  const setCanvasPointer = useCallback((clientX, clientY) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return false

    pointerRef.current.x = ((clientX - rect.left) / rect.width) * 2 - 1
    pointerRef.current.y = -((clientY - rect.top) / rect.height) * 2 + 1
    return true
  }, [])

  const getMeshAtPoint = useCallback((clientX, clientY) => {
    if (!setCanvasPointer(clientX, clientY) || !cameraRef.current) return null

    raycasterRef.current.setFromCamera(pointerRef.current, cameraRef.current)
    const meshes = Object.values(meshMapRef.current).filter((mesh) => mesh.visible)
    const hits = raycasterRef.current.intersectObjects(meshes, true)

    if (!hits.length) return null

    return getFurnitureRoot(hits[0].object)
  }, [getFurnitureRoot, setCanvasPointer])

  const projectToPlacementPlane = useCallback((clientX, clientY, depth = 2.4) => {
    if (!setCanvasPointer(clientX, clientY) || !cameraRef.current) return null

    const camera = cameraRef.current
    const worldPoint = new THREE.Vector3(pointerRef.current.x, pointerRef.current.y, 0.5)
      .unproject(camera)
    const direction = worldPoint.sub(camera.position).normalize()

    if (Math.abs(direction.z) < 0.0001) return null

    const targetZ = -depth
    const distance = (targetZ - camera.position.z) / direction.z
    return camera.position.clone().add(direction.multiplyScalar(distance))
  }, [setCanvasPointer])

  const placeSelectedAt = useCallback((clientX, clientY) => {
    const selected = getSelectedMesh()
    if (!selected?.mesh) return

    const mesh = selected.mesh
    const point = projectToPlacementPlane(clientX, clientY)
    if (!point) return

    const box = new THREE.Box3().setFromObject(mesh)
    const bottomOffset = Number.isFinite(box.min.y) ? -box.min.y : 0

    mesh.visible = true
    mesh.position.set(point.x, point.y + bottomOffset, point.z)
    mesh.rotation.x = 0
    mesh.rotation.z = 0
    selectObject(selected.id)
    setHighlight(mesh, true)
  }, [getSelectedMesh, projectToPlacementPlane, selectObject])

  const moveSelectedToPoint = useCallback((objectId, clientX, clientY, offset = new THREE.Vector3()) => {
    const mesh = meshMapRef.current[objectId]
    if (!mesh) return

    const point = projectToPlacementPlane(clientX, clientY, Math.abs(mesh.position.z) || 2.4)
    if (!point) return

    mesh.position.set(
      point.x + offset.x,
      point.y + offset.y,
      point.z + offset.z
    )
  }, [projectToPlacementPlane])

  const placeMeshInFrontOfCamera = useCallback((mesh, slotIndex = 0) => {
    if (!mesh) return

    const offsets = [-0.6, 0, 0.6, -1.1, 1.1]
    const box = new THREE.Box3().setFromObject(mesh)
    const bottomOffset = Number.isFinite(box.min.y) ? -box.min.y : 0

    mesh.visible = true
    mesh.position.set(offsets[slotIndex] ?? 0, -0.45 + bottomOffset, -2.2)
    if (mesh.scale.x === 1 && mesh.scale.y === 1 && mesh.scale.z === 1) {
      mesh.scale.setScalar(0.9)
    }
  }, [])

  const placeMeshOnReticle = useCallback((mesh, reticleMatrix) => {
    if (!mesh || !reticleMatrix) return false

    applyComfortableSurfaceScale(mesh.userData.sceneObjId, mesh)

    const position = new THREE.Vector3()
    const rotation = new THREE.Quaternion()
    const scale = new THREE.Vector3()
    const euler = new THREE.Euler(0, 0, 0, 'YXZ')
    const box = new THREE.Box3().setFromObject(mesh)
    const bottomOffset = Number.isFinite(box.min.y) ? -box.min.y : 0

    reticleMatrix.decompose(position, rotation, scale)
    euler.setFromQuaternion(rotation)

    mesh.visible = true
    mesh.position.set(position.x, position.y + bottomOffset, position.z)
    mesh.rotation.set(0, euler.y, 0)
    return true
  }, [applyComfortableSurfaceScale])

  const releaseWebXRInteractionLock = useCallback((delay = 320) => {
    window.setTimeout(() => {
      webxrPlacementRef.current.inProgress = false
    }, delay)
  }, [])

  useEffect(() => {
    if (mode !== 'live') return

    const knownIds = knownObjectIdsRef.current
    const newObjects = objects.filter((obj) => !knownIds.has(obj.id))

    newObjects.forEach((obj, index) => {
      const mesh = meshMapRef.current[obj.id]
      if (!mesh) return
      placeMeshInFrontOfCamera(mesh, index)
      selectObject(obj.id)
    })

    knownObjectIdsRef.current = new Set(objects.map((obj) => obj.id))
  }, [mode, objects, placeMeshInFrontOfCamera, selectObject])

  useEffect(() => {
    if (mode !== 'webxr') return

    const knownIds = knownObjectIdsRef.current
    const newObjects = objects.filter((obj) => !knownIds.has(obj.id))
    const hasNewObjects = newObjects.length > 0

    if (hasNewObjects) {
      selectObject(newObjects[newObjects.length - 1].id)
    }

    updatePlacementStatus(
      hasNewObjects
        ? getSurfaceStatusMessage(surfaceStateRef.current)
        : getSurfaceStatusMessage(surfaceStateRef.current)
    )
    knownObjectIdsRef.current = new Set(objects.map((obj) => obj.id))
  }, [getSurfaceStatusMessage, mode, objects, selectObject, updatePlacementStatus])

  const handlePointerDown = useCallback((event) => {
    if (mode !== 'live') return
    if (event.pointerType === 'touch' && liveInteractionRef.current.pinchInProgress) return
    if (event.isPrimary === false) return

    const clientX = event.clientX
    const clientY = event.clientY
    const hit = getMeshAtPoint(clientX, clientY)

    if (hit) {
      const id = hit.userData.sceneObjId
      const mesh = meshMapRef.current[id]
      const point = projectToPlacementPlane(clientX, clientY, Math.abs(mesh?.position.z) || 2.4)

      selectObject(id)

      if (mesh && point) {
        dragStateRef.current = {
          active: true,
          pointerId: event.pointerId,
          objectId: id,
          offset: mesh.position.clone().sub(point),
          mode: 'drag',
        }
        canvasRef.current?.setPointerCapture?.(event.pointerId)
      }
      return
    }

    dragStateRef.current = {
      active: false,
      pointerId: null,
      objectId: null,
      offset: new THREE.Vector3(),
      mode: 'place',
    }
    placeSelectedAt(clientX, clientY)
  }, [getMeshAtPoint, mode, placeSelectedAt, projectToPlacementPlane, selectObject])

  const handlePointerMove = useCallback((event) => {
    if (mode !== 'live') return
    if (event.pointerType === 'touch' && liveInteractionRef.current.pinchInProgress) return
    const dragState = dragStateRef.current

    if (!dragState.active || dragState.pointerId !== event.pointerId || !dragState.objectId) {
      return
    }

    moveSelectedToPoint(
      dragState.objectId,
      event.clientX,
      event.clientY,
      dragState.offset
    )
  }, [mode, moveSelectedToPoint])

  const handlePointerEnd = useCallback((event) => {
    const dragState = dragStateRef.current
    if (dragState.pointerId === event.pointerId) {
      dragStateRef.current = {
        active: false,
        pointerId: null,
        objectId: null,
        offset: new THREE.Vector3(),
        mode: 'idle',
      }
      if (canvasRef.current?.hasPointerCapture?.(event.pointerId)) {
        canvasRef.current.releasePointerCapture(event.pointerId)
      }
    }
  }, [])

  const handleTouchStart = useCallback((event) => {
    if (mode !== 'live') return

    const pinchState = pinchStateRef.current
    Array.from(event.changedTouches).forEach((touch) => {
      pinchState.touches.set(touch.identifier, {
        x: touch.clientX,
        y: touch.clientY,
      })
    })

    if (event.touches.length === 2 && selectedIdRef.current) {
      const [a, b] = Array.from(event.touches)
      const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY)
      const center = {
        x: (a.clientX + b.clientX) / 2,
        y: (a.clientY + b.clientY) / 2,
      }
      const angle = Math.atan2(b.clientY - a.clientY, b.clientX - a.clientX)
      const mesh = meshMapRef.current[selectedIdRef.current]
      if (!mesh) return

      pinchState.active = true
      pinchState.distance = distance
      pinchState.startScale = mesh.scale.x
      pinchState.lastCenter = center
      pinchState.lastAngle = angle
      pinchState.objectId = selectedIdRef.current
      liveInteractionRef.current.pinchInProgress = true

      const activePointerId = dragStateRef.current.pointerId
      if (dragStateRef.current.active && activePointerId !== null) {
        if (canvasRef.current?.hasPointerCapture?.(activePointerId)) {
          canvasRef.current.releasePointerCapture(activePointerId)
        }
      }

      dragStateRef.current = {
        active: false,
        pointerId: null,
        objectId: null,
        offset: new THREE.Vector3(),
        mode: 'idle',
      }
    }
  }, [mode])

  const handleTouchMove = useCallback((event) => {
    if (mode !== 'live') return

    const pinchState = pinchStateRef.current
    Array.from(event.changedTouches).forEach((touch) => {
      if (pinchState.touches.has(touch.identifier)) {
        pinchState.touches.set(touch.identifier, {
          x: touch.clientX,
          y: touch.clientY,
        })
      }
    })

    if (event.touches.length === 2 && pinchState.active && pinchState.objectId) {
      event.preventDefault()
      const [a, b] = Array.from(event.touches)
      const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY)
      const center = {
        x: (a.clientX + b.clientX) / 2,
        y: (a.clientY + b.clientY) / 2,
      }
      const angle = Math.atan2(b.clientY - a.clientY, b.clientX - a.clientX)
      const mesh = meshMapRef.current[pinchState.objectId]
      if (!mesh || !pinchState.distance) return

      const nextScale = Math.max(
        0.15,
        Math.min(4, pinchState.startScale * (distance / pinchState.distance))
      )
      mesh.scale.setScalar(nextScale)

      if (pinchState.lastCenter) {
        const deltaX = center.x - pinchState.lastCenter.x
        const deltaY = center.y - pinchState.lastCenter.y

        mesh.rotation.y += deltaX * 0.01
        mesh.rotation.x = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 2, mesh.rotation.x + deltaY * 0.01)
        )
      }

      const angleDelta = angle - pinchState.lastAngle
      mesh.rotation.z += angleDelta

      pinchState.lastCenter = center
      pinchState.lastAngle = angle
    }
  }, [mode])

  const handleTouchEnd = useCallback((event) => {
    const pinchState = pinchStateRef.current
    Array.from(event.changedTouches).forEach((touch) => {
      pinchState.touches.delete(touch.identifier)
    })

    if (event.touches.length < 2) {
      pinchState.active = false
      pinchState.distance = 0
      pinchState.lastCenter = null
      pinchState.lastAngle = 0
      pinchState.objectId = null
      liveInteractionRef.current.pinchInProgress = false
    }
  }, [])

  const startLiveCamera = useCallback(async () => {
    setErrorMsg('')
    setMode('starting-live')

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
      })

      mediaStreamRef.current = stream

      if (!videoRef.current) {
        throw new Error('Video preview is not ready yet.')
      }

      videoRef.current.srcObject = stream
      await videoRef.current.play()

      const { renderer, scene, camera } = setupRendererScene()
      syncSceneMeshes(scene)

      const initialSelected = getSelectedMesh()
      if (initialSelected?.mesh) {
        placeMeshInFrontOfCamera(initialSelected.mesh, 1)
      }

      const animate = () => {
        rafRef.current = requestAnimationFrame(animate)
        renderer.render(scene, camera)
      }
      animate()

      setMode('live')
    } catch (error) {
      stopLiveStream()
      cleanupRenderer()
      setMode('error')
      setErrorMsg(error?.message || 'Could not start the live camera.')
    }
  }, [cleanupRenderer, getSelectedMesh, placeMeshInFrontOfCamera, setupRendererScene, stopLiveStream, syncSceneMeshes])

  const startWebXR = useCallback(async () => {
    if (!arSupported) {
      setMode('error')
      setErrorMsg('Surface AR is not supported on this phone/browser.')
      return
    }

    setErrorMsg('')
    updatePlacementStatus('Move your phone to find a flat surface.')
    setMode('starting-webxr')

    try {
      const { renderer, scene, camera } = setupRendererScene({ enableXR: true })
      syncSceneMeshes(scene)

      const reticle = createReticle()
      scene.add(reticle)
      reticleRef.current = reticle

      const sessionConfigs = [
        {
          label: 'anchors',
          options: {
            requiredFeatures: ['hit-test'],
            optionalFeatures: ['light-estimation', 'anchors', 'dom-overlay'],
            domOverlay: overlayRef.current ? { root: overlayRef.current } : undefined,
          },
        },
        {
          label: 'dom-overlay',
          options: {
            requiredFeatures: ['hit-test'],
            optionalFeatures: ['light-estimation', 'dom-overlay'],
            domOverlay: overlayRef.current ? { root: overlayRef.current } : undefined,
          },
        },
        {
          label: 'hit-test',
          options: {
            requiredFeatures: ['hit-test'],
            optionalFeatures: ['light-estimation'],
          },
        },
      ]

      let session = null
      let activeFeatureLevel = 'none'
      let lastError = null

      for (const config of sessionConfigs) {
        try {
          session = await navigator.xr.requestSession('immersive-ar', config.options)
          activeFeatureLevel = config.label
          break
        } catch (error) {
          lastError = error
        }
      }

      if (!session) {
        throw lastError || new Error('This phone/browser could not start a supported AR session.')
      }

      sessionRef.current = session
      setWebxrFeatureLevel(activeFeatureLevel)
      renderer.xr.setReferenceSpaceType('local-floor')
      await renderer.xr.setSession(session)

      let refSpace
      try {
        refSpace = await session.requestReferenceSpace('local-floor')
      } catch {
        refSpace = await session.requestReferenceSpace('local')
      }
      refSpaceRef.current = refSpace
      const viewerSpace = await session.requestReferenceSpace('viewer')
      const hitSource = await session.requestHitTestSource({ space: viewerSpace })
      hitSrcRef.current = hitSource

      session.addEventListener('select', async () => {
        if (performance.now() < webxrPlacementRef.current.ignoreSelectUntil) return

        const selected = getSelectedMesh()
        const mesh = selected?.mesh
        const reticleMesh = reticleRef.current

        if (!mesh || !reticleMesh?.visible || webxrPlacementRef.current.inProgress) return

        webxrPlacementRef.current.inProgress = true
        webxrPlacementRef.current.ignoreSelectUntil = performance.now() + 450
        updatePlacementStatus(`Placing ${selected.name || 'selected item'}…`)

        try {
          const placed = placeMeshOnReticle(mesh, reticleMesh.matrix)
          if (!placed) return

          selectObject(selected.id)
          setHighlight(mesh, true)
          persistMeshTransform(selected.id, mesh)
          await refreshObjectAnchor(selected.id)
          updatePlacementStatus(`Placed ${selected.name || 'item'}. Tap the surface again to move it.`)
        } finally {
          releaseWebXRInteractionLock()
        }
      })

      session.addEventListener('end', () => {
        sessionRef.current = null
        cleanupRenderer()
        setWebxrFeatureLevel('none')
        updatePlacementStatus('Move your phone to find a flat surface.')
        setMode('idle')
      })

      renderer.setAnimationLoop((_, frame) => {
        if (!frame) return

        const results = frame.getHitTestResults(hitSource)
        if (results.length > 0) {
          latestHitResultRef.current = results[0]
          const pose = results[0].getPose(refSpace)
          if (pose && reticleRef.current) {
            reticleRef.current.visible = true
            reticleRef.current.matrix.fromArray(pose.transform.matrix)
            if (surfaceStateRef.current !== 'ready') {
              surfaceStateRef.current = 'ready'
              updatePlacementStatus(getSurfaceStatusMessage('ready'))
            }
          }
        } else if (reticleRef.current) {
          latestHitResultRef.current = null
          reticleRef.current.visible = false
          if (surfaceStateRef.current !== 'searching') {
            surfaceStateRef.current = 'searching'
            updatePlacementStatus(getSurfaceStatusMessage('searching'))
          }
        }

        if (activeFeatureLevel === 'anchors') {
          Object.entries(anchorMapRef.current).forEach(([id, anchor]) => {
            const mesh = meshMapRef.current[id]
            if (!mesh || !anchor) return

            const anchorPose = frame.getPose(anchor.anchorSpace, refSpace)
            if (!anchorPose) return

            mesh.visible = true
            mesh.position.set(
              anchorPose.transform.position.x,
              anchorPose.transform.position.y,
              anchorPose.transform.position.z
            )
          })
        }

        renderer.render(scene, renderer.xr.getCamera(camera))
      })

      setMode('webxr')
    } catch (error) {
      cleanupRenderer()
      setWebxrFeatureLevel('none')
      setMode('error')
      setErrorMsg(error?.message || 'Could not start surface AR.')
      updatePlacementStatus('Move your phone to find a flat surface.')
    }
  }, [arSupported, cleanupRenderer, getSelectedMesh, getSurfaceStatusMessage, persistMeshTransform, placeMeshOnReticle, refreshObjectAnchor, releaseWebXRInteractionLock, selectObject, setupRendererScene, syncSceneMeshes, updatePlacementStatus])

  const rotateSelected = useCallback((deg) => {
    const selected = getSelectedMesh()
    if (!selected?.mesh) return
    selected.mesh.rotation.y += (deg * Math.PI) / 180
    selectObject(selected.id)
    persistMeshTransform(selected.id, selected.mesh)
  }, [getSelectedMesh, persistMeshTransform, selectObject])

  const scaleSelected = useCallback((factor) => {
    const selected = getSelectedMesh()
    if (!selected?.mesh) return

    webxrPlacementRef.current.inProgress = true
    webxrPlacementRef.current.ignoreSelectUntil = performance.now() + 400
    const nextScale = Math.max(0.15, Math.min(4, selected.mesh.scale.x * factor))
    selected.mesh.scale.setScalar(nextScale)
    selectObject(selected.id)
    persistMeshTransform(selected.id, selected.mesh)
    releaseWebXRInteractionLock(220)
  }, [getSelectedMesh, persistMeshTransform, releaseWebXRInteractionLock, selectObject])

  const deleteSelected = useCallback(() => {
    const id = selectedIdRef.current
    if (!id) return
    webxrPlacementRef.current.inProgress = true
    webxrPlacementRef.current.ignoreSelectUntil = performance.now() + 400
    removeObject(id)
    selectObject(null)
    releaseWebXRInteractionLock(220)
  }, [releaseWebXRInteractionLock, removeObject, selectObject])

  const handlePhotoFile = useCallback((file) => {
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      setRoomImage(event.target?.result || null)
      setARMode(false)
    }
    reader.readAsDataURL(file)
  }, [setARMode, setRoomImage])

  useEffect(() => {
    window.__arRotate = (deg) => {
      rotateSelected(deg)
    }
    window.__arScale = (factor) => {
      scaleSelected(factor)
    }

    return () => {
      delete window.__arRotate
      delete window.__arScale
    }
  }, [rotateSelected, scaleSelected])

  const isCameraMode = mode === 'live' || mode === 'webxr'
  const selectedFurniture = selectedObject
    ? (FURNITURE_ITEMS.find((item) => item.id === selectedObject.furnitureId) || selectedObject)
    : null

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden bg-bg-primary">
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover ${mode === 'live' ? 'block' : 'hidden'}`}
        autoPlay
        muted
        playsInline
      />

      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full ${isCameraMode ? 'block' : 'hidden'}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{ touchAction: 'none' }}
      />

      <input
        ref={uploadInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => handlePhotoFile(event.target.files?.[0])}
      />
      <input
        ref={captureInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(event) => handlePhotoFile(event.target.files?.[0])}
      />

      {!isCameraMode && (
        <div className="absolute inset-0 overflow-y-auto custom-scroll">
          <div className="flex min-h-full flex-col items-center justify-center gap-5 px-4 py-6 text-center sm:px-8">
            <div className="text-5xl animate-float">📱</div>

            <div className="max-w-sm space-y-2">
              <h3 className="font-display text-2xl text-text-primary">Mobile AR Tools</h3>
              <p className="text-sm text-text-secondary">
                Use live camera mode for quick placement, or launch surface AR on supported phones for
                real-world hit testing.
              </p>
            </div>

            <div className="grid w-full max-w-sm gap-3">
              <button
                onClick={startLiveCamera}
                disabled={mode === 'starting-live'}
                className="btn-primary flex items-center justify-center gap-2 px-5 py-4 text-base"
              >
                <Camera size={18} />
                {mode === 'starting-live' ? 'Starting Live Camera…' : 'Start Live Camera'}
              </button>

              <button
                onClick={startWebXR}
                disabled={!arSupported || mode === 'starting-webxr'}
                className="btn-secondary flex items-center justify-center gap-2 px-5 py-4 text-base disabled:opacity-50"
              >
                <ScanLine size={18} />
                {mode === 'starting-webxr'
                  ? 'Starting Surface AR…'
                  : arSupported
                    ? 'Launch Surface AR'
                    : 'Surface AR Not Supported'}
              </button>
            </div>

            <div className="grid w-full max-w-sm grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                onClick={() => captureInputRef.current?.click()}
                className="btn-secondary flex items-center justify-center gap-2 px-4 py-3 text-sm"
              >
                <ImagePlus size={16} />
                Take Room Photo
              </button>
              <button
                onClick={() => uploadInputRef.current?.click()}
                className="btn-secondary flex items-center justify-center gap-2 px-4 py-3 text-sm"
              >
                <Upload size={16} />
                Upload From Device
              </button>
            </div>

            <div className="glass-card w-full max-w-sm px-4 py-3 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">How to use</p>
              <p className="mt-2 text-sm text-text-secondary">
                1. Add furniture from the catalog below.
              </p>
              <p className="text-sm text-text-secondary">
                2. Select an item, then start live camera or surface AR.
              </p>
              <p className="text-sm text-text-secondary">
                3. Tap on the screen to place or reposition the selected item.
              </p>
            </div>

            {mode === 'error' && (
              <p className="max-w-sm text-sm text-error">{errorMsg}</p>
            )}
          </div>
        </div>
      )}

      <div
        ref={overlayRef}
        className={`ar-overlay ${isCameraMode ? '' : 'hidden'}`}
      >
        <div className="absolute left-0 right-0 top-0 flex items-start justify-end gap-3 p-3 sm:p-4">
          <button
            onClick={stopAllModes}
            onPointerDown={protectOverlayInteraction}
            onTouchStart={protectOverlayInteraction}
            className="rounded-2xl bg-black/65 p-3 text-white backdrop-blur-sm hover:bg-black/80"
          >
            <X size={18} />
          </button>
        </div>

        {objects.length > 0 && mode === 'webxr' && (
          <div className="absolute bottom-24 left-3 right-3 space-y-3 sm:left-4 sm:right-4">
            <div className="rounded-2xl bg-black/70 p-3 backdrop-blur-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Surface AR
                  </p>
                  <p className="mt-1 text-sm text-white/90">{placementStatus}</p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/70">
                  {webxrFeatureLevel === 'anchors'
                      ? 'Anchors'
                      : webxrFeatureLevel === 'dom-overlay'
                      ? 'Overlay'
                      : 'Hit Test'}
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-black/70 p-3 backdrop-blur-sm">
              <p className="mb-2 px-1 text-xs text-white/60">Selected furniture</p>
              <div className="flex gap-2 overflow-x-auto pb-1 custom-scroll">
                {objects.map((obj) => {
                  const furniture = FURNITURE_ITEMS.find((item) => item.id === obj.furnitureId)
                  const isSelected = selectedId === obj.id

                  return (
                    <button
                      key={obj.id}
                      onClick={() => selectObject(obj.id)}
                      onPointerDown={protectOverlayInteraction}
                      onTouchStart={protectOverlayInteraction}
                      className={`flex min-w-[92px] flex-shrink-0 flex-col items-center gap-1 rounded-xl border px-3 py-2 transition-all ${
                        isSelected
                          ? 'border-accent bg-accent/25 text-white'
                          : 'border-white/20 text-white/70'
                      }`}
                    >
                      <span className="text-xl">{furniture?.emoji || obj.emoji}</span>
                      <span className="text-xs">{furniture?.name || obj.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {mode === 'webxr' && selectedFurniture && false && (
          <div className="absolute left-3 right-3 top-16 sm:left-4 sm:right-4 sm:top-20">
            <div className="mx-auto max-w-sm rounded-2xl bg-black/60 px-4 py-3 text-center backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Active Item
              </p>
              <p className="mt-1 text-sm text-white">
                {selectedFurniture.emoji || '🛋️'} {selectedFurniture.name || 'Selected furniture'}
              </p>
              <p className="mt-1 text-xs text-white/65">
                Move the phone until the reticle appears, then tap the surface to place or reposition it.
              </p>
            </div>
          </div>
        )}

        {selectedId && (
          <div className="absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4">
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => rotateSelected(-45)}
                onPointerDown={protectOverlayInteraction}
                onTouchStart={protectOverlayInteraction}
                className="rounded-xl border border-white/20 bg-black/70 p-3 text-white hover:bg-black/90"
              >
                <RotateCcw size={18} />
              </button>
              <button
                onClick={() => scaleSelected(0.9)}
                onPointerDown={protectOverlayInteraction}
                onTouchStart={protectOverlayInteraction}
                className="rounded-xl border border-white/20 bg-black/70 p-3 text-white hover:bg-black/90"
              >
                <Minus size={18} />
              </button>
              <button
                onClick={() => scaleSelected(1.1)}
                onPointerDown={protectOverlayInteraction}
                onTouchStart={protectOverlayInteraction}
                className="rounded-xl border border-white/20 bg-black/70 p-3 text-white hover:bg-black/90"
              >
                <Plus size={18} />
              </button>
              <button
                onClick={() => rotateSelected(45)}
                onPointerDown={protectOverlayInteraction}
                onTouchStart={protectOverlayInteraction}
                className="rounded-xl border border-white/20 bg-black/70 p-3 text-white hover:bg-black/90"
              >
                <RotateCw size={18} />
              </button>
              <button
                onClick={deleteSelected}
                onPointerDown={protectOverlayInteraction}
                onTouchStart={protectOverlayInteraction}
                className="rounded-xl border border-error/30 bg-error/20 p-3 text-error hover:bg-error/30"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
