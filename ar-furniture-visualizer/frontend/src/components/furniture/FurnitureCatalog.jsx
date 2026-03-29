import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import FurnitureCard from './FurnitureCard'
import { FURNITURE_ITEMS, FURNITURE_CATEGORIES } from '../../data/furnitureData'

export default function FurnitureCatalog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery,    setSearchQuery]    = useState('')

  const filtered = useMemo(() => {
    return FURNITURE_ITEMS.filter(item => {
      const matchCat    = activeCategory === 'all' || item.category === activeCategory
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCat && matchSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col h-auto lg:h-full bg-bg-secondary lg:border-r border-border min-w-0">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-lg text-text-primary">Catalog</h2>
          <span className="badge badge-accent">{FURNITURE_ITEMS.length} items</span>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search furniture…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="input-field text-sm pl-9 py-2"
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="px-3 py-2 border-b border-border flex gap-1 overflow-x-auto custom-scroll">
        {FURNITURE_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              activeCategory === cat.id
                ? 'bg-accent text-bg-primary'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Furniture grid */}
      <div className="p-3 lg:flex-1 lg:overflow-y-auto custom-scroll">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-3xl mb-2">🔍</div>
            <p className="text-text-muted text-sm">No furniture found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {filtered.map(item => (
              <FurnitureCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
