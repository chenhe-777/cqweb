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
  keywords: ['AI内容营销', '内容策略', 'AI工具', '数字营销', '内容创作'],
  authors: [{ name: 'AI内容专家' }],
  creator: 'AI内容专家',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://your-domain.com',
    title: 'AI内容专家 - 内容营销专家',
    description: '展示AI驱动的内容营销项目和专业技能',
    siteName: 'AI内容专家',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI内容专家 - 内容营销专家',
    description: '展示AI驱动的内容营销项目和专业技能',
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
              <p>&copy; 2024 AI内容专家. 保留所有权利.</p>
              <p className="mt-2 text-sm">
                使用 Next.js 和 AI 工具精心制作 ❤️
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 