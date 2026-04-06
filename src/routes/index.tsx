import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-green-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Maplewood Heights</h1>
        <p className="text-green-200 text-lg max-w-xl mx-auto mb-8">
          Your hub for neighborhood news, local events, and community resources.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/announcements" className="bg-white text-green-800 font-semibold px-6 py-3 rounded-lg hover:bg-green-100 transition">
            View Announcements
          </Link>
          <Link to="/events" className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Upcoming Events
          </Link>
        </div>
      </section>

      {/* Quick-link cards */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            to: '/announcements',
            icon: '📢',
            title: 'Announcements',
            desc: 'Stay informed with the latest neighborhood news and updates.',
          },
          {
            to: '/events',
            icon: '📅',
            title: 'Local Events',
            desc: 'Discover upcoming block parties, clean-ups, and community gatherings.',
          },
          {
            to: '/resources',
            icon: '📋',
            title: 'Resources',
            desc: 'Handy links for city services, local businesses, and emergency contacts.',
          },
          {
            to: '/contact',
            icon: '✉️',
            title: 'Get in Touch',
            desc: 'Connect with the neighborhood association or share feedback.',
          },
        ].map(({ to, icon, title, desc }) => (
          <Link
            key={to}
            to={to}
            className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md hover:border-green-300 transition group"
          >
            <div className="text-3xl mb-3">{icon}</div>
            <h2 className="font-bold text-lg mb-1 group-hover:text-green-700 transition">{title}</h2>
            <p className="text-gray-500 text-sm">{desc}</p>
          </Link>
        ))}
      </section>

      {/* Announcements preview */}
      <section className="bg-white border-y py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Latest Announcements</h2>
            <Link to="/announcements" className="text-green-700 hover:underline text-sm font-medium">
              View all →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {ANNOUNCEMENTS.slice(0, 3).map((a) => (
              <AnnouncementCard key={a.id} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Events preview */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <Link to="/events" className="text-green-700 hover:underline text-sm font-medium">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {EVENTS.slice(0, 3).map((e) => (
            <EventCard key={e.id} {...e} />
          ))}
        </div>
      </section>
    </main>
  )
}

function AnnouncementCard({ badge, title, date, body }: { badge: string; title: string; date: string; body: string }) {
  return (
    <div className="rounded-xl border p-5 bg-gray-50">
      <span className="text-xs font-semibold uppercase tracking-wide text-green-700 bg-green-100 px-2 py-1 rounded">
        {badge}
      </span>
      <h3 className="font-semibold mt-2 mb-1">{title}</h3>
      <p className="text-xs text-gray-400 mb-2">{date}</p>
      <p className="text-sm text-gray-600">{body}</p>
    </div>
  )
}

function EventCard({ title, date, time, location, description }: { title: string; date: string; time: string; location: string; description: string }) {
  return (
    <div className="rounded-xl border p-5 bg-white shadow-sm">
      <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">{date}</p>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-xs text-gray-400 mb-2">{time} · {location}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export const ANNOUNCEMENTS = [
  {
    id: 1,
    badge: 'Safety',
    title: 'Street Light Repairs on Oak Ave',
    date: 'April 2, 2026',
    body: 'The city will be repairing street lights along Oak Avenue between 1st and 5th Street starting April 7th. Expect minor traffic disruptions.',
  },
  {
    id: 2,
    badge: 'General',
    title: 'Spring Newsletter Now Available',
    date: 'March 28, 2026',
    body: 'Our spring edition is out! Read about upcoming projects, volunteer spotlights, and a letter from the HOA board.',
  },
  {
    id: 3,
    badge: 'Reminder',
    title: 'Trash Collection Schedule Change',
    date: 'March 20, 2026',
    body: 'Due to the upcoming holiday, trash pickup for the Elm Street corridor will shift to Thursday, April 10th.',
  },
  {
    id: 4,
    badge: 'Parks',
    title: 'Maplewood Park Playground Upgrade',
    date: 'March 15, 2026',
    body: 'Work on the new playground equipment at Maplewood Park begins April 14th. The park will remain open during construction.',
  },
  {
    id: 5,
    badge: 'Safety',
    title: 'New Crosswalk at Pine & 3rd',
    date: 'March 10, 2026',
    body: 'A marked crosswalk and pedestrian signal have been added at Pine Street and 3rd Avenue following resident petitions.',
  },
  {
    id: 6,
    badge: 'General',
    title: 'HOA Board Meeting – April 15',
    date: 'March 5, 2026',
    body: 'The quarterly HOA board meeting is scheduled for April 15th at 7 PM in the Community Center. All residents are welcome.',
  },
]

export const EVENTS = [
  {
    id: 1,
    title: 'Spring Block Party',
    date: 'April 19, 2026',
    time: '2:00 PM – 7:00 PM',
    location: 'Maplewood Park',
    description: 'Join neighbors for food, games, live music, and a community raffle. Bring a dish to share!',
  },
  {
    id: 2,
    title: 'Neighborhood Clean-Up Day',
    date: 'April 26, 2026',
    time: '9:00 AM – 12:00 PM',
    location: 'Meet at Community Center',
    description: 'Grab a pair of gloves and help keep our streets and parks beautiful. Supplies provided.',
  },
  {
    id: 3,
    title: 'Farmers Market Opening Day',
    date: 'May 3, 2026',
    time: '8:00 AM – 1:00 PM',
    location: 'Town Square',
    description: 'The seasonal farmers market returns! Fresh produce, baked goods, crafts, and more from local vendors.',
  },
  {
    id: 4,
    title: 'Children\'s Story Hour',
    date: 'May 10, 2026',
    time: '10:00 AM – 11:00 AM',
    location: 'Maplewood Library',
    description: 'A weekly storytime for kids ages 3–8. This week features nature-themed books.',
  },
  {
    id: 5,
    title: 'Community Garden Workshop',
    date: 'May 17, 2026',
    time: '11:00 AM – 1:00 PM',
    location: 'Riverside Community Garden',
    description: 'Learn composting basics and sustainable planting tips from local master gardeners.',
  },
  {
    id: 6,
    title: 'Movie Night in the Park',
    date: 'May 24, 2026',
    time: 'Dusk (~8:30 PM)',
    location: 'Maplewood Park Amphitheater',
    description: 'Bring blankets and chairs for an outdoor movie screening. Family-friendly film TBA.',
  },
]
