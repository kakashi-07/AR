/**
 * TutorialPage.jsx
 * Onboarding / How-it-works page shown after first login.
 * Steps are animated card walkthrough.
 */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'
import { useAuth } from "../contexts/AuthContext";

const STEPS = [
  {
    emoji:    '🔐',
    step:     '01',
    title:    'Sign In & Get Started',
    subtitle: 'Your personal AR session',
    desc:     'Create your account to save your room layouts, furniture preferences, and AR sessions across devices.',
    tips:     ['Your data is private and secure', 'Works on mobile and desktop', 'Sync sessions across devices'],
    color:    'from-amber-900/30 to-amber-800/10',
  },
  {
    emoji:    '📷',
    step:     '02',
    title:    'Set Up Your Room',
    subtitle: 'Desktop or Mobile camera',
    desc:     'On desktop, upload a photo of your room. On mobile, point your camera at the floor and let AR detect the surface automatically.',
    tips:     ['Good lighting helps surface detection', 'Point camera at a flat floor', 'Upload JPG/PNG for desktop mode'],
    color:    'from-blue-900/30 to-blue-800/10',
  },
  {
    emoji:    '🛋️',
    step:     '03',
    title:    'Browse the Catalog',
    subtitle: '12+ furniture pieces',
    desc:     'Choose from sofas, tables, beds, wardrobes, desks and more in the left sidebar. Filter by category or search by name.',
    tips:     ['Tap "Add to Scene" to queue it', 'Multiple items can be added', 'See real dimensions & price'],
    color:    'from-emerald-900/30 to-emerald-800/10',
  },
  {
    emoji:    '🪄',
    step:     '04',
    title:    'Place & Interact',
    subtitle: 'Move · Rotate · Scale',
    desc:     'On mobile, tap any flat surface to place furniture. On desktop, drag it anywhere. Use the panel controls to rotate and resize.',
    tips:     ['Drag to reposition', 'Scroll wheel or pinch to scale', 'Press R or use buttons to rotate'],
    color:    'from-purple-900/30 to-purple-800/10',
  },
  {
    emoji:    '🎨',
    step:     '05',
    title:    'Change Colors',
    subtitle: '8 material finishes',
    desc:     'Select any placed furniture and switch between Oak Wood, Walnut, White, Matte Black, Gray, Linen, Navy Blue, and Sage Green.',
    tips:     ['Click a color swatch to apply', 'Each item has unique color options', 'Mix & match for your style'],
    color:    'from-rose-900/30 to-rose-800/10',
  },
  {
    emoji:    '✅',
    step:     '06',
    title:    'Design Your Dream Room',
    subtitle: 'Multi-object AR scene',
    desc:     'Add as many furniture pieces as you need. Build the entire room layout virtually before making any purchase decision.',
    tips:     ['No purchase needed to try', 'Reset and start over anytime', 'Screenshot the final look'],
    color:    'from-accent/20 to-accent/5',
  },
]

export default function TutorialPage() {
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate()
  const { user } = useAuth()

  const step = STEPS[current]
  const isLast = current === STEPS.length - 1

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -10%, rgba(212,165,116,0.08) 0%, transparent 60%)`,
          backgroundImage: `
            linear-gradient(rgba(212,165,116,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,165,116,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-border bg-bg-secondary/60 backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">🛋️</span>
          <div>
            <h1 className="font-display text-base text-text-primary leading-none">AR Furniture Visualizer</h1>
            <p className="text-text-muted text-[10px]">Quick Start Guide</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-text-muted text-sm">
            Hello, {user?.name?.split(' ')[0] || 'there'} 👋
          </span>
          <button
            onClick={() => navigate('/app')}
            className="text-text-muted hover:text-text-secondary text-xs underline underline-offset-2 transition-colors"
          >
            Skip tutorial
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-4xl">
          {/* Step indicators */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-8 h-2.5 bg-accent'
                    : i < current
                    ? 'w-2.5 h-2.5 bg-accent/40'
                    : 'w-2.5 h-2.5 bg-border'
                }`}
              />
            ))}
          </div>

          {/* Main card */}
          <div
            key={current}
            className="glass-card overflow-hidden shadow-card"
            style={{ animation: 'slideUp 0.35s ease forwards' }}
          >
            <div className="md:flex">
              {/* Left: Visual */}
              <div className={`md:w-5/12 bg-gradient-to-br ${step.color} flex flex-col items-center justify-center p-12`}>
                <div
                  className="text-8xl mb-4"
                  style={{ animation: 'float 3s ease-in-out infinite' }}
                >
                  {step.emoji}
                </div>
                <span className="text-text-muted text-sm font-mono">STEP {step.step}</span>
                <div className="mt-6 space-y-2 w-full max-w-xs">
                  {step.tips.map((tip, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2"
                      style={{ animation: `slideUp 0.3s ${i * 0.08}s ease forwards`, opacity: 0 }}
                    >
                      <CheckCircle size={13} className="text-accent flex-shrink-0" />
                      <span className="text-text-secondary text-xs">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Text */}
              <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">
                  {step.subtitle}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4 leading-tight">
                  {step.title}
                </h2>
                <p className="text-text-secondary text-base leading-relaxed mb-8">
                  {step.desc}
                </p>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  {current > 0 && (
                    <button
                      onClick={() => setCurrent(c => c - 1)}
                      className="btn-secondary flex items-center gap-2"
                    >
                      <ArrowLeft size={16} />
                      Back
                    </button>
                  )}

                  {isLast ? (
                    <button
                      onClick={() => navigate('/app')}
                      className="btn-primary flex items-center gap-2 text-base px-8 py-3"
                    >
                      Start AR Experience
                      <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrent(c => c + 1)}
                      className="btn-primary flex items-center gap-2"
                    >
                      Next
                      <ArrowRight size={16} />
                    </button>
                  )}

                  <span className="text-text-muted text-xs ml-auto">
                    {current + 1} / {STEPS.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* All steps overview (small thumbnails below) */}
          <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-2">
            {STEPS.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`p-3 rounded-xl border text-center transition-all duration-200 ${
                  i === current
                    ? 'border-accent bg-accent/5'
                    : 'border-border bg-bg-card hover:border-accent/30'
                }`}
              >
                <div className="text-xl mb-0.5">{s.emoji}</div>
                <p className={`text-[10px] font-medium ${i === current ? 'text-accent' : 'text-text-muted'}`}>
                  {s.step}
                </p>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
