import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    label: 'Languages',
    color: '#00d4ff',
    skills: ['Python', 'C++', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    label: 'AI & ML',
    color: '#8b5cf6',
    skills: ['GPT-4o Vision', 'Ollama', 'Claude API', 'Anthropic MCP', 'RAG', 'Markov chains', 'Basic Pitch'],
  },
  {
    label: 'Web & APIs',
    color: '#00d4ff',
    skills: ['FastAPI', 'Flask', 'Express.js', 'React 18', 'Vite', 'TailwindCSS', 'REST', 'JWT', 'Stripe'],
  },
  {
    label: 'Databases',
    color: '#10b981',
    skills: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis'],
  },
  {
    label: 'DevOps',
    color: '#f59e0b',
    skills: ['Docker', 'Docker Compose', 'Celery', 'Git', 'GitHub Actions'],
  },
  {
    label: 'Audio & Music',
    color: '#8b5cf6',
    skills: ['JUCE 7', 'MIDI', 'Wavetable synthesis', 'pretty_midi', 'yt-dlp', 'ffmpeg', 'JACK Audio'],
  },
  {
    label: 'Platforms',
    color: '#10b981',
    skills: ['Windows automation', 'pywinauto', 'Raspberry Pi', 'Ethereum', 'Base blockchain', 'Uniswap V3'],
  },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="mb-14 text-center">
          <p className="text-cyan-400 font-display font-semibold text-sm tracking-widest uppercase mb-3">
            What I Work With
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="bg-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                <span
                  className="font-display font-bold text-sm tracking-wide uppercase"
                  style={{ color: group.color }}
                >
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
