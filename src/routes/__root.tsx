import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: "D'Cendana Chinese Community" },
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

  <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <Header />

    <main className="flex-1">
      {children}
    </main>

    <footer className="bg-red-900 text-blue-100 py-8 mt-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="font-semibold text-lg">D'Cendana Chinese Community</p>
        <p className="text-yellow-300 text-sm mt-1">
          Connecting neighbours, building community.
        </p>
      </div>
    </footer>

    <Scripts />
  </body>
</html>
  )
}
