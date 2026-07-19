import { motion } from 'framer-motion'

interface MoodButtonProps {
  icon:     string  // material symbol or emoji
  label:    string
  active?:  boolean
  onClick?: () => void
  useEmoji?: boolean
}

export default function MoodButton({ icon, label, active = false, onClick, useEmoji = false }: MoodButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.90 }}
      className="flex flex-col items-center gap-2 group transition-transform"
      aria-label={label}
    >
      <div className={[
        'w-14 h-14 rounded-2xl flex items-center justify-center transition-colors shadow-soft',
        active
          ? 'bg-primary-container text-on-primary-container'
          : 'bg-surface-container-high text-primary group-hover:bg-primary-container group-hover:text-on-primary-container',
      ].join(' ')}>
        {useEmoji
          ? <span className="text-2xl">{icon}</span>
          : <span className="material-symbols-outlined text-3xl">{icon}</span>
        }
      </div>
      <span className={[
        'font-body text-xs transition-colors',
        active ? 'text-primary font-medium' : 'text-on-surface-variant group-hover:text-primary',
      ].join(' ')}>
        {label}
      </span>
    </motion.button>
  )
}
