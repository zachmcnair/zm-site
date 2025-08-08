'use client'

import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Image
        src="/zm-logo.svg"
        alt="Zach McNair Logo"
        width={32}
        height={32}
        className="w-full h-full transition-colors duration-200"
        style={{ filter: 'var(--logo-filter)' }}
      />
    </div>
  )
} 