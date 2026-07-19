interface MoodBarProps {
  label:     string
  value:     number   // 0–100
  color?:    'primary' | 'secondary' | 'container'
}

const colorClasses = {
  primary:   'bg-primary',
  secondary: 'bg-secondary',
  container: 'bg-primary-container',
}

export default function MoodBar({ label, value, color = 'primary' }: MoodBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center font-body text-sm">
        <span className="text-on-surface">{label}</span>
        <span className={[
          'font-bold',
          color === 'secondary' ? 'text-secondary' : 'text-primary',
        ].join(' ')}>
          {value}%
        </span>
      </div>
      <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
        <div
          className={['h-full rounded-full progress-smooth', colorClasses[color]].join(' ')}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
