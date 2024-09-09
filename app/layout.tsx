import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Portfolio - Jere Manni',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Portfolio - Jere Manni',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children, modal
}: {
  children: React.ReactNode,
  modal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className=' overflow-y-scroll'
    >
      <body className="max-w-3xl mx-auto">
          <main className="flex-auto min-w-0 flex flex-col px-4">
            <Navbar />
            {children}
            {modal}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
      </body>
    </html>
  )
}
