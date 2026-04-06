import { createFileRoute } from '@tanstack/react-router'
import { ANNOUNCEMENTS } from './index'

export const Route = createFileRoute('/announcements')({
  component: Announcements,
})

function Announcements() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Community Announcements</h1>
      <p className="text-gray-500 mb-8">Stay up to date with the latest news from Maplewood Heights.</p>
      <div className="grid gap-5 md:grid-cols-2">
        {ANNOUNCEMENTS.map((a) => (
          <div key={a.id} className="bg-white rounded-xl border p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-green-700 bg-green-100 px-2 py-1 rounded">
              {a.badge}
            </span>
            <h2 className="font-bold text-lg mt-3 mb-1">{a.title}</h2>
            <p className="text-xs text-gray-400 mb-3">{a.date}</p>
            <p className="text-gray-600">{a.body}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
