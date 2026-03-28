/**
 * MobileARViewer.jsx
 * WebXR Immersive AR with hit-testing for mobile.
 * - Real-world surface detection via WebXR hit-test API
 * - Multi-object placement with tap
 * - Overlay UI for scale/rotate/delete controls
 * - Falls back to model-viewer if WebXR unavailable
 */
import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { useScene } from '../../contexts/SceneContext'
import { buildFurniture, applyColor, setHighlight } from '../../utils/furnitureBuilder'
import { FURNITURE_ITEMS } from '../../data/furnitureData'
import {
  RotateCcw, RotateCw, Plus, Minus, Trash2, X, Maximize
} from 'lucide-react'

// ── Reticle geometry (ring indicator on floor) ──────────────
function createReticle() {
  const ring = new THREE.RingGeometry(0.12, 0.15, 32)
  ring.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2))
  const mat  = new THREE.MeshBasicMaterial({ color: 0xD4A574, side: THREE.DoubleSide })
  const mesh = new THREE.Mesh(ring, mat)
  mesh.visible = false
  mesh.matrixAutoUpdate = false
  return mesh
}

export default function MobileARViewer() {
  const [arSupported, setArSupported] = useState(null) // null=checking, true/false
  const [arActive,    setArActive]    = useState(false)
  const [status,      setStatus]      = useState('idle') // idle | starting | active | error
  const [errorMsg,    setErrorMsg]    = useState('')

  const containerRef  = useRef(null)
  const canvasRef     = useRef(null)
  const sessionRef    = useRef(null)
  const rendererRef   = useRef(null)
  const sceneRef      = useRef(null)
  const cameraRef     = useRef(null)
  const reticleRef    = useRef(null)
  const hitSrcRef     = useRef(null)
  const meshMapRef    = useRef({})
  const selectedIdRef = useRef(null)
  const placingFurIdRef = useRef(null)
  const rafRef        = useRef(null)
  const overlayRef    = useRef(null)

  const { objects, selectedId, selectObject, removeObject, addObject } = useScene()

  // ── Check WebXR support ────────────────────────────────────
  useEffect(() => {
    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-ar')
        .then(supported => setArSupported(supported))
        .catch(() => setArSupported(false))
    } else {
      setArSupported(false)
    }
  }, [])

  // ── Keep meshMap in sync with scene objects ────────────────
  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    const meshMap = meshMapRef.current

    objects.forEach(obj => {
      if (!meshMap[obj.id]) {
        const group = buildFurniture(obj.furnitureId, obj.colorHex)
        group.userData.sceneObjId = obj.id
        group.userData.isFurniture = true
        group.visible = false // will become visible when placed
        scene.add(group)
        meshMap[obj.id] = group
      }
    })

    const currentIds = new Set(objects.map(o => o.id))
    Object.keys(meshMap).forEach(id => {
      if (!currentIds.has(id)) {
        scene.remove(meshMap[id])
        delete meshMap[id]
      }
    })
  }, [objects])

  // ── Color sync ──────────────────────────────────────────────
  useEffect(() => {
    objects.forEach(obj => {
      const mesh = meshMapRef.current[obj.id]
      if (mesh) applyColor(mesh, obj.colorHex)
    })
  }, [objects.map(o => `${o.id}:${o.colorHex}`).join(',')]) // eslint-disable-line

  // ── Start WebXR AR session ─────────────────────────────────
  const startAR = useCallback(async () => {
    setStatus('starting')
    setErrorMsg('')
    try {
      // Create renderer
      const canvas = canvasRef.current
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.xr.enabled = true
      renderer.shadowMap.enabled = true
      renderer.outputColorSpace = THREE.SRGBColorSpace
      rendererRef.current = renderer

      // Scene
      const scene = new THREE.Scene()
      const ambient = new THREE.AmbientLight(0xffffff, 0.8)
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
      dirLight.position.set(5, 10, 5)
      dirLight.castShadow = true
      scene.add(ambient, dirLight)
      sceneRef.current = scene

      // Camera (handled by XR)
      const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 200)
      cameraRef.current = camera

      // Reticle
      const reticle = createReticle()
      scene.add(reticle)
      reticleRef.current = reticle

      // Request XR session
      const session = await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay', 'light-estimation'],
        domOverlay: overlayRef.current ? { root: overlayRef.current } : undefined,
      })
      sessionRef.current = session
      renderer.xr.setReferenceSpaceType('local')
      await renderer.xr.setSession(session)

      // Reference spaces
      const refSpace    = await session.requestReferenceSpace('local')
      const viewerSpace = await session.requestReferenceSpace('viewer')
      const hitSource   = await session.requestHitTestSource({ space: viewerSpace })
      hitSrcRef.current = hitSource

      // Tap-to-place listener
      session.addEventListener('select', () => {
        if (reticle.visible && placingFurIdRef.current) {
          // Place the pending furniture at reticle
          const meshMap = meshMapRef.current
          // Find first invisible mesh of this furniture type to place
          const toPlace = objects.find(o =>
            o.furnitureId === placingFurIdRef.current &&
            meshMap[o.id] && !meshMap[o.id].visible
          )
          if (toPlace) {
            const mesh = meshMap[toPlace.id]
            mesh.visible = true
            mesh.position.setFromMatrixPosition(reticle.matrix)
            mesh.quaternion.setFromRotationMatrix(reticle.matrix)
            setHighlight(mesh, false)
          }
        }
      })

      // Session ended
      session.addEventListener('end', () => {
        setArActive(false)
        setStatus('idle')
        renderer.dispose()
        cancelAnimationFrame(rafRef.current)
      })

      // ── XR Render Loop ────────────────────────────────────
      renderer.setAnimationLoop((timestamp, frame) => {
        if (!frame) return
        const hitResults = frame.getHitTestResults(hitSource)
        if (hitResults.length > 0) {
          const pose = hitResults[0].getPose(refSpace)
          reticle.visible = true
          reticle.matrix.fromArray(pose.transform.matrix)
        } else {
          reticle.visible = false
        }
        renderer.render(scene, renderer.xr.getCamera(camera))
      })

      setArActive(true)
      setStatus('active')

    } catch (err) {
      console.error('AR Error:', err)
      setErrorMsg(err.message || 'Failed to start AR')
      setStatus('error')
    }
  }, [objects])

  const stopAR = useCallback(() => {
    sessionRef.current?.end()
    rendererRef.current?.dispose()
    setArActive(false)
    setStatus('idle')
  }, [])

  // ── Overlay controls ────────────────────────────────────────
  const rotateSelected = (deg) => {
    const mesh = meshMapRef.current[selectedIdRef.current]
    if (mesh) mesh.rotation.y += (deg * Math.PI) / 180
  }
  const scaleSelected = (factor) => {
    const mesh = meshMapRef.current[selectedIdRef.current]
    if (!mesh) return
    const s = Math.max(0.1, Math.min(5, mesh.scale.x * factor))
    mesh.scale.set(s, s, s)
  }
  const deleteSelected = () => {
    if (selectedIdRef.current) removeObject(selectedIdRef.current)
    selectedIdRef.current = null
  }

  // ── Model-Viewer fallback ───────────────────────────────────
  const renderModelViewerFallback = () => {
    const selected = objects[0]
    if (!selected) return null
    const furniture = FURNITURE_ITEMS.find(f => f.id === selected.furnitureId)
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-bg-primary rounded-2xl">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">{furniture?.emoji || '🛋️'}</div>
          <p className="text-text-primary font-display text-xl mb-2">
            Model Viewer Preview
          </p>
          <p className="text-text-secondary text-sm mb-4">
            WebXR AR is not supported on this device.<br />
            Using 3D preview mode instead.
          </p>
          <model-viewer
            src={`/models/${selected.furnitureId}.glb`}
            alt={furniture?.name}
            auto-rotate
            camera-controls
            ar
            ar-modes="webxr scene-viewer quick-look"
            style={{ width: '100%', height: '300px', background: 'transparent' }}
          />
        </div>
      </div>
    )
  }

  if (arSupported === null) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-text-secondary animate-pulse">Checking AR support…</div>
      </div>
    )
  }

  if (!arSupported) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
        <div className="text-5xl">📱</div>
        <h3 className="font-display text-xl text-text-primary text-center">
          WebXR Not Supported
        </h3>
        <p className="text-text-secondary text-sm text-center max-w-xs">
          Your device or browser does not support WebXR AR.
          Try Chrome on Android with ARCore, or Safari 16+ on iOS.
        </p>
        {objects.length > 0 && renderModelViewerFallback()}
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* XR Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: arActive ? 'block' : 'none' }}
      />

      {/* Idle State (before AR starts) */}
      {!arActive && (
        <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
          <div className="text-6xl animate-float">📷</div>
          <div className="text-center">
            <h3 className="font-display text-2xl text-text-primary mb-2">
              Live AR Mode
            </h3>
            <p className="text-text-secondary text-sm max-w-xs">
              Point your camera at a flat surface. Select furniture, then tap to place it in your room.
            </p>
          </div>

          {objects.length === 0 && (
            <div className="glass-card px-4 py-3 text-center">
              <p className="text-warning text-xs">
                ⚠️ Add furniture from the sidebar first
              </p>
            </div>
          )}

          <button
            onClick={startAR}
            disabled={status === 'starting'}
            className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
          >
            {status === 'starting' ? (
              <>
                <div className="w-5 h-5 border-2 border-bg-primary/50 border-t-bg-primary rounded-full animate-spin" />
                Starting AR…
              </>
            ) : (
              <>
                <Maximize size={20} />
                Launch AR Experience
              </>
            )}
          </button>

          {status === 'error' && (
            <p className="text-error text-sm text-center px-4">{errorMsg}</p>
          )}
        </div>
      )}

      {/* AR Active Overlay UI */}
      {arActive && (
        <div ref={overlayRef} className="ar-overlay">
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2">
              <span className="text-white text-sm">
                {objects.length} item{objects.length !== 1 ? 's' : ''} in scene
              </span>
            </div>
            <button
              onClick={stopAR}
              className="bg-black/60 backdrop-blur-sm text-white rounded-xl p-2 hover:bg-black/80"
            >
              <X size={20} />
            </button>
          </div>

          {/* Placement hint */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <p className="text-white/80 text-sm bg-black/40 rounded-full px-4 py-1">
              Tap on a surface to place furniture
            </p>
          </div>

          {/* Furniture selector (bottom) */}
          <div className="absolute bottom-24 left-4 right-4">
            <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-3">
              <p className="text-white/60 text-xs mb-2 px-1">Select & tap to place:</p>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {objects.map(obj => {
                  const f = FURNITURE_ITEMS.find(fi => fi.id === obj.furnitureId)
                  return (
                    <button
                      key={obj.id}
                      onClick={() => {
                        placingFurIdRef.current = obj.furnitureId
                        selectedIdRef.current = obj.id
                        selectObject(obj.id)
                      }}
                      className={`flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-xl border transition-all ${
                        selectedIdRef.current === obj.id
                          ? 'border-accent bg-accent/20 text-white'
                          : 'border-white/20 text-white/70'
                      }`}
                    >
                      <span className="text-xl">{f?.emoji}</span>
                      <span className="text-xs">{f?.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Controls (bottom) */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => rotateSelected(-45)}
                className="bg-black/70 text-white p-3 rounded-xl border border-white/20 hover:bg-black/90"
              >
                <RotateCcw size={18} />
              </button>
              <button
                onClick={() => scaleSelected(0.9)}
                className="bg-black/70 text-white p-3 rounded-xl border border-white/20 hover:bg-black/90"
              >
                <Minus size={18} />
              </button>
              <button
                onClick={() => scaleSelected(1.1)}
                className="bg-black/70 text-white p-3 rounded-xl border border-white/20 hover:bg-black/90"
              >
                <Plus size={18} />
              </button>
              <button
                onClick={() => rotateSelected(45)}
                className="bg-black/70 text-white p-3 rounded-xl border border-white/20 hover:bg-black/90"
              >
                <RotateCw size={18} />
              </button>
              <button
                onClick={deleteSelected}
                className="bg-error/20 text-error p-3 rounded-xl border border-error/30 hover:bg-error/30"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
