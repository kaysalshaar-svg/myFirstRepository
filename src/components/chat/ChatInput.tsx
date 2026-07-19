import { useState } from 'react'
import { motion } from 'framer-motion'

const quickReplies = [
  'أشعر بالقلق',
  'أحتاج للتنفيس',
  'تمرين العلاج السلوكي المعرفي',
  'دعم النوم',
]

interface ChatInputProps {
  onSend: (msg: string) => void
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState('')

  const handleSend = () => {
    const trimmed = value.trim()
    if (!trimmed) return
    onSend(trimmed)
    setValue('')
  }

  return (
    <div
      className="fixed bottom-16 left-0 w-full px-6 pb-4 pt-2 space-y-3"
      style={{ background: 'linear-gradient(to top, var(--surface) 70%, transparent 100%)' }}
    >
      {/* Quick reply chips */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        {quickReplies.map((r) => (
          <motion.button
            key={r}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSend(r)}
            className={[
              'shrink-0 px-4 py-2 rounded-full',
              'bg-surface-container-lowest border border-outline-variant',
              'text-on-surface-variant font-body text-xs font-medium',
              'hover:bg-surface-container-high transition-colors',
            ].join(' ')}
          >
            {r}
          </motion.button>
        ))}
      </div>

      {/* Text input row */}
      <div className="flex items-center gap-3 bg-surface-container-lowest rounded-full border border-outline-variant shadow-soft px-4 py-2 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="اكتب رسالتك..."
          className="flex-1 bg-transparent border-none outline-none font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 py-2"
          aria-label="رسالة"
        />
        <motion.button
          whileTap={{ scale: 0.90 }}
          onClick={handleSend}
          disabled={!value.trim()}
          className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity disabled:opacity-40"
          aria-label="إرسال"
        >
          <span className="material-symbols-outlined text-[20px]" style={{ transform: 'scaleX(-1)' }}>send</span>
        </motion.button>
      </div>
    </div>
  )
}
