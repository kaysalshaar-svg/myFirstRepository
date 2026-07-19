import { motion } from 'framer-motion'
import { staggerChildren, fadeUp } from '@/theme'
import TherapistCard, { type Therapist } from './TherapistCard'

interface TherapistGridProps {
  therapists: Therapist[]
}

export default function TherapistGrid({ therapists }: TherapistGridProps) {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {therapists.map((t) => (
        <motion.div key={t.id} variants={fadeUp}>
          <TherapistCard therapist={t} />
        </motion.div>
      ))}
    </motion.div>
  )
}
