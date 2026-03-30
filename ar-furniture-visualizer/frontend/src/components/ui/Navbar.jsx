import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, User, ChevronDown, Monitor, Smartphone } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useScene } from '../../contexts/SceneContext'

export default function Navbar() {
  const { user, logout }       = useAuth()
  const { isARMode, setARMode, setRoomImage } = useScene()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setRoomImage(ev.target.result)
    reader.readAsDataURL(file)
    e.target.value = ''
    setARMode(false)
  }

  return (
    <header className="flex-shrink-0 flex flex-wrap items-center justify-between gap-3 px-3 py-3 sm:px-4 bg-bg-secondary border-b border-border z-20">
      {/* Logo */}
      <div className="flex items-center gap-2.5 min-w-0">
        <span className="text-2xl">🛋️</span>
        <div>
          <h1 className="font-display text-base text-text-primary leading-none">AR Visualizer</h1>
          <p className="text-text-muted text-[10px]">Furniture in Your Space</p>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="order-3 w-full sm:order-none sm:w-auto flex items-center gap-1 bg-bg-elevated rounded-xl p-1 border border-border overflow-x-auto custom-scroll">
        <button
          onClick={() => setARMode(false)}
          className={`flex-1 sm:flex-none items-center justify-center flex gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
            !isARMode ? 'bg-accent text-bg-primary' : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          <Monitor size={13} />
          Desktop
        </button>
        <button
          onClick={() => setARMode(true)}
          className={`flex-1 sm:flex-none items-center justify-center flex gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
            isARMode ? 'bg-accent text-bg-primary' : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          <Smartphone size={13} />
          Mobile AR
        </button>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2 ml-auto">
        {/* Upload room photo (desktop mode only) */}
        {!isARMode && (
          <label className="btn-secondary text-xs px-3 py-1.5 cursor-pointer whitespace-nowrap">
            📷 Upload Room Photo
            <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
          </label>
        )}

        {/* User menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="flex items-center gap-2 bg-bg-elevated hover:bg-border border border-border rounded-xl px-3 py-1.5 transition-all"
          >
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
              <User size={13} className="text-accent" />
            </div>
            <span className="text-text-primary text-xs font-medium hidden sm:block">
              {user?.name || user?.email?.split('@')[0] || 'User'}
            </span>
            <ChevronDown size={12} className="text-text-muted" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 glass-card shadow-card py-1 z-50">
              <div className="px-4 py-2 border-b border-border">
                <p className="text-text-primary text-sm font-medium">{user?.name || 'User'}</p>
                <p className="text-text-muted text-xs truncate">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-text-secondary hover:text-error hover:bg-error/5 transition-all"
              >
                <LogOut size={14} />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
