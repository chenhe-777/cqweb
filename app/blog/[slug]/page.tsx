import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog'
import BlogDetailClient from './BlogDetailClient'

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(post => post.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author.name],
      tags: post.tags,
    }
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = blogPosts.find(post => post.slug === slug)

  if (!post) {
    notFound()
  }

  return <BlogDetailClient post={post} />
} 