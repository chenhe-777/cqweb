'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  placeholder?: 'blur' | 'skeleton' | 'gradient'
  priority?: boolean
  sizes?: string
  fallbackSrc?: string
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  placeholder = 'skeleton',
  priority = false,
  sizes,
  fallbackSrc = '/images/placeholder.jpg'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  const renderPlaceholder = () => {
    switch (placeholder) {
      case 'blur':
        return (
          <div className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}>
            <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
          </div>
        )
      
      case 'gradient':
        return (
          <div className={`bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center ${className}`}>
            <div className="text-4xl opacity-30">🖼️</div>
          </div>
        )
      
      default: // skeleton
        return (
          <div className={`bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center ${className}`}>
            <div className="text-gray-400 dark:text-gray-600">
              <svg 
                className="w-8 h-8" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8zm2 2v4h4v-4h-4z"/>
              </svg>
            </div>
          </div>
        )
    }
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder - 显示直到图片加载 */}
      {!isLoaded && renderPlaceholder()}
      
      {/* 实际图片 - 只有在视图中时才加载 */}
      {isInView && (
        <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {width && height ? (
            <Image
              src={hasError ? fallbackSrc : src}
              alt={alt}
              width={width}
              height={height}
              sizes={sizes}
              priority={priority}
              className={`object-cover ${className}`}
              onLoad={handleLoad}
              onError={handleError}
              quality={85}
            />
          ) : (
            <Image
              src={hasError ? fallbackSrc : src}
              alt={alt}
              fill
              sizes={sizes || '100vw'}
              priority={priority}
              className={`object-cover ${className}`}
              onLoad={handleLoad}
              onError={handleError}
              quality={85}
            />
          )}
        </div>
      )}
      
      {/* 加载指示器 */}
      {isInView && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
        </div>
      )}
    </div>
  )
} 