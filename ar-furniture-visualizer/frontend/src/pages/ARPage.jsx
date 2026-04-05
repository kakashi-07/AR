/**
 * ARPage.jsx  –  The main AR experience dashboard.
 * Layout:  [Furniture Catalog] | [AR Viewer + Toolbar] | [Scene Panel]
 */
import { useEffect, useState } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'
import { useScene } from '../contexts/SceneContext'
import FurnitureCatalog  from '../components/furniture/FurnitureCatalog'
import DesktopARViewer   from '../components/ar/DesktopARViewer'
import MobileARViewer    from '../components/ar/MobileARViewer'
import ScenePanel        from '../components/ui/ScenePanel'
import ColorPicker       from '../components/ui/ColorPicker'
import Navbar            from '../components/ui/Navbar'

export default function ARPage() {
  const { isARMode } = useScene()
  const [mobileTab, setMobileTab] = useState('catalog')
  const [isMobileViewerExpanded, setIsMobileViewerExpanded] = useState(false)
  const [isDesktopViewport, setIsDesktopViewport] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.innerWidth >= 1024
  })

  useEffect(() => {
    const updateViewport = () => {
      setIsDesktopViewport(window.innerWidth >= 1024)
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  return (
    <div className="h-[100dvh] w-screen flex flex-col bg-bg-primary overflow-hidden page-enter">
      {/* ── Top nav ───────────────────────────── */}
      <Navbar />

      {/* ── Color toolbar ──────────────────────── */}
      <div className="flex-shrink-0 overflow-x-auto bg-bg-secondary border-b border-border custom-scroll">
        <ColorPicker />
      </div>

      {/* ── Desktop layout ─────────────────────── */}
      {isDesktopViewport ? (
        <div className="flex flex-1 overflow-hidden min-h-0">
          <FurnitureCatalog />

          <main className="flex-1 flex flex-col overflow-hidden min-w-0">
            <div className="flex-1 p-3 overflow-hidden">
              {isARMode ? (
                <div className="w-full h-full rounded-2xl overflow-hidden border border-border bg-bg-secondary">
                  <MobileARViewer />
                </div>
              ) : (
                <DesktopARViewer />
              )}
            </div>
          </main>

          <ScenePanel />
        </div>
      ) : (
        <div className="flex-1 min-h-0 flex flex-col overflow-y-auto custom-scroll">
          <main
<<<<<<< HEAD
            className={`relative flex-shrink-0 overflow-hidden transition-all duration-300 ${
=======
            className={`relative flex-shrink-0 p-2 sm:p-3 overflow-hidden transition-all duration-300 ${
>>>>>>> 364bc6ec47c6c64e6a2c9b00127ceb4bb1fffe30
              isMobileViewerExpanded
                ? 'h-[72dvh] min-h-[28rem] max-h-[80dvh]'
                : 'h-[40dvh] min-h-[16rem] max-h-[24rem]'
            }`}
          >
            <button
              onClick={() => setIsMobileViewerExpanded((value) => !value)}
              className="absolute right-5 top-5 z-20 rounded-xl border border-border bg-bg-secondary/90 p-2 text-text-primary shadow-card backdrop-blur-sm"
              title={isMobileViewerExpanded ? 'Restore viewer size' : 'Expand viewer'}
            >
              {isMobileViewerExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>

<<<<<<< HEAD
            <div className="w-full h-full overflow-hidden bg-bg-secondary">
=======
            <div className="w-full h-full rounded-2xl overflow-hidden border border-border bg-bg-secondary">
>>>>>>> 364bc6ec47c6c64e6a2c9b00127ceb4bb1fffe30
              {isARMode ? <MobileARViewer /> : <DesktopARViewer />}
            </div>
          </main>

          <section className="flex flex-col border-t border-border bg-bg-secondary">
            <div className="px-3 pt-3">
              <div className="grid grid-cols-2 gap-2 rounded-2xl bg-bg-elevated p-1 border border-border">
                <button
                  onClick={() => setMobileTab('catalog')}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    mobileTab === 'catalog'
                      ? 'bg-accent text-bg-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Catalog
                </button>
                <button
                  onClick={() => setMobileTab('scene')}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    mobileTab === 'scene'
                      ? 'bg-accent text-bg-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Scene
                </button>
              </div>
            </div>

            <div className={`${isMobileViewerExpanded ? 'hidden' : 'block'} pb-3`}>
              {mobileTab === 'catalog' ? <FurnitureCatalog /> : <ScenePanel />}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
