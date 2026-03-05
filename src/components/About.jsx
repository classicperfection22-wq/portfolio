import { useEffect, useRef } from 'react'

const highlights = [
  { icon: '🤖', title: 'AI Agent Systems', desc: 'Built fully autonomous agents that control desktops, browse the web, and execute multi-step plans with local LLMs.' },
  { icon: '📈', title: 'Live Trading Bots', desc: 'Shipped live crypto trading systems executing real DEX trades on Ethereum and Base with adaptive strategies.' },
  { icon: '🎵', title: 'Music Technology', desc: 'Built AI-powered DAW controllers, wavetable synthesizers, and MIDI generation tools from scratch.' },
  { icon: '🚀', title: 'Full-Stack SaaS', desc: 'Designed and built multi-tenant SaaS platforms with FastAPI, React, Stripe, and Docker — end to end.' },
]

export default function About() {
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
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-cyan-400 font-display font-semibold text-sm tracking-widest uppercase mb-3">
              Who I Am
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Builder. <span className="gradient-text">Thinker.</span><br />
              Shipped it.
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a self-taught developer who builds production-grade software across AI, trading, audio, and SaaS.
                No tutorials as portfolio pieces — everything I ship runs in the real world.
              </p>
              <p>
                I specialize in systems that think for themselves: autonomous agents with memory and planning,
                trading bots that execute real money on live DEXs, and AI tools that compose music and control DAWs.
              </p>
              <p>
                I work across the full stack — from low-level C++ DSP engines on Raspberry Pi hardware to
                cloud-deployed Python APIs and polished React frontends.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">See My Work</a>
              <a href="/Resume.docx" className="btn-outline" download>Download Resume</a>
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-card rounded-xl p-5 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl mb-3">{h.icon}</div>
                <h3 className="font-display font-bold text-white text-sm mb-2">{h.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
