'use client'

import { useEffect, useState } from 'react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  // Don't render until mounted
  if (!mounted) {
    return (
      <div className={`${sizeClasses[size]} ${className} bg-gray-200 dark:bg-gray-700 rounded animate-pulse`} />
    )
  }

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      className={`${sizeClasses[size]} ${className} transition-colors duration-200`}
      style={{ color: 'currentColor' }}
    >
      <path 
        fill="currentColor"
        d="M7 4h10v2.5l-6.5 7.5H17V16H7v-2.5l6.5-7.5H7V4z"
      />
    </svg>
  )
} 