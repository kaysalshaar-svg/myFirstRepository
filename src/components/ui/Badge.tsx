import type { ReactNode } from 'react'

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'error' | 'neutral'

interface BadgeProps {
  children:   ReactNode
  variant?:   BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  primary:   'bg-primary-fixed text-on-primary-fixed',
  secondary: 'bg-secondary-container text-on-secondary-container',
  success:   'bg-primary-fixed text-on-primary-fixed',
  error:     'bg-error-container text-on-error-container',
  neutral:   'bg-surface-container text-on-surface-variant',
}

export default function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  return (
    <span className={[
      'inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium font-body',
      variantClasses[variant],
      className,
    ].join(' ')}>
      {children}
    </span>
  )
}
