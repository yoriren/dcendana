import { createFileRoute } from '@tanstack/react-router'
import { EVENTS } from './index'

export const Route = createFileRoute('/events')({
  component: Events,
})

function Events() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Local Events</h1>
      <p className="text-gray-500 mb-8">Upcoming gatherings and activities in Maplewood Heights.</p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {EVENTS.map((e) => (
          <div key={e.id} className="bg-white rounded-xl border p-6 shadow-sm flex flex-col">
            <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-center mb-4">
              <p className="text-green-800 font-semibold text-sm">{e.date}</p>
              <p className="text-green-600 text-xs">{e.time}</p>
            </div>
            <h2 className="font-bold text-lg mb-1">{e.title}</h2>
            <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
              <span>📍</span> {e.location}
            </p>
            <p className="text-gray-600 text-sm flex-1">{e.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
