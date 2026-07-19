import { motion } from 'framer-motion'
import { fadeUp } from '@/theme'

interface ChatBubbleProps {
  message:   string
  sender:    'bot' | 'user'
  senderName?: string
}

export default function ChatBubble({ message, sender, senderName }: ChatBubbleProps) {
  const isBot = sender === 'bot'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className={['flex items-start gap-3', isBot ? '' : 'flex-row-reverse'].join(' ')}
    >
      {/* Avatar */}
      <div className={[
        'w-10 h-10 rounded-full shrink-0 flex items-center justify-center',
        isBot ? 'bg-primary-container text-on-primary-container' : 'bg-secondary-container text-on-secondary-container',
      ].join(' ')}>
        <span className="material-symbols-outlined text-[20px]">
          {isBot ? 'smart_toy' : 'person'}
        </span>
      </div>

      {/* Bubble */}
      <div className={['flex flex-col gap-1 max-w-[80%]', isBot ? 'items-start' : 'items-end'].join(' ')}>
        {senderName && (
          <span className="font-body text-xs text-on-surface-variant px-1">{senderName}</span>
        )}
        <div className={[
          'px-4 py-3 rounded-2xl font-body text-sm shadow-soft',
          isBot
            ? 'bg-primary-container text-on-primary-container rounded-ss-sm'
            : 'bg-surface-container-high text-on-surface rounded-se-sm',
        ].join(' ')}>
          <p>{message}</p>
        </div>
      </div>
    </motion.div>
  )
}
