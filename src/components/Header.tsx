import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const NAV_LINKS = [
  { to: '/announcements', label: 'Announcements' },
  { to: '/events', label: 'Events' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-green-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <Link to="/" className="font-bold text-lg tracking-tight hover:text-green-200 transition">
          🍁 Maplewood Heights
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-green-200 transition"
              activeProps={{ className: 'text-green-300 underline underline-offset-4' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-green-800 transition"
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
        <nav className="md:hidden bg-green-800 px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-green-200 transition py-1"
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
