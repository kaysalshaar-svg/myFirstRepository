import { motion } from 'framer-motion'
import { cardHover } from '@/theme'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export interface Therapist {
  id:         string
  name:       string
  title:      string
  rating:     number
  tags:       string[]
  image:      string
}

interface TherapistCardProps {
  therapist: Therapist
}

export default function TherapistCard({ therapist }: TherapistCardProps) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="glass rounded-xl p-6 flex flex-col sm:flex-row gap-6"
    >
      {/* Avatar + rating */}
      <div className="relative shrink-0">
        <img
          src={therapist.image}
          alt={therapist.name}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover shadow-soft"
        />
        <div className="absolute -bottom-2 -left-2 bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-medium shadow-soft">
          <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
          <span className="font-bold">{therapist.rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col gap-3">
        <div>
          <h3 className="font-headline text-lg font-semibold text-on-surface">{therapist.name}</h3>
          <p className="font-body text-sm text-primary font-semibold">{therapist.title}</p>
        </div>

        {/* Specialty tags */}
        <div className="flex flex-wrap gap-2">
          {therapist.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto">
          <Button
            variant="primary"
            size="sm"
            fullWidth
            icon={<span className="material-symbols-outlined text-[18px]">videocam</span>}
          >
            مكالمة فيديو
          </Button>
          <Button
            variant="secondary"
            size="sm"
            fullWidth
            icon={<span className="material-symbols-outlined text-[18px]">chat</span>}
          >
            رسالة آمنة
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
