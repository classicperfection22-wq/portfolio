import { useEffect, useRef } from 'react'

const jobs = [
  {
    title: 'Technical Service Representative II',
    company: 'Axalta Coating Systems',
    period: 'Mar 2024 – Feb 2026',
    color: '#00d4ff',
    bullets: [
      'Improved manufacturing coating processes and resolved technical production issues',
      'Collaborated with engineering and production teams on process optimization',
    ],
  },
  {
    title: 'Laboratory Technician',
    company: 'Austin Elements Inc.',
    period: 'Dec 2022 – Aug 2023',
    color: '#8b5cf6',
    bullets: [
      'Performed raw material blending, reactor operations, and laboratory testing',
      'Maintained quality control standards and technical documentation',
    ],
  },
  {
    title: 'Senior Production Technician',
    company: 'Singular Genomics',
    period: 'Nov 2021 – Apr 2022',
    color: '#10b981',
    bullets: [
      'Maintained production equipment and supported manufacturing processes',
      'Applied root cause analysis to reduce equipment downtime',
    ],
  },
  {
    title: 'Level 4 Technician',
    company: 'Cymer',
    period: 'Jan 2011 – Mar 2021',
    color: '#f59e0b',
    bullets: [
      '10 years maintaining and repairing advanced manufacturing equipment',
      'Expert in preventive maintenance, process improvement, and CGMP compliance',
      'Supported high-volume production environments with ERP systems (SAP, Oracle)',
    ],
  },
]

const competencies = [
  'Production Equipment Troubleshooting',
  'Preventive Maintenance',
  'Process Improvement',
  'Quality Assurance & Control',
  'ERP Systems (SAP & Oracle)',
  'Laboratory Operations',
  'Root Cause Analysis',
  'Safety & CGMP Compliance',
  'Technical Documentation',
]

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="mb-14 text-center">
          <p className="text-cyan-400 font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Where I've Worked
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-4">
            {jobs.map((job) => (
              <div
                key={job.company}
                className="bg-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-white text-base leading-tight">{job.title}</h3>
                    <p className="font-semibold text-sm mt-0.5" style={{ color: job.color }}>{job.company}</p>
                  </div>
                  <span className="text-xs text-slate-500 bg-white/5 border border-white/8 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-center">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: job.color }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Competencies sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 border border-white/5 sticky top-24">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="font-display font-bold text-sm text-cyan-400 uppercase tracking-wide">
                  Core Competencies
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {competencies.map((c) => (
                  <span key={c} className="skill-badge text-slate-300 text-xs">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
