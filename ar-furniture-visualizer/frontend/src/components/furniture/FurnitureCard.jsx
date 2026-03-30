import { useState } from 'react'
import { Eye, Plus, Check } from 'lucide-react'
import { useScene } from '../../contexts/SceneContext'
import { FURNITURE_COLORS } from '../../data/furnitureData'

// Mini SVG furniture icon per category
function FurnitureThumbnail({ item }) {
  const bgColors = {
    seating: 'from-amber-900/40 to-amber-800/20',
    tables:  'from-stone-800/40 to-stone-700/20',
    storage: 'from-slate-800/40 to-slate-700/20',
    bedroom: 'from-indigo-900/40 to-indigo-800/20',
    work:    'from-emerald-900/40 to-emerald-800/20',
  }
  const bg = bgColors[item.category] || 'from-gray-800/40 to-gray-700/20'

  return (
    <div className={`h-28 bg-gradient-to-br ${bg} flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,165,116,0.3) 0%, transparent 70%)',
        }}
      />
      <span className="text-5xl filter drop-shadow-lg" role="img" aria-label={item.name}>
        {item.emoji}
      </span>
      {item.popular && (
        <span className="absolute top-2 right-2 badge badge-accent text-[10px]">
          Popular
        </span>
      )}
    </div>
  )
}

export default function FurnitureCard({ item }) {
  const [added, setAdded] = useState(false)
  const { addObject, objects, selectObject } = useScene()

  const countInScene = objects.filter(o => o.furnitureId === item.id).length

  const handleAdd = () => {
    addObject(item.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="furniture-card group">
      <FurnitureThumbnail item={item} />

      <div className="p-3">
        {/* Name + price */}
        <div className="flex items-start justify-between gap-1 mb-1">
          <h3 className="text-text-primary font-semibold text-sm leading-tight line-clamp-1">
            {item.name}
          </h3>
          <span className="text-accent text-xs font-medium whitespace-nowrap flex-shrink-0">
            {item.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-text-muted text-xs line-clamp-2 mb-3 leading-relaxed">
          {item.description}
        </p>

        {/* Available colors preview */}
        <div className="flex items-center gap-1 mb-3">
          {item.colors.slice(0, 5).map(c => (
            <div
              key={c}
              title={FURNITURE_COLORS[c]?.label}
              className="w-3.5 h-3.5 rounded-full border border-white/10 flex-shrink-0"
              style={{ backgroundColor: FURNITURE_COLORS[c]?.hex }}
            />
          ))}
          {item.colors.length > 5 && (
            <span className="text-text-muted text-[10px]">+{item.colors.length - 5}</span>
          )}
        </div>

        {/* In-scene badge */}
        {countInScene > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <span className="badge badge-success text-[10px]">
              ✓ {countInScene} in scene
            </span>
          </div>
        )}

        {/* CTA Button */}
        <button
          onClick={handleAdd}
          className={`w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
            added
              ? 'bg-success/20 text-success border border-success/30'
              : 'bg-accent/10 hover:bg-accent text-accent hover:text-bg-primary border border-accent/30 hover:border-accent'
          }`}
        >
          {added ? (
            <><Check size={14} /> Added!</>
          ) : (
            <><Plus size={14} /> Add to Scene</>
          )}
        </button>
      </div>
    </div>
  )
}
