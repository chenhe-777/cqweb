import { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: '博客 - 陈琦',
  description: '记录 AI 工具在真实场景中的使用实践，只分享亲测有效的案例。',
  keywords: '博客, AI工具, AI做图, 提示词, AI应用, 效率工具',
}

export default function BlogPage() {
  return <BlogClient />
}
