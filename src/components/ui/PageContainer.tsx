import { motion } from 'framer-motion'
import { pageTransition } from '@/theme'
import type { ReactNode } from 'react'

interface PageContainerProps {
  children:   ReactNode
  className?: string
  fullHeight?: boolean
}

export default function PageContainer({ children, className = '', fullHeight }: PageContainerProps) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className={[
        'px-6 max-w-[1140px] mx-auto w-full',
        fullHeight ? 'flex flex-col' : '',
        className,
      ].join(' ')}
    >
      {children}
    </motion.div>
  )
}
