'use client'

import React, { HTMLAttributes, forwardRef, ButtonHTMLAttributes } from 'react'

interface BaseCardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'interactive'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
}

interface DivCardProps extends BaseCardProps, Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  clickable?: false
  children: React.ReactNode
}

interface ButtonCardProps extends BaseCardProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  clickable: true
  children: React.ReactNode
}

type CardProps = DivCardProps | ButtonCardProps

const Card = forwardRef<HTMLDivElement | HTMLButtonElement, CardProps>(
  (props, ref) => {
    const {
      children,
      variant = 'default',
      padding = 'md',
      hoverable = false,
      clickable = false,
      className = '',
      ...restProps
    } = props

    const baseClasses = [
      'rounded-xl',
      'transition-all',
      'duration-300',
      'ease-in-out',
      'focus:outline-none'
    ]

    const variantClasses = {
      default: [
        'bg-white',
        'dark:bg-bg-dark-secondary',
        'border',
        'border-border-light',
        'dark:border-border-dark'
      ],
      elevated: [
        'bg-white',
        'dark:bg-bg-dark-secondary',
        'shadow-md',
        'hover:shadow-lg',
        'dark:shadow-black/20'
      ],
      outlined: [
        'bg-transparent',
        'border-2',
        'border-border-light',
        'dark:border-border-dark',
        'hover:border-primary-300',
        'dark:hover:border-primary-600'
      ],
      interactive: [
        'bg-white',
        'dark:bg-bg-dark-secondary',
        'border',
        'border-border-light',
        'dark:border-border-dark',
        'shadow-sm',
        'hover:shadow-xl',
        'hover:border-primary-300',
        'dark:hover:border-primary-600',
        'cursor-pointer',
        'transform',
        'hover:scale-105',
        'active:scale-95'
      ]
    }

    const paddingClasses = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    }

    // 悬停效果
    const hoverClasses = hoverable || clickable ? [
      'hover:shadow-lg',
      'hover:scale-102',
      'hover:border-primary-300',
      'dark:hover:border-primary-600'
    ] : []

    // 可点击效果
    const clickableClasses = clickable ? [
      'cursor-pointer',
      'active:scale-98',
      'focus:ring-2',
      'focus:ring-primary-300',
      'focus:ring-offset-2'
    ] : []

    const allClasses = [
      ...baseClasses,
      ...variantClasses[variant],
      paddingClasses[padding],
      ...hoverClasses,
      ...clickableClasses
    ]

    const classNames = [...allClasses, className].filter(Boolean).join(' ')

    if (clickable) {
      return (
        <button
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          className={classNames}
          {...(restProps as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {children}
          
          {/* 悬停时的光晕效果 */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none" />
        </button>
      )
    }

    return (
      <div
        ref={ref as React.ForwardedRef<HTMLDivElement>}
        className={classNames}
        {...(restProps as HTMLAttributes<HTMLDivElement>)}
      >
        {children}
        
        {/* 悬停时的光晕效果 */}
        {hoverable && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none" />
        )}
      </div>
    )
  }
)

Card.displayName = 'Card'

// 卡片标题组件
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`mb-4 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

// 卡片内容组件
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`text-text-light-secondary dark:text-text-dark-secondary ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

// 卡片底部组件
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`mt-4 pt-4 border-t border-border-light dark:border-border-dark ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardContent, CardFooter }
export type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } 