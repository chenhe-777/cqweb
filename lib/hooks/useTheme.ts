'use client'

import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check localStorage first
    const storedTheme = localStorage.getItem('theme') as Theme | null
    
    if (storedTheme) {
      setTheme(storedTheme)
      applyTheme(storedTheme)
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const systemTheme: Theme = systemPrefersDark ? 'dark' : 'light'
      setTheme(systemTheme)
      applyTheme(systemTheme)
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't manually set a preference
      const hasUserPreference = localStorage.getItem('theme')
      if (!hasUserPreference) {
        const newTheme: Theme = e.matches ? 'dark' : 'light'
        setTheme(newTheme)
        applyTheme(newTheme)
      }
    }

    // Add event listener for system theme changes
    mediaQuery.addEventListener('change', handleSystemThemeChange)

    // Cleanup function
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    
    if (newTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const setThemeMode = (newTheme: Theme) => {
    setTheme(newTheme)
    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const resetToSystemTheme = () => {
    localStorage.removeItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const systemTheme: Theme = systemPrefersDark ? 'dark' : 'light'
    setTheme(systemTheme)
    applyTheme(systemTheme)
  }

  const isSystemTheme = () => {
    return !localStorage.getItem('theme')
  }

  return {
    theme,
    toggleTheme,
    setTheme: setThemeMode,
    resetToSystemTheme,
    isSystemTheme,
    mounted
  }
} 