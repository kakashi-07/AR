/**
 * ARPage.jsx  –  The main AR experience dashboard.
 * Layout:  [Furniture Catalog] | [AR Viewer + Toolbar] | [Scene Panel]
 */
import { useScene } from '../contexts/SceneContext'
import FurnitureCatalog  from '../components/furniture/FurnitureCatalog'
import DesktopARViewer   from '../components/ar/DesktopARViewer'
import MobileARViewer    from '../components/ar/MobileARViewer'
import ScenePanel        from '../components/ui/ScenePanel'
import ColorPicker       from '../components/ui/ColorPicker'
import Navbar            from '../components/ui/Navbar'

export default function ARPage() {
  const { isARMode } = useScene()

  return (
    <div className="h-screen w-screen flex flex-col bg-bg-primary overflow-hidden page-enter">
      {/* ── Top nav ───────────────────────────── */}
      <Navbar />

      {/* ── Color toolbar ──────────────────────── */}
      <div className="flex-shrink-0 px-4 py-1.5 bg-bg-secondary border-b border-border">
        <ColorPicker />
      </div>

      {/* ── Main layout (sidebar | viewer | panel) ── */}
      <div className="flex-1 flex overflow-hidden min-h-0">

        {/* Left: Furniture catalog */}
        <FurnitureCatalog />

        {/* Center: AR Viewer */}
        <main className="flex-1 flex flex-col overflow-hidden">
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

        {/* Right: Scene management panel */}
        <ScenePanel />
      </div>
    </div>
  )
}
