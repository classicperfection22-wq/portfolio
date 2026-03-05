import { useEffect, useRef } from 'react'

const links = [
  {
    label: 'LinkedIn',
    value: 'larry-h22',
    href: 'https://www.linkedin.com/in/larry-h22/',
    color: '#0077b5',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Moltbook',
    value: 'marcella_50922',
    href: 'https://www.moltbook.com/u/marcella_50922',
    color: '#00d4ff',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '(760) 215-4710',
    href: 'tel:7602154710',
    color: '#10b981',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

export default function Contact() {
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
    <section id="contact" className="py-24 px-6">
      {/* Background accent */}
      <div className="relative max-w-4xl mx-auto">
        <div className="orb w-96 h-96 bg-purple" style={{ top: '-50%', left: '50%', transform: 'translateX(-50%)', opacity: 0.08 }} />

        <div ref={ref} className="reveal relative z-10">
          <div className="text-center mb-14">
            <p className="text-cyan-400 font-display font-semibold text-sm tracking-widest uppercase mb-3">
              Let's Connect
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Open to new roles, freelance projects, and collaborations.
              AI agents, trading systems, music tech — let's build something.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col items-center gap-3 text-center hover:-translate-y-1"
                style={{ '--hover-color': link.color }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${link.color}18`, color: link.color }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">{link.label}</p>
                  <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="mailto:" className="btn-primary inline-block text-base px-10 py-4">
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
