import { motion } from 'framer-motion'
import { buttonPress } from '@/theme'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?:  Variant
  size?:     Size
  fullWidth?: boolean
  icon?:     ReactNode
  iconEnd?:  ReactNode
  onClick?:  () => void
  type?:     'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  ariaLabel?: string
}

const variantClasses: Record<Variant, string> = {
  primary:   'bg-primary text-on-primary hover:opacity-90',
  secondary: 'bg-secondary-fixed text-on-secondary-container hover:opacity-90',
  ghost:     'bg-transparent text-primary hover:bg-primary-fixed/30',
  danger:    'bg-error text-on-error hover:opacity-90',
  outline:   'bg-transparent border border-outline-variant text-on-surface hover:bg-surface-container',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-5 py-3 text-sm rounded-xl',
  lg: 'px-6 py-4 text-base rounded-xl',
}

export default function Button({
  children, variant = 'primary', size = 'md',
  fullWidth, icon, iconEnd, onClick, type = 'button',
  disabled, className = '', ariaLabel,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      variants={buttonPress}
      initial="rest"
      whileTap="tap"
      className={[
        'inline-flex items-center justify-center gap-2 font-body font-medium',
        'transition-all duration-200 select-none cursor-pointer',
        'disabled:opacity-50 disabled:pointer-events-none',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        className,
      ].join(' ')}
    >
      {icon && <span className="text-[18px] leading-none">{icon}</span>}
      {children}
      {iconEnd && <span className="text-[18px] leading-none">{iconEnd}</span>}
    </motion.button>
  )
}
