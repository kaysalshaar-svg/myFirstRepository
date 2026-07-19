interface ProgressRingProps {
  value:      number   // 0–100
  size?:      number   // px
  stroke?:    number
  label?:     string
  className?: string
}

export default function ProgressRing({
  value, size = 80, stroke = 8, label, className = '',
}: ProgressRingProps) {
  const radius      = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset      = circumference - (value / 100) * circumference

  return (
    <div className={['flex flex-col items-center gap-1', className].join(' ')}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="transparent"
            stroke="var(--surface-container-highest)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="transparent"
            stroke="var(--primary)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-headline text-primary font-semibold text-base">
          {value}%
        </span>
      </div>
      {label && (
        <span className="font-body text-xs text-on-surface-variant">{label}</span>
      )}
    </div>
  )
}
