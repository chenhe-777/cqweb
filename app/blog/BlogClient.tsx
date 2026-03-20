'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { blogPosts, blogCategories } from '@/data/blog'
import LoadingSpinner, { LoadingSkeleton } from '@/components/LoadingSpinner'

const POSTS_PER_PAGE = 6

export default function BlogClient() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全部文章')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts

    // Filter by category
    if (selectedCategory !== '全部文章') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [searchQuery, selectedCategory])

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [filteredPosts, currentPage])

  // Reset page when filters change
  const handleCategoryChange = useCallback((category: string) => {
    setIsTransitioning(true)
    setSelectedCategory(category)
    setCurrentPage(1)
    setTimeout(() => setIsTransitioning(false), 300)
  }, [])

  const handleSearchChange = useCallback((query: string) => {
    setIsTransitioning(true)
    setSearchQuery(query)
    setCurrentPage(1)
    setTimeout(() => setIsTransitioning(false), 300)
  }, [])

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  const clearSearch = () => {
    setSearchQuery('')
    setCurrentPage(1)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-bg-dark pt-20">
        {/* Header Section */}
        <section className="py-16 bg-white dark:bg-bg-dark">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                我的博客
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                记录 AI 工具在真实场景中的使用实践，只分享亲测有效的案例，不做硬核技术分析。
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                持续更新中 · 目前共 5 篇
              </p>
            </div>
          </div>
        </section>

        {/* Loading State */}
        <section className="py-8 bg-gray-50 dark:bg-gray-900/50">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="flex-1">
                <LoadingSkeleton className="w-full h-12" />
              </div>
              <div className="flex gap-3">
                {[...Array(4)].map((_, i) => (
                  <LoadingSkeleton key={i} className="w-24 h-10" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom">
            <div className="space-y-8">
              {[...Array(3)].map((_, index) => (
                <article key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 lg:w-2/5">
                      <LoadingSkeleton className="h-64 md:h-full min-h-[250px]" />
                    </div>
                    <div className="md:w-2/3 lg:w-3/5 p-6 md:p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <LoadingSkeleton className="w-20 h-6" />
                        <LoadingSkeleton className="w-24 h-4" />
                      </div>
                      <LoadingSkeleton className="w-full h-8 mb-3" />
                      <LoadingSkeleton className="w-full h-4 mb-2" />
                      <LoadingSkeleton className="w-3/4 h-4 mb-4" />
                      <div className="flex gap-2 mb-4">
                        <LoadingSkeleton className="w-16 h-6" />
                        <LoadingSkeleton className="w-20 h-6" />
                        <LoadingSkeleton className="w-12 h-6" />
                      </div>
                      <div className="flex justify-between pt-4">
                        <div className="flex gap-4">
                          <LoadingSkeleton className="w-20 h-4" />
                          <LoadingSkeleton className="w-24 h-4" />
                          <LoadingSkeleton className="w-20 h-4" />
                        </div>
                        <LoadingSkeleton className="w-20 h-4" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-bg-dark pt-20">
      {/* Header Section */}
      <section className="py-16 bg-white dark:bg-bg-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              我的博客
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              记录 AI 工具在真实场景中的使用实践，只分享亲测有效的案例，不做硬核技术分析。
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              持续更新中 · 目前共 5 篇
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12">
        <div className="container-custom">
          {isTransitioning ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="lg" text="加载中..." />
            </div>
          ) : paginatedPosts.length > 0 ? (
            <div className="space-y-8">
              {paginatedPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:-translate-y-1 opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Article Image */}
                    <div className="md:w-1/3 lg:w-2/5">
                      <div className="relative h-64 md:h-full min-h-[250px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <div className="text-center text-white p-6">
                            <div className="text-6xl mb-4">
                              {post.category === 'AI做图' && '🎨'}
                              {post.category === 'AI学习工具' && '📝'}
                              {post.category === 'AI工具对比' && '📊'}
                              {post.category === 'AI工具实战' && '🚀'}
                              {post.category === '效率工具' && '⚡'}
                            </div>
                            <div className="text-sm font-mono opacity-80">
                              {post.category.toLowerCase().replace(/\s+/g, '_')}.md
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="md:w-2/3 lg:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        {/* Category and Date */}
                        <div className="flex items-center gap-4 mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                            {post.category}
                          </span>
                          <time className="text-sm text-gray-500 dark:text-gray-400">
                            {formatDate(post.publishDate)}
                          </time>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          <Link href={post.link || `/blog/${post.slug}`} className="hover:underline" target={post.link ? '_blank' : undefined}>
                            {post.title}
                          </Link>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                          {post.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                              +{post.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{post.readTime} 分钟阅读</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>{post.views.toLocaleString()} 次浏览</span>
                          </div>
                        </div>

                        <Link
                          href={post.link || `/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200"
                          target={post.link ? '_blank' : undefined}
                        >
                          查看详情
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 animate-bounce">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">没有找到文章</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                请尝试调整搜索条件或浏览不同分类。
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('全部文章')
                  setCurrentPage(1)
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 transform hover:scale-105"
              >
                清除所有筛选
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-bg-dark-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              还有更多内容正在路上，欢迎关注我的公众号「橘师傅的AI手记」获取最新更新。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-800 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                联系我
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
