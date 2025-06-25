import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { portfolioItems } from '@/data/portfolio'
import ProjectDetailFactory from './components/ProjectDetailFactory'

interface PortfolioDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const item = portfolioItems.find(item => item.slug === slug)
  
  if (!item) {
    return {
      title: 'Project Not Found - AI Content Pro'
    }
  }

  return {
    title: `${item.title} - AI Content Pro`,
    description: item.description,
    keywords: item.tags,
  }
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }))
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = await params
  const item = portfolioItems.find(item => item.slug === slug)

  if (!item) {
    notFound()
  }

  return <ProjectDetailFactory item={item} />
} 