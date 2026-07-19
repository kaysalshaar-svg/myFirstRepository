import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?:      string
  icon?:       string  // material symbol name
  error?:      string
  className?:  string
}

export default function Input({ label, icon, error, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="font-body text-sm font-medium text-on-surface-variant">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
            {icon}
          </span>
        )}
        <input
          {...props}
          className={[
            'w-full h-14 rounded-xl font-body text-base text-on-surface',
            'bg-surface-container-lowest border border-outline-variant/40',
            'placeholder:text-on-surface-variant/50',
            'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50',
            'transition-all duration-200 shadow-soft',
            icon ? 'pr-12 pl-4' : 'px-4',
            error ? 'border-error/60 focus:ring-error/20' : '',
            className,
          ].join(' ')}
        />
      </div>
      {error && (
        <p className="font-body text-xs text-error">{error}</p>
      )}
    </div>
  )
}
