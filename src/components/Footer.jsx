export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <p className="text-slate-600 text-sm">
        <span className="gradient-text font-display font-bold">Larry Howard</span>
        <span className="mx-2 text-slate-700">·</span>
        Built with React + Vite
        <span className="mx-2 text-slate-700">·</span>
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
