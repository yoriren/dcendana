import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

type Status = 'idle' | 'submitting' | 'success' | 'error'

function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as any).toString(),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
      <p className="text-gray-500 mb-10">
        Have a question, suggestion, or want to get involved? Reach out to the D'Cendana Chinese Neighbourhood Association.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact info */}
        <div>
          <h2 className="text-xl font-semibold mb-5">Contact Information</h2>
          <div className="space-y-5">
            {[
              { icon: '📍', label: 'Address', value: "D'Cendana, Bandar Tasik Kesuma, 43500 Semenyih, Selangor." },
              { icon: '📞', label: 'Phone', value: '014-8000301' },
              { icon: '✉️', label: 'Email', value: 'dcendana@netlify.app' },
              { icon: '🕐', label: 'Office Hours', value: 'Mon to Fri, 9 AM – 6 PM' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="font-medium text-sm">{label}</p>
                  <p className="text-gray-600 text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold text-blue-800 mb-2">Want to Volunteer?</h3>
            <p className="text-sm text-blue-700">
              We're always looking for neighbours to help with events, the community garden, and the welcome committee.
              Mention your interests in the message below!
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
              <p className="text-gray-500">Thanks for reaching out. We'll get back to you soon.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-blue-700 hover:underline text-sm font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="street">
                  Street / Block (optional)
                </label>
                <input
                  id="street"
                  name="street"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="e.g. 68, Jln Kesuma 8/2K, Bandar Tasik Kesuma"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="subject">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                >
                  <option value="">Select a topic…</option>
                  <option>General Question</option>
                  <option>Event Suggestion</option>
                  <option>Safety or Maintenance Issue</option>
                  <option>Volunteering</option>
                  <option>HOA Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  placeholder="How can we help?"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
