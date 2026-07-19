import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/theme'
import PageContainer from '@/components/ui/PageContainer'
import TherapistGrid from '@/components/therapist/TherapistGrid'
import TherapistFilters from '@/components/therapist/TherapistFilters'
import type { Therapist } from '@/components/therapist/TherapistCard'

const ALL_FILTERS = ['الكل', 'القلق', 'الاكتئاب', 'علاقات', 'النوم', 'الإدمان']

const THERAPISTS: Therapist[] = [
  {
    id: '1', name: 'د. ليلى منصور', title: 'أخصائية نفسية إكلينيكية',
    rating: 4.9, tags: ['القلق', 'اضطراب ما بعد الصدمة'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbh_nzZuBqkZrt9ZEdVqwaG6Ik4IKvY0hQAcni98fu1ccy8Fh8tO-fdVXMm9FMdMBYJveLyVD9a9_UOXwGo_vCrS4s7ZoHCkYhltEolLO2zsRJh83sXO-lQ9EA2_D18PVhqgLXMhcuD1znPL4t1nfj-t8SbxJ57B_5CYl5uXliRqzlw2Ag4erLmPh6nf8unuSuZTQXyVcGliTLJq6JOVXUUf8xEip_o3PF5VX_fgEXcIrb4FKgYUcR',
  },
  {
    id: '2', name: 'أ. يوسف إبراهيم', title: 'مستشار علاقات أسرية',
    rating: 4.8, tags: ['التواصل', 'الاكتئاب'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo5oG9w-FR6iTJX6NByNSRiWYQH4U1286OPiQBGpPQeky_XtGCbPPTFLNA9jeBF_QWfl54jHn_wIOGX3s-Xr_al4SxFKcYCEuOgkrhnsOWA0mXEqOfWWHeZNQ0io_4juWwg54887yLDlVPwA8YCeB7PVmKptiNRwqNiyArr-AUq8Csom1sU0pXXVagu2E8udgg0n0xJCmIcErNAiacFxWRHk9yUAbRwYXfRZ2JtbwJiLYV998L0wSm',
  },
  {
    id: '3', name: 'د. سارة خالد', title: 'طبيبة نفسية',
    rating: 5.0, tags: ['إدارة التوتر', 'العلاج المعرفي'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2GvPpFen7EGeRkOytv_ELv3W-sJwAVbO_kknwfOLY_AeyRiLHNdzmdOtt0KVlhNmVl6G4EXTuUf2Wd2znEuCMfnZpO9IOJSbMBkcHLwNCPGHViK3otqp0v2FXjGJCy7XRV1B3dhFT6ajVJx7ZBVx_R-5LpDGcXe3vgDPyCzBTvOR0v_kmQHd-hS03kNkYzCX3Da57UadOkEn2zLK2QHuTZQUvn_FETcLsL8ZAwqYIFaqwdN56uj65',
  },
  {
    id: '4', name: 'أ. سامي عمر', title: 'أخصائي سلوكي',
    rating: 4.7, tags: ['الإدمان', 'تعديل السلوك'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLGCJC7DD9zHw4XurtIm1iE6LEGwgoqSZb8nvVO9VAtYDNQUFQ5WcmPAIqy3G7n-oHjqQH6Z2zee7AKfZk0ePTFIEQlhqMn6sFK7EEnRCNCowf-xTNSMM_FXbXRgPzfrQjmoERPe_Lr9Q487aHQOEjbCYLBscPEutlh2L0biD5Hyn9-8TsGepufy9f-TDhqS-qmNSUrJeReLEPYShqaQ1sO6eqzO_DhKqaEqcmKKRLx-b8vcSVB2en',
  },
]

export default function TherapistsPage() {
  const [activeFilter, setActiveFilter] = useState('الكل')

  const filtered = activeFilter === 'الكل'
    ? THERAPISTS
    : THERAPISTS.filter((t) => t.tags.some((tag) => tag.includes(activeFilter)))

  return (
    <PageContainer>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-8">

        {/* Page Header */}
        <section className="space-y-2">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface">الاتصال بالخبراء</h2>
          <p className="font-body text-base text-on-surface-variant max-w-2xl leading-relaxed">
            مساحة آمنة للتواصل مع متخصصين مرخصين. نحن هنا لدعم رحلتك نحو التوازن النفسي والهدوء.
          </p>
        </section>

        {/* Filters */}
        <TherapistFilters
          filters={ALL_FILTERS}
          active={activeFilter}
          onChange={setActiveFilter}
        />

        {/* Grid */}
        <TherapistGrid therapists={filtered} />

      </motion.div>
    </PageContainer>
  )
}
