import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const NAV_LINKS = [
  { to: '/announcements', label: 'Announcements' },
  { to: '/organization', label: 'Organization Chart' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-red-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
         <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight hover:text-yellow-200 transition">
          <img src="/favicon.ico" alt="logo" className="w-10 h-10 transition transform hover:scale-110" />
          <span>D'Cendana Chinese Community</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-yellow-200 transition"
              activeProps={{ className: 'text-yellow-300 underline underline-offset-4' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-yellow-800 transition"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-yellow-800 px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-yellow-200 transition py-1"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
