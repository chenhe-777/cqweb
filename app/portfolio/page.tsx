import { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: '作品集 - AI内容运营专家',
  description: '探索我的AI驱动的内容营销项目、案例研究和创新解决方案，展示人工智能在现代营销中的强大力量。',
  keywords: ['AI内容营销', '作品集', '案例研究', '内容策略', '营销自动化'],
}

export default function PortfolioPage() {
  return <PortfolioClient />
} 