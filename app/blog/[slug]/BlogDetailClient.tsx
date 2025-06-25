'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BlogPost } from '@/data/blog'

interface BlogDetailClientProps {
  post: BlogPost
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const copyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Sample article content for demonstration
  const sampleCodeBlocks = [
    {
      id: 'code1',
      language: 'typescript',
      title: 'Next.js 14 App Router Configuration',
      code: `// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client']
  },
  images: {
    domains: ['example.com'],
    formats: ['image/webp', 'image/avif']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}

module.exports = nextConfig`
    },
    {
      id: 'code2',
      language: 'tsx',
      title: 'Server Component with Streaming',
      code: `import { Suspense } from 'react'
import { BlogPost } from '@/types/blog'

async function BlogContent({ id }: { id: string }) {
  // Simulate slow data fetching
  const post = await fetchBlogPost(id)
  
  return (
    <article className="prose prose-lg max-w-none">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}

export default function BlogPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<BlogSkeleton />}>
        <BlogContent id={params.id} />
      </Suspense>
    </div>
  )
}`
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-bg-dark">
      {/* Enhanced Navigation */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200 group bg-gray-50 hover:bg-blue-50 px-4 py-2 rounded-lg"
              >
                <svg 
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-medium text-sm">Back to Blog</span>
              </Link>
              
              {/* Breadcrumb */}
              <div className="hidden md:flex items-center text-sm text-gray-500">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium truncate max-w-xs">{post.title}</span>
              </div>
            </div>
            
            {/* Category Badge */}
            <div className="hidden sm:block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-12">
            {/* Meta Information */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <time>{formatDate(post.publishDate)}</time>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>{post.views.toLocaleString()} views</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{post.comments} comments</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 to-gray-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-8xl mb-6">
                    {post.category === 'Frontend Development' && '⚛️'}
                    {post.category === 'Backend Development' && '🔧'}
                    {post.category === 'AI & Machine Learning' && '🤖'}
                    {post.category === 'Content Marketing' && '📝'}
                    {post.category === 'Digital Strategy' && '📊'}
                    {post.category === 'Case Studies' && '📈'}
                    {post.category === 'Tutorials' && '🎓'}
                  </div>
                  <div className="text-xl font-mono opacity-80 mb-2">
                    {post.category.toLowerCase().replace(/\s+/g, '_')}.md
                  </div>
                  <div className="text-sm opacity-60">
                    Featured article illustration
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {/* Introduction */}
            <div className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {post.description}
            </div>

            {/* Sample Content */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              1. Getting Started with Advanced Optimization
            </h2>
            
            <p className="mb-6">
              In this comprehensive guide, we'll explore the latest techniques for optimizing modern web applications. 
              Whether you're working with React, Vue, or vanilla JavaScript, these principles will help you build 
              faster, more efficient applications.
            </p>

            {/* Code Block Example */}
            <div className="my-8">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-700 border-b border-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-300 text-sm font-mono">{sampleCodeBlocks[0].title}</span>
                  </div>
                  <button
                    onClick={() => copyCode(sampleCodeBlocks[0].code, sampleCodeBlocks[0].id)}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-gray-300 text-xs transition-colors duration-200"
                  >
                    {copiedCode === sampleCodeBlocks[0].id ? (
                      <>
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-gray-100 font-mono text-sm leading-relaxed">
                    {sampleCodeBlocks[0].code}
                  </code>
                </pre>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              2. Advanced Server Components
            </h2>
            
            <p className="mb-6">
              Server Components represent a paradigm shift in how we think about React applications. They allow us to 
              render components on the server, reducing bundle size and improving performance.
            </p>

            {/* Second Code Block */}
            <div className="my-8">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-700 border-b border-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-300 text-sm font-mono">{sampleCodeBlocks[1].title}</span>
                  </div>
                  <button
                    onClick={() => copyCode(sampleCodeBlocks[1].code, sampleCodeBlocks[1].id)}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-gray-300 text-xs transition-colors duration-200"
                  >
                    {copiedCode === sampleCodeBlocks[1].id ? (
                      <>
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-gray-100 font-mono text-sm leading-relaxed">
                    {sampleCodeBlocks[1].code}
                  </code>
                </pre>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              3. Performance Optimization Strategies
            </h2>
            
            <p className="mb-6">
              Performance optimization is crucial for providing excellent user experiences. Here are some key strategies:
            </p>

            <ul className="space-y-2 mb-6">
              <li>• <strong>Code Splitting:</strong> Break your application into smaller chunks</li>
              <li>• <strong>Lazy Loading:</strong> Load components and resources on demand</li>
              <li>• <strong>Image Optimization:</strong> Use modern formats like WebP and AVIF</li>
              <li>• <strong>Caching Strategies:</strong> Implement proper caching at multiple levels</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              4. Conclusion and Next Steps
            </h2>
            
            <p className="mb-6">
              By implementing these optimization techniques, you can significantly improve your application's performance. 
              Remember to measure the impact of each optimization and focus on the areas that provide the most benefit 
              for your specific use case.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Pro Tip:</strong> Always test your optimizations in a production-like environment to ensure they provide real benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  {post.author.name.charAt(0)}
                </div>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{post.author.name}</p>
                <p className="text-gray-600 dark:text-gray-400">Content Creator & Developer</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  )
}