'use client'

import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import LoadingSpinner from './LoadingSpinner'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    className = '',
    disabled,
    ...props
  }, ref) => {
    const baseClasses = [
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'font-medium',
      'rounded-lg',
      'transition-all',
      'duration-200',
      'ease-in-out',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'transform',
      'active:scale-95', // 点击时轻微缩放
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'disabled:transform-none'
    ]

    // 变体样式
    const variantClasses = {
      primary: [
        'bg-primary-600',
        'text-white',
        'border',
        'border-primary-600',
        'hover:bg-primary-700',
        'hover:border-primary-700',
        'hover:shadow-lg',
        'hover:scale-105', // 悬停时放大
        'focus:ring-primary-500',
        'dark:bg-primary-500',
        'dark:border-primary-500',
        'dark:hover:bg-primary-600',
        'dark:hover:border-primary-600'
      ],
      secondary: [
        'bg-bg-light-secondary',
        'text-text-light-primary',
        'border',
        'border-border-light',
        'hover:bg-bg-light-tertiary',
        'hover:border-border-light-secondary',
        'hover:shadow-md',
        'hover:scale-105',
        'focus:ring-primary-300',
        'dark:bg-bg-dark-secondary',
        'dark:text-text-dark-primary',
        'dark:border-border-dark',
        'dark:hover:bg-bg-dark-tertiary',
        'dark:hover:border-border-dark-secondary'
      ],
      outline: [
        'bg-transparent',
        'text-primary-600',
        'border',
        'border-primary-600',
        'hover:bg-primary-50',
        'hover:shadow-md',
        'hover:scale-105',
        'focus:ring-primary-300',
        'dark:text-primary-400',
        'dark:border-primary-400',
        'dark:hover:bg-primary-900/20'
      ],
      ghost: [
        'bg-transparent',
        'text-text-light-primary',
        'border',
        'border-transparent',
        'hover:bg-bg-light-secondary',
        'hover:shadow-sm',
        'hover:scale-105',
        'focus:ring-primary-300',
        'dark:text-text-dark-primary',
        'dark:hover:bg-bg-dark-secondary'
      ]
    }

    // 尺寸样式
    const sizeClasses = {
      sm: ['px-3', 'py-1.5', 'text-sm', 'gap-1.5'],
      md: ['px-4', 'py-2', 'text-base', 'gap-2'],
      lg: ['px-6', 'py-3', 'text-lg', 'gap-2.5']
    }

    const classes = [
      ...baseClasses,
      ...variantClasses[variant],
      ...sizeClasses[size],
      fullWidth ? 'w-full' : '',
      className
    ].filter(Boolean).join(' ')

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* 加载状态显示 */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner size="sm" variant={variant === 'primary' ? 'light' : 'primary'} />
          </div>
        )}
        
        {/* 内容容器 */}
        <div className={`flex items-center gap-inherit ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
          {leftIcon && (
            <span className="flex-shrink-0">
              {leftIcon}
            </span>
          )}
          
          {children && (
            <span>{children}</span>
          )}
          
          {rightIcon && (
            <span className="flex-shrink-0">
              {rightIcon}
            </span>
          )}
        </div>
        
        {/* 涟漪效果 */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-200 hover:opacity-10" />
        </div>
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps } 