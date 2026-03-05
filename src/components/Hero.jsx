import { useState, useEffect } from 'react'

const roles = [
  'AI Engineer',
  'Agent Builder',
  'Trading Bot Developer',
  'Music Tech Developer',
  'Full-Stack Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-cyan top-1/4 -left-32" style={{ opacity: 0.12 }} />
      <div className="orb w-80 h-80 bg-purple bottom-1/4 -right-24" style={{ opacity: 0.12 }} />
      <div className="orb w-64 h-64" style={{ background: '#10b981', bottom: '10%', left: '30%', opacity: 0.07 }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 text-sm text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for work
        </div>

        {/* Name */}
        <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl tracking-tight text-white mb-4 leading-none">
          LARRY<br />
          <span className="gradient-text">HOWARD</span>
        </h1>

        {/* Typing role */}
        <div className="font-display text-xl sm:text-2xl font-semibold text-slate-300 h-10 mb-6">
          <span className="text-cyan-400">{displayed}</span>
          <span className="cursor" />
        </div>

        {/* Tagline */}
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          I build autonomous AI agents, live trading systems, music tech tools, and full-stack SaaS —
          shipped and running in production.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { value: '8+', label: 'Projects Shipped' },
            { value: '5+', label: 'Languages' },
            { value: '4', label: 'Domains' },
            { value: 'Live', label: 'Trading Bot' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-2xl gradient-text">{value}</div>
              <div className="text-slate-500 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-slate-600 text-xs animate-bounce">
          <span>scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
