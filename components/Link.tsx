'use client'

import React, { AnchorHTMLAttributes, forwardRef } from 'react'
import NextLink from 'next/link'

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  variant?: 'default' | 'button' | 'underline' | 'subtle'
  external?: boolean
  prefetch?: boolean
  children: React.ReactNode
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({
    href,
    children,
    variant = 'default',
    external = false,
    prefetch = true,
    className = '',
    ...props
  }, ref) => {
    const baseClasses = [
      'transition-all',
      'duration-200',
      'ease-in-out',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-primary-300',
      'focus:ring-offset-1',
      'rounded-sm'
    ]

    const variantClasses = {
      default: [
        'text-primary-600',
        'hover:text-primary-700',
        'dark:text-primary-400',
        'dark:hover:text-primary-300',
        'hover:underline',
        'underline-offset-2',
        'decoration-2',
        'decoration-primary-600/50',
        'hover:decoration-primary-600'
      ],
      button: [
        'inline-flex',
        'items-center',
        'px-4',
        'py-2',
        'bg-primary-600',
        'text-white',
        'rounded-lg',
        'font-medium',
        'transform',
        'hover:bg-primary-700',
        'hover:scale-105',
        'hover:shadow-lg',
        'active:scale-95',
        'dark:bg-primary-500',
        'dark:hover:bg-primary-600'
      ],
      underline: [
        'text-text-light-primary',
        'dark:text-text-dark-primary',
        'relative',
        'pb-1',
        'border-b-2',
        'border-transparent',
        'hover:border-primary-600',
        'dark:hover:border-primary-400',
        'transition-colors',
        'duration-200'
      ],
      subtle: [
        'text-text-light-secondary',
        'dark:text-text-dark-secondary',
        'hover:text-text-light-primary',
        'dark:hover:text-text-dark-primary',
        'hover:underline',
        'underline-offset-2'
      ]
    }

    const classes = [
      ...baseClasses,
      ...variantClasses[variant],
      className
    ].filter(Boolean).join(' ')

    // 外部链接
    if (external || href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a
          ref={ref}
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
          {/* 外部链接图标 */}
          {variant !== 'button' && (
            <span className="inline-block ml-1 w-3 h-3 opacity-70">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </a>
      )
    }

    // 内部链接
    return (
      <NextLink
        href={href}
        prefetch={prefetch}
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)

Link.displayName = 'Link'

export { Link }
export type { LinkProps } 