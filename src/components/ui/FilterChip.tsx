import { motion } from 'framer-motion'

interface FilterChipProps {
  label:     string
  active?:   boolean
  onClick?:  () => void
}

export default function FilterChip({ label, active = false, onClick }: FilterChipProps) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={[
        'whitespace-nowrap px-5 py-2 rounded-full font-body text-sm font-medium',
        'transition-colors duration-200 cursor-pointer select-none',
        active
          ? 'bg-primary text-on-primary shadow-soft'
          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high',
      ].join(' ')}
    >
      {label}
    </motion.button>
  )
}
