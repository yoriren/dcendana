import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Maplewood Heights Community' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        {children}
        <footer className="bg-green-900 text-green-100 py-8 mt-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="font-semibold text-lg">Maplewood Heights Community</p>
            <p className="text-green-300 text-sm mt-1">Connecting neighbors, building community.</p>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
