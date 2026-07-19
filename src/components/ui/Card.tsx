import { motion } from 'framer-motion'
import { cardHover } from '@/theme'
import type { ReactNode } from 'react'

interface CardProps {
  children:   ReactNode
  className?: string
  hoverable?: boolean
  padding?:   'none' | 'sm' | 'md' | 'lg'
  onClick?:   () => void
}

const paddingClasses = { none: '', sm: 'p-4', md: 'p-5', lg: 'p-6' }

export default function Card({
  children, className = '', hoverable = false, padding = 'md', onClick,
}: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      variants={hoverable ? cardHover : undefined}
      initial={hoverable ? 'rest' : undefined}
      whileHover={hoverable ? 'hover' : undefined}
      className={[
        'bg-surface rounded-xl shadow-soft border border-outline-variant/20',
        paddingClasses[padding],
        hoverable ? 'cursor-pointer' : '',
        className,
      ].join(' ')}
    >
      {children}
    </motion.div>
  )
}
