/**
 * LoginPage.jsx
 * Professional auth page with furniture-themed animated background.
 * Handles both Sign In and Sign Up flows.
 */
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, AlertCircle } from 'lucide-react'
import { useAuth } from "../contexts/AuthContext";

// ── Floating furniture particles background ──────────────────
const EMOJIS  = ['🛋️','🪑','🛏️','🗄️','💡','🪴','🖼️','🛁','🪞','📚']
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  emoji: EMOJIS[i % EMOJIS.length],
  x:     `${5 + Math.random() * 90}%`,
  delay: `${Math.random() * 6}s`,
  dur:   `${6 + Math.random() * 6}s`,
  size:  `${1.4 + Math.random() * 1.4}rem`,
  top:   `${Math.random() * 100}%`,
}))

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient blobs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl"
        style={{
          background: 'radial-gradient(circle, #D4A574, transparent)',
          top: '-20%', left: '-10%',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05] blur-3xl"
        style={{
          background: 'radial-gradient(circle, #E8C49A, transparent)',
          bottom: '-15%', right: '-5%',
        }}
      />
      {/* Floating emoji particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: p.x,
            top: p.top,
            fontSize: p.size,
            opacity: 0.07,
            animation: `float ${p.dur} ${p.delay} ease-in-out infinite`,
            filter: 'grayscale(0.3)',
          }}
        >
          {p.emoji}
        </div>
      ))}
      {/* Grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,165,116,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,165,116,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}

// ── Input field component ────────────────────────────────────
function AuthInput({ icon: Icon, type, placeholder, value, onChange, rightSlot }) {
  return (
    <div className="relative">
      <Icon
        size={16}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
      />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field pl-10 pr-10"
        autoComplete="off"
      />
      {rightSlot && (
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
          {rightSlot}
        </div>
      )}
    </div>
  )
}

export default function LoginPage() {
  const [mode,     setMode]     = useState('login')  // 'login' | 'signup'
  const [name,     setName]     = useState('')
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [confirm,  setConfirm]  = useState('')
  const [showPwd,  setShowPwd]  = useState(false)
  const [loading,  setLoading]  = useState(false)
  const [localErr, setLocalErr] = useState('')
  const [animate,  setAnimate]  = useState(false)

  const { login, signup, error, clearError, user } = useAuth()
  const navigate = useNavigate()

  // Redirect if already logged in
  useEffect(() => {
    if (user) navigate('/tutorial')
  }, [user, navigate])

  // Animate on mode switch
  const switchMode = (m) => {
    setAnimate(true)
    setTimeout(() => {
      setMode(m)
      setLocalErr('')
      clearError()
      setAnimate(false)
    }, 200)
  }

  const validate = () => {
    if (mode === 'signup' && !name.trim())
      return 'Please enter your name.'
    if (!email.includes('@'))
      return 'Please enter a valid email address.'
    if (password.length < 6)
      return 'Password must be at least 6 characters.'
    if (mode === 'signup' && password !== confirm)
      return 'Passwords do not match.'
    return ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLocalErr('')
    clearError()

    const err = validate()
    if (err) { setLocalErr(err); return }

    setLoading(true)
    const result = mode === 'login'
      ? await login(email, password)
      : await signup(name, email, password)
    setLoading(false)

    if (result.success) {
      navigate('/tutorial')
    }
  }

  const displayError = localErr || error

  return (
    <div className="min-h-screen bg-bg-primary flex relative overflow-hidden">
      <ParticleBackground />

      {/* ── Left panel (branding) ── visible on md+ */}
      <div className="hidden md:flex flex-col justify-between w-1/2 p-12 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-3xl">🛋️</span>
          <div>
            <h1 className="font-display text-xl text-text-primary">AR Furniture</h1>
            <p className="text-text-muted text-xs">Visualizer</p>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-4xl text-text-primary leading-tight mb-4">
              See your furniture<br />
              <span className="text-accent italic">before you buy.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-md leading-relaxed">
              Place 3D furniture in your actual room using your phone camera or upload a room photo.
              No guessing. No returns.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: '📱', title: 'Live AR Camera',    desc: 'Point & place on any flat surface' },
              { icon: '🖼️', title: 'Photo Mode',        desc: 'Upload a room photo on desktop' },
              { icon: '🛋️', title: '12+ Furniture',     desc: 'Sofas, beds, tables, storage & more' },
              { icon: '🎨', title: 'Color Variants',    desc: '8 finishes: wood, black, white, sage…' },
            ].map(f => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="text-xl mt-0.5">{f.icon}</span>
                <div>
                  <p className="text-text-primary font-semibold text-sm">{f.title}</p>
                  <p className="text-text-muted text-xs">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-text-muted text-xs">
          © 2025 AR Furniture Visualizer · Built with React + Three.js + WebXR
        </p>
      </div>

      {/* ── Right panel (auth form) ── */}
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div
          className="glass-card w-full max-w-md p-8 shadow-card"
          style={{
            opacity: animate ? 0 : 1,
            transform: animate ? 'translateY(8px)' : 'translateY(0)',
            transition: 'all 0.2s ease',
          }}
        >
          {/* Mobile logo */}
          <div className="md:hidden flex items-center gap-2 mb-6">
            <span className="text-2xl">🛋️</span>
            <span className="font-display text-lg text-text-primary">AR Furniture Visualizer</span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="font-display text-2xl text-text-primary mb-1">
              {mode === 'login' ? 'Welcome back' : 'Create account'}
            </h2>
            <p className="text-text-secondary text-sm">
              {mode === 'login'
                ? 'Sign in to continue your AR experience'
                : 'Start visualizing furniture in your space'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <AuthInput
                icon={User}
                type="text"
                placeholder="Full name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            )}

            <AuthInput
              icon={Mail}
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <AuthInput
              icon={Lock}
              type={showPwd ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              rightSlot={
                <button
                  type="button"
                  onClick={() => setShowPwd(v => !v)}
                  className="text-text-muted hover:text-text-secondary transition-colors"
                >
                  {showPwd ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              }
            />

            {mode === 'signup' && (
              <AuthInput
                icon={Lock}
                type={showPwd ? 'text' : 'password'}
                placeholder="Confirm password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
              />
            )}

            {/* Error message */}
            {displayError && (
              <div className="flex items-start gap-2 bg-error/10 border border-error/20 rounded-xl px-4 py-3">
                <AlertCircle size={15} className="text-error flex-shrink-0 mt-0.5" />
                <p className="text-error text-sm">{displayError}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-bg-primary/40 border-t-bg-primary rounded-full animate-spin" />
              ) : (
                <>
                  {mode === 'login' ? 'Sign In' : 'Create Account'}
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-text-muted text-xs">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Demo login */}
          <button
            onClick={() => {
              setEmail('demo@arfurniture.com')
              setPassword('demo123')
            }}
            className="btn-secondary w-full text-sm mb-4"
          >
            🎯 Use Demo Account
          </button>

          {/* Switch mode */}
          <p className="text-center text-text-muted text-sm">
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
              className="text-accent hover:text-accent-light font-semibold transition-colors"
            >
              {mode === 'login' ? 'Sign up free' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
