import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: 'AI Content Pro - AI Content Marketing Expert',
  description: 'Professional AI-driven content marketing specialist creating impactful digital strategies.',
  keywords: ['AI Content Marketing', 'Content Strategy', 'AI Tools', 'Digital Marketing', 'Content Creation'],
  authors: [{ name: 'AI Content Pro' }],
  creator: 'AI Content Pro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'AI Content Pro - Content Marketing Expert',
    description: 'Showcasing AI-driven content marketing projects and professional expertise',
    siteName: 'AI Content Pro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Content Pro - Content Marketing Expert',
    description: 'Showcasing AI-driven content marketing projects and professional expertise',
    creator: '@yourhandle',
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
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <footer className="bg-bg-light-secondary dark:bg-bg-dark-secondary py-8 mt-16">
          <div className="container-custom">
            <div className="text-center text-text-light-secondary dark:text-text-dark-secondary">
              <p>&copy; 2024 AI Content Pro. All rights reserved.</p>
              <p className="mt-2 text-sm">
                Built with Next.js and AI tools ❤️
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 