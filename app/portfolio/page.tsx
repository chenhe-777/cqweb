import { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio - AI Content Pro',
  description: 'Explore my AI-driven content marketing projects, case studies, and innovative solutions that showcase the power of artificial intelligence in modern marketing.',
  keywords: ['AI Content Marketing', 'Portfolio', 'Case Studies', 'Content Strategy', 'Marketing Automation'],
}

export default function PortfolioPage() {
  return <PortfolioClient />
} 