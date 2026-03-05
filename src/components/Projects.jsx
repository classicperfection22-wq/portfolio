import { useState, useEffect, useRef } from 'react'
import { projects, categoryColors } from '../data/projects'

const filters = ['All', 'AI', 'Trading', 'Music', 'SaaS']

function ProjectCard({ project }) {
  const c = categoryColors[project.category]

  return (
    <div className={`project-card ${c.card} p-6 flex flex-col gap-4`}>
      {/* Category badge */}
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-display font-bold uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ color: c.text, background: c.bg, border: `1px solid ${c.border}` }}
        >
          {project.category}
        </span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            title="View project"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      {/* Title */}
      <div>
        <h3 className="font-display font-bold text-lg text-white leading-tight">{project.title}</h3>
        <p className="text-sm mt-0.5" style={{ color: c.text }}>{project.subtitle}</p>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Highlights */}
      <ul className="space-y-1">
        {project.highlights.map((h) => (
          <li key={h} className="text-slate-400 text-xs flex items-start gap-2">
            <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.text }} />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/8 font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="reveal">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-cyan-400 font-display font-semibold text-sm tracking-widest uppercase mb-3">
            What I've Built
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Production-grade systems built solo — AI agents, live trading, music tech, and SaaS.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`filter-tab ${active === f ? `active-${f}` : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
