import { useState } from 'react'
import { ShoppingCart, X, Trash2, ShoppingBag } from 'lucide-react'
import { useScene } from '../../contexts/SceneContext'
import { FURNITURE_ITEMS, FURNITURE_COLORS } from '../../data/furnitureData'

export default function CartSimulator() {
  const [open,   setOpen]   = useState(false)
  const [cart,   setCart]   = useState([])
  const [ordered, setOrdered] = useState(false)
  const { objects } = useScene()

  const addAllToCart = () => {
    const newItems = objects.map(obj => {
      const def = FURNITURE_ITEMS.find(f => f.id === obj.furnitureId)
      return {
        id:       obj.id,
        name:     def?.name || obj.name,
        emoji:    def?.emoji || '📦',
        price:    def?.price || '₹0',
        colorKey: obj.colorKey,
        colorHex: obj.colorHex,
      }
    })
    setCart(prev => {
      const existingIds = new Set(prev.map(p => p.id))
      const fresh = newItems.filter(i => !existingIds.has(i.id))
      return [...prev, ...fresh]
    })
    setOpen(true)
    setOrdered(false)
  }

  const removeFromCart = (id) => setCart(c => c.filter(i => i.id !== id))
  const placeOrder     = () => { setOrdered(true); setCart([]) }

  const totalPrice = cart.reduce((sum, item) => {
    const raw = item.price.replace(/[^0-9]/g, '')
    return sum + (parseInt(raw) || 0)
  }, 0)

  return (
    <>
      {/* Trigger button */}
      <div className="flex items-center gap-2">
        {objects.length > 0 && (
          <button
            onClick={addAllToCart}
            className="btn-secondary text-xs px-3 py-1.5 flex items-center gap-1.5"
          >
            <ShoppingCart size={13} />
            Add to Cart ({objects.length})
          </button>
        )}
        <button
          onClick={() => setOpen(true)}
          className="relative bg-bg-elevated border border-border rounded-xl p-2 hover:border-accent/40 transition-all"
        >
          <ShoppingBag size={16} className="text-text-secondary" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-bg-primary text-[9px] font-bold rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Cart panel overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-end p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="relative glass-card w-80 max-h-[80vh] flex flex-col shadow-card z-10 animate-slide-in">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag size={16} className="text-accent" />
                <h3 className="font-display text-base text-text-primary">Your Cart</h3>
              </div>
              <button onClick={() => setOpen(false)} className="text-text-muted hover:text-text-primary transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto custom-scroll p-3 space-y-2">
              {ordered ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-3">🎉</div>
                  <p className="text-text-primary font-semibold">Order Placed!</p>
                  <p className="text-text-muted text-sm mt-1">
                    This is a demo — no real order was placed.
                  </p>
                </div>
              ) : cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-3xl mb-2">🛒</div>
                  <p className="text-text-muted text-sm">Your cart is empty</p>
                  <p className="text-text-muted text-xs mt-1">Add furniture from your scene</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center gap-3 bg-bg-elevated rounded-xl p-3 border border-border">
                    <span className="text-2xl">{item.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-text-primary text-sm font-medium truncate">{item.name}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div
                          className="w-3 h-3 rounded-full border border-white/10 flex-shrink-0"
                          style={{ backgroundColor: FURNITURE_COLORS[item.colorKey]?.hex }}
                        />
                        <span className="text-text-muted text-xs">
                          {FURNITURE_COLORS[item.colorKey]?.label}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-accent text-sm font-semibold">{item.price}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-text-muted hover:text-error transition-colors mt-0.5"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && !ordered && (
              <div className="p-4 border-t border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-text-secondary text-sm">Total</span>
                  <span className="text-text-primary font-bold font-display text-lg">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <button
                  onClick={placeOrder}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={16} />
                  Place Order (Demo)
                </button>
                <p className="text-text-muted text-[10px] text-center mt-2">
                  This is a simulation — no real transaction occurs
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
