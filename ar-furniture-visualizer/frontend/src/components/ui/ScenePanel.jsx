import { useState } from 'react'
import { Trash2, RotateCcw, RotateCw, Plus, Minus, RefreshCcw, Layers, Download } from 'lucide-react'
import { useScene } from '../../contexts/SceneContext'
import { FURNITURE_ITEMS } from '../../data/furnitureData'

function ControlButton({ icon: Icon, label, onClick, variant = 'default', small }) {
  const base   = `flex items-center justify-center rounded-lg transition-all duration-200 active:scale-90 ${small ? 'w-8 h-8' : 'w-9 h-9'}`
  const styles = {
    default: 'bg-bg-elevated hover:bg-border text-text-secondary hover:text-text-primary border border-border',
    accent:  'bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20',
    danger:  'bg-error/10 hover:bg-error/20 text-error border border-error/20',
  }
  return (
    <button title={label} onClick={onClick} className={`${base} ${styles[variant]}`}>
      <Icon size={small ? 13 : 15} />
    </button>
  )
}

export default function ScenePanel() {
  const [isSavingPicture, setIsSavingPicture] = useState(false)
  const { objects, selectedId, selectedObject, selectObject, removeObject, resetScene, isARMode } = useScene()

  const handleRotate = (deg) => {
    if (typeof window.__arRotate === 'function') window.__arRotate(deg)
  }
  const handleScale = (factor) => {
    if (typeof window.__arScale === 'function') window.__arScale(factor)
  }
  const handleSavePicture = async () => {
    if (typeof window.__saveLayoutPicture !== 'function') return
    setIsSavingPicture(true)
    try {
      await window.__saveLayoutPicture()
    } catch (error) {
      window.alert(error?.message || 'Could not save the layout picture.')
    } finally {
      setIsSavingPicture(false)
    }
  }

  return (
    <aside className="w-full lg:w-52 flex-shrink-0 flex flex-col h-auto lg:h-full bg-bg-secondary lg:border-l border-border min-w-0">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers size={15} className="text-accent" />
            <h2 className="font-display text-base text-text-primary">Scene</h2>
          </div>
          <span className="badge badge-accent text-[10px]">{objects.length}</span>
        </div>
      </div>

      {/* Objects list */}
      <div className="p-3 space-y-1.5 lg:flex-1 lg:overflow-y-auto custom-scroll">
        {objects.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-2xl mb-2">🏠</div>
            <p className="text-text-muted text-xs">No furniture added yet</p>
            <p className="text-text-muted text-xs">Click "Add to Scene" from the catalog</p>
          </div>
        ) : (
          objects.map((obj, i) => {
            const furnitureDef = FURNITURE_ITEMS.find(f => f.id === obj.furnitureId)
            const isSelected   = selectedId === obj.id
            return (
              <div
                key={obj.id}
                className={`scene-item ${isSelected ? 'selected' : ''}`}
                onClick={() => selectObject(obj.id)}
              >
                <span className="text-lg flex-shrink-0">{obj.emoji || furnitureDef?.emoji || '📦'}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-text-primary text-xs font-medium truncate">{obj.name}</p>
                  <p className="text-text-muted text-[10px]">Item {i + 1}</p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); removeObject(obj.id) }}
                  className="text-text-muted hover:text-error transition-colors p-1 rounded"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            )
          })
        )}
      </div>

      {/* Transform controls for selected object */}
      {selectedObject && (
        <div className="border-t border-border p-3 space-y-3">
          <p className="text-text-muted text-xs font-medium">Transform: {selectedObject.name}</p>

          {/* Rotate */}
          <div>
            <p className="text-text-muted text-[10px] mb-1.5">Rotate</p>
            <div className="flex gap-1.5">
              <ControlButton icon={RotateCcw}  label="Rotate -45°" onClick={() => handleRotate(-45)} small />
              <ControlButton icon={RotateCcw}  label="Rotate -90°" onClick={() => handleRotate(-90)} small />
              <ControlButton icon={RotateCw}   label="Rotate +90°" onClick={() => handleRotate(90)}  small />
              <ControlButton icon={RotateCw}   label="Rotate +45°" onClick={() => handleRotate(45)}  small />
            </div>
          </div>

          {/* Scale */}
          <div>
            <p className="text-text-muted text-[10px] mb-1.5">Scale</p>
            <div className="flex gap-1.5">
              <ControlButton icon={Minus} label="Shrink"   onClick={() => handleScale(0.9)} small />
              <ControlButton icon={Minus} label="Shrink more" onClick={() => handleScale(0.75)} small />
              <ControlButton icon={Plus}  label="Grow"     onClick={() => handleScale(1.1)} small />
              <ControlButton icon={Plus}  label="Grow more"  onClick={() => handleScale(1.25)} small />
            </div>
          </div>

          {/* Delete */}
          <ControlButton
            icon={Trash2}
            label="Delete"
            variant="danger"
            onClick={() => removeObject(selectedId)}
          />
        </div>
      )}

      {/* Scene actions */}
      {objects.length > 0 && (
        <div className="px-3 pb-3 border-t border-border pt-2">
          {!isARMode && (
            <button
              onClick={handleSavePicture}
              disabled={isSavingPicture}
              className="w-full mb-2 flex items-center justify-center gap-2 text-text-primary text-xs py-2 rounded-xl bg-accent/10 hover:bg-accent/20 border border-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Download size={12} />
              {isSavingPicture ? 'Saving picture…' : 'Save Layout Picture'}
            </button>
          )}
          <button
            onClick={() => {
              if (window.confirm('Clear all furniture from the scene?')) resetScene()
            }}
            className="w-full flex items-center justify-center gap-2 text-text-muted hover:text-error text-xs py-2 rounded-xl hover:bg-error/5 transition-all border border-transparent hover:border-error/20"
          >
            <RefreshCcw size={12} />
            Reset Scene
          </button>
        </div>
      )}
    </aside>
  )
}
