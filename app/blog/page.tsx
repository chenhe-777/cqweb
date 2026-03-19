import { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: '博客与洞察 - 陈琦',
  description: '分享关于内容运营、AI应用、数字营销和技术趋势的知识。',
  keywords: '博客, 内容运营, AI, 数字营销, 编程, 教程',
}

export default function BlogPage() {
  return <BlogClient />
} 