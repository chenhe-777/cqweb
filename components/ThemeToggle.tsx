'use client'

import { useTheme } from '@/lib/hooks/useTheme'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme, resetToSystemTheme, isSystemTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
    )
  }

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    resetToSystemTheme()
  }

  return (
    <motion.button
      onClick={toggleTheme}
      onContextMenu={handleContextMenu}
      className={`
        relative w-10 h-10 rounded-full flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${theme === 'light' 
          ? 'bg-gray-100 hover:bg-gray-200 shadow-lg hover:shadow-xl' 
          : 'bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-xl dark:shadow-cyan-500/25'
        }
        ${theme === 'dark' ? 'dark:hover:shadow-cyan-500/40 dark:glow-border' : ''}
        ${isSystemTheme() ? 'ring-2 ring-blue-500/30' : ''}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode. ${isSystemTheme() ? 'Currently using system theme. ' : ''}Right-click to reset to system theme.`}
      title={`${isSystemTheme() ? 'Using system theme' : 'Using manual theme'} - Right-click to reset`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute"
          >
            <Moon 
              size={20} 
              className="text-gray-600 hover:text-gray-800 transition-colors" 
            />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute"
          >
            <Sun 
              size={20} 
              className="text-yellow-500 hover:text-yellow-400 transition-colors dark:glow-text" 
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Glow effect for dark mode */}
      {theme === 'dark' && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.button>
  )
} 