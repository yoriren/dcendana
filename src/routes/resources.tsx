import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resources')({
  component: Resources,
})

const RESOURCES = [
  {
    category: 'City Services',
    icon: '🏛️',
    items: [
      { label: 'Report a Pothole or Road Issue', href: '#', detail: 'City Public Works — 555-200-3000' },
      { label: 'Garbage & Recycling Info', href: '#', detail: 'Pickup every Tuesday' },
      { label: 'Noise Complaints', href: '#', detail: 'Non-emergency line: 555-200-4111' },
      { label: 'Building Permits', href: '#', detail: 'City Planning Dept — 555-200-5000' },
    ],
  },
  {
    category: 'Emergency Contacts',
    icon: '🚨',
    items: [
      { label: 'Emergency', href: '#', detail: '911' },
      { label: 'Police Non-Emergency', href: '#', detail: '555-100-1234' },
      { label: 'Fire Non-Emergency', href: '#', detail: '555-100-5678' },
      { label: 'Poison Control', href: '#', detail: '1-800-222-1222' },
    ],
  },
  {
    category: 'Community Spaces',
    icon: '🏡',
    items: [
      { label: 'Maplewood Community Center', href: '#', detail: '12 Oak Ave — Mon–Sat 8 AM–9 PM' },
      { label: 'Riverside Community Garden', href: '#', detail: 'Plot rentals available; contact the HOA' },
      { label: 'Maplewood Park', href: '#', detail: 'Open daily, sunrise to sunset' },
      { label: 'Maplewood Library', href: '#', detail: '45 Pine St — (555) 300-7890' },
    ],
  },
  {
    category: 'Schools & Education',
    icon: '🏫',
    items: [
      { label: 'Maplewood Elementary School', href: '#', detail: '(555) 400-1111' },
      { label: 'Riverside Middle School', href: '#', detail: '(555) 400-2222' },
      { label: 'Maplewood High School', href: '#', detail: '(555) 400-3333' },
      { label: 'District Website', href: '#', detail: 'School calendars, registration info' },
    ],
  },
  {
    category: 'Local Utilities',
    icon: '⚡',
    items: [
      { label: 'Electric & Gas — Outage Reporting', href: '#', detail: '1-800-555-0199' },
      { label: 'Water & Sewer', href: '#', detail: 'City Utilities — 555-200-6000' },
      { label: 'Internet Service (local provider)', href: '#', detail: 'MapleNet — 555-700-8000' },
    ],
  },
  {
    category: 'Neighborhood Association',
    icon: '🤝',
    items: [
      { label: 'HOA Dues & Portal', href: '#', detail: 'Pay dues and access documents online' },
      { label: 'Submit a Maintenance Request', href: '#', detail: 'For common area issues' },
      { label: 'HOA Meeting Minutes', href: '#', detail: 'Archive available on the portal' },
    ],
  },
]

function Resources() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Neighborhood Resources</h1>
      <p className="text-gray-500 mb-8">Quick access to local services, contacts, and community spaces.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {RESOURCES.map((section) => (
          <div key={section.category} className="bg-white rounded-xl border p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span>{section.icon}</span> {section.category}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item.label} className="border-b last:border-b-0 pb-3 last:pb-0">
                  <p className="font-medium text-sm">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
