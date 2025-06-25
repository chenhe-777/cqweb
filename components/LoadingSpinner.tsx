'use client'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'secondary' | 'light' | 'dark'
  text?: string
  fullScreen?: boolean
}

export default function LoadingSpinner({ 
  size = 'md', 
  variant = 'primary', 
  text,
  fullScreen = false 
}: LoadingSpinnerProps) {
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const variantClasses = {
    primary: 'border-blue-500 border-t-transparent',
    secondary: 'border-gray-400 border-t-transparent',
    light: 'border-white border-t-transparent',
    dark: 'border-gray-800 border-t-transparent'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  const spinner = (
    <div className="flex flex-col items-center gap-3">
      {/* 主旋转器 */}
      <div className={`
        animate-spin rounded-full border-2
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
      `} />
      
      {/* 文本 */}
      {text && (
        <p className={`
          text-gray-600 dark:text-gray-400 font-medium animate-pulse
          ${textSizeClasses[size]}
        `}>
          {text}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
        {spinner}
      </div>
    )
  }

  return spinner
}

// 加载骨架屏组件
export function LoadingSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`} />
  )
}

// 页面加载组件
export function PageLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner size="lg" text={text} />
    </div>
  )
}

// 按钮加载状态
export function ButtonSpinner() {
  return (
    <LoadingSpinner size="sm" variant="light" />
  )
} 