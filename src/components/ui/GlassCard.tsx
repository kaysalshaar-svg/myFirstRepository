import { motion } from 'framer-motion'
import { cardHover } from '@/theme'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children:   ReactNode
  className?: string
  hoverable?: boolean
  padding?:   'none' | 'sm' | 'md' | 'lg'
  onClick?:   () => void
}

const paddingClasses = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
}

export default function GlassCard({
  children, className = '', hoverable = false, padding = 'md', onClick,
}: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      variants={hoverable ? cardHover : undefined}
      initial={hoverable ? 'rest' : undefined}
      whileHover={hoverable ? 'hover' : undefined}
      className={[
        'glass rounded-xl',
        paddingClasses[padding],
        hoverable ? 'cursor-pointer' : '',
        className,
      ].join(' ')}
    >
      {children}
    </motion.div>
  )
}
