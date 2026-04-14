import { createFileRoute } from '@tanstack/react-router'
import { ANNOUNCEMENTS } from './index'

export const Route = createFileRoute('/announcements')({
  component: Announcements,
})

function Announcements() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Community Announcements</h1>
      <p className="text-gray-500 mb-8">Stay up to date with the latest news from D'Cendana.</p>
      <div className="grid gap-5 grid-cols-1">
        {ANNOUNCEMENTS.map((a) => (
          <div key={a.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition duration-300 transform hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100 cursor-pointer">
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-100 px-2 py-1 rounded">
              {a.badge}
            </span>
            <h2 className="font-bold text-lg mt-3 mb-1">{a.title}</h2>
            <p className="text-xs text-gray-400 mb-3">{a.date}</p>
            <p className="text-gray-600 whitespace-pre-line">{a.body}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
