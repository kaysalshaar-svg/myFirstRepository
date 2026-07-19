import type { ReactNode } from 'react'

interface SectionTitleProps {
  title:       string
  subtitle?:   string
  action?:     ReactNode
  className?:  string
}

export default function SectionTitle({ title, subtitle, action, className = '' }: SectionTitleProps) {
  return (
    <div className={['flex items-end justify-between gap-4 mb-4', className].join(' ')}>
      <div>
        <h2 className="font-headline text-xl font-semibold text-on-surface">{title}</h2>
        {subtitle && (
          <p className="font-body text-sm text-on-surface-variant mt-1">{subtitle}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
