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
  title: '陈琦 - 内容运营专家',
  description: '8年内容运营经验，专注内容营销增长、用户运营、账号孵化',
  keywords: ['内容运营', '内容营销', '账号孵化', '小红书', '知乎', '直播运营'],
  authors: [{ name: '陈琦' }],
  creator: '陈琦',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://chenhe-777.github.io/cqweb',
    title: '陈琦 - 内容运营专家',
    description: '内容营销增长、用户运营、账号孵化实战经验分享',
    siteName: '陈琦的个人网站',
  },
  twitter: {
    card: 'summary_large_image',
    title: '陈琦 - 内容运营专家',
    description: '内容营销增长、用户运营、账号孵化实战经验分享',
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
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <footer className="bg-bg-light-secondary dark:bg-bg-dark-secondary py-8 mt-16">
          <div className="container-custom">
            <div className="text-center text-text-light-secondary dark:text-text-dark-secondary">
              <p>&copy; {new Date().getFullYear()} 陈琦. 保留所有权利.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
