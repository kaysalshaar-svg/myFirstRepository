import { motion } from 'framer-motion'
import { fadeDown } from '@/theme'

interface TopBarProps {
  title?:     string
  showCrisis?: boolean
}

export default function TopBar({ title = 'مسار الهدوء', showCrisis = true }: TopBarProps) {
  return (
    <motion.header
      variants={fadeDown}
      initial="hidden"
      animate="visible"
      className={[
        'fixed top-0 w-full z-50 h-16',
        'flex items-center justify-between',
        'px-6',
        'bg-surface/95 backdrop-blur-md',
        'shadow-soft',
      ].join(' ')}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined icon-filled text-primary text-2xl">spa</span>
        <span className="font-headline text-xl font-bold text-primary">{title}</span>
      </div>

      {/* Crisis button */}
      {showCrisis && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={[
            'flex items-center gap-2 px-4 py-2 rounded-full',
            'bg-error text-on-error',
            'font-body text-sm font-medium',
            'shadow-soft transition-opacity hover:opacity-90',
          ].join(' ')}
          aria-label="دعم الطوارئ"
        >
          <span className="material-symbols-outlined text-[18px]">emergency</span>
          دعم الطوارئ
        </motion.button>
      )}
    </motion.header>
  )
}
