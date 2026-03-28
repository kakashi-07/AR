import { FURNITURE_COLORS, FURNITURE_ITEMS } from '../../data/furnitureData'
import { useScene } from '../../contexts/SceneContext'
import { Palette } from 'lucide-react'

export default function ColorPicker() {
  const { selectedObject, selectedId, updateColor } = useScene()

  if (!selectedObject) {
    return (
      <div className="flex items-center gap-2 text-text-muted text-sm px-4 py-3">
        <Palette size={15} />
        <span>Select a furniture item to change colors</span>
      </div>
    )
  }

  // Get available colors for this furniture type
  const furnitureDef = FURNITURE_ITEMS.find(f => f.id === selectedObject.furnitureId)
  const availableColors = furnitureDef?.colors || Object.keys(FURNITURE_COLORS)

  return (
    <div className="flex items-center gap-3 px-4 py-2">
      <div className="flex items-center gap-1.5 text-text-secondary text-xs flex-shrink-0">
        <Palette size={14} />
        <span>Color:</span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {availableColors.map(colorKey => {
          const color = FURNITURE_COLORS[colorKey]
          if (!color) return null
          return (
            <button
              key={colorKey}
              title={color.label}
              onClick={() => updateColor(selectedId, colorKey)}
              className={`color-swatch ${selectedObject.colorKey === colorKey ? 'active' : ''}`}
              style={{ backgroundColor: color.hex }}
            />
          )
        })}
      </div>

      <span className="text-text-muted text-xs ml-1">
        {FURNITURE_COLORS[selectedObject.colorKey]?.label || ''}
      </span>
    </div>
  )
}
