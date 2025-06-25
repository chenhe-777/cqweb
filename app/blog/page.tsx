import { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog & Insights - Alex Chen',
  description: 'Sharing knowledge about web development, AI, digital marketing, and technology trends.',
  keywords: 'blog, web development, AI, digital marketing, programming, tutorials',
}

export default function BlogPage() {
  return <BlogClient />
} 