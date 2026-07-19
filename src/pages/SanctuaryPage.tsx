import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerChildren, fadeUp } from '@/theme'
import PageContainer from '@/components/ui/PageContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import MoodButton from '@/components/mood/MoodButton'
import ProgressRing from '@/components/ui/ProgressRing'

const moods = [
  { icon: 'sentiment_very_satisfied', label: 'مرتاح' },
  { icon: 'tsunami',                  label: 'قلق'   },
  { icon: 'cloud',                    label: 'حزين'  },
  { icon: 'sunny',                    label: 'سعيد'  },
  { icon: 'bolt',                     label: 'متعب'  },
]

const exercises = [
  {
    id: '1',
    category: 'اليقظة الذهنية',
    title: 'تنفس المربع',
    description: 'نظم جهازك العصبي بهذا التمرين البسيط المكون من 4 عدات...',
    duration: '5 دقائق',
    action: 'ابدأ التمرين',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUo7xESg6YJBomF_heKHnJ1JH0v1v-IAiEz6c7HTbAFrdHgaXX8OT95YSs4xyygpjfqHMHPeEuYWzGzE_bw8dheHphSjlIyJbDM1Ja5aZyizhZZqq6bw1ZSm8yDdBTCW2CmFvcqj8fBNXWUYYzGkcahNfG-G0nUS_sUE2NGN7_T8hYBK_hFg24y9-QKQitQ4_zTN_OU58hV1qJytFJceOIhWVmA8j-4_QAeGG_MF7mP67N2HHzd6ef',
  },
  {
    id: '2',
    category: 'تأمل',
    title: 'امتنان المساء',
    description: 'عدد ثلاثة أشياء صغيرة جلبت لك السلام اليوم لتغيير منظورك.',
    duration: '10 دقائق',
    action: 'فتح المفكرة',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV5ia1LCNNLrknsojxKT8CJ4hRWs3_nEbnlcXFFQkNipLrBzMGo9nf-iDY8gvBV4oqiWiCs5J3Xpxp2h_fn29sHL6O3zxN-lO6d8qkzTr-crxrDDaCHfMNcOkZBQ1C1XhHcsTwLBtd9UpKh9XQMh3f2wCAhn3BZWvvhB-KB-1IDxqIlprEAEld0CGe7t_qC2pKZzVG4n7V59bM4XO-NVz2YiyNwVccwOcqgf5K0Fc4_X0QO0d2lNkv',
  },
  {
    id: '3',
    category: 'تخيل',
    title: 'المكان الآمن',
    description: 'رحلة صوتية موجهة إلى ملاذك الذهني الخاص.',
    duration: '15 دقيقة',
    action: 'استمع الآن',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO0SLOiPmqINg_E6J4SANOKELIHs0HwNPFJgz2ylhH7phmK0_X2nwrHOlRNhNCyxgMQMfCraRkAP8NJjkjT9OWfGhwuYP6pMvHGpKiUOT0hFEdQLXGTKG4MeqZrtfGsJnvfic6Q0OvHVRCms3XycnWrcB0JmN2Fwq6NhY2e0ZiYXH9YHzW_mnK0g5G2ANSjhf4MDeSn3oE7Zyku373Jziy86lWRxqN3CJ_XEa1YouKMc3MWMTBk3QzZ',
  },
]

const sparkData = [40, 60, 30, 80, 50, 70, 90]

export default function SanctuaryPage() {
  const [activeMood, setActiveMood] = useState<string | null>(null)

  return (
    <PageContainer>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >

        {/* ── Hero Greeting ── */}
        <motion.section variants={fadeUp} className="space-y-4">
          <div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface">صباح الخير،</h2>
            <p className="font-body text-base text-on-surface-variant mt-1">كيف تشعر اليوم؟</p>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {moods.map((m) => (
              <MoodButton
                key={m.label}
                icon={m.icon}
                label={m.label}
                active={activeMood === m.label}
                onClick={() => setActiveMood(m.label)}
              />
            ))}
          </div>
        </motion.section>

        {/* ── Daily Sanctuary Quote ── */}
        <motion.section variants={fadeUp}>
          <div className="relative overflow-hidden rounded-3xl bg-primary-container text-on-primary-container p-8 md:p-12 shadow-soft">
            <div className="absolute -left-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl breathing" />
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            <div className="relative z-10 max-w-lg space-y-4">
              <span className="material-symbols-outlined icon-filled text-4xl opacity-50">format_quote</span>
              <p className="font-headline text-lg md:text-xl italic leading-relaxed">
                "موقفك الحالي ليس وجهتك النهائية. العاصفة ستمر، وأنت أقوى مما تعتقد."
              </p>
              <div className="flex items-center gap-4 pt-2">
                <Button variant="ghost" size="sm"
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-on-primary-container">
                  حفظ في المفضلة
                </Button>
                <button className="flex items-center gap-1 text-on-primary-container/80 hover:text-on-primary-container font-body text-sm transition-colors">
                  <span className="material-symbols-outlined text-lg">share</span>
                  مشاركة
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Recommended Exercises ── */}
        <motion.section variants={fadeUp}>
          <SectionTitle
            title="مقترح لك"
            action={<button className="font-body text-sm text-primary hover:underline">عرض الكل</button>}
          />
          <div className="flex overflow-x-auto gap-6 pb-4 -mx-6 px-6 hide-scrollbar snap-x">
            {exercises.map((ex) => (
              <div
                key={ex.id}
                className="shrink-0 w-[280px] md:w-[300px] snap-start bg-surface rounded-2xl overflow-hidden border border-outline-variant/30 shadow-soft group"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={ex.image}
                    alt={ex.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-surface/80 backdrop-blur-sm px-3 py-1 rounded-full font-body text-xs text-on-surface">
                    {ex.duration}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="font-body text-xs text-secondary font-medium tracking-wide">{ex.category}</span>
                  <h4 className="font-headline text-base font-semibold text-on-surface">{ex.title}</h4>
                  <p className="font-body text-sm text-on-surface-variant line-clamp-2">{ex.description}</p>
                  <Button variant="secondary" size="sm" fullWidth className="mt-2">{ex.action}</Button>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Recent Insights ── */}
        <motion.section variants={fadeUp}>
          <SectionTitle title="رؤى حديثة" />
          <Card padding="lg" className="flex flex-col md:flex-row gap-8 items-center bg-surface-container-low">
            <div className="flex-1 space-y-4 w-full">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-container rounded-lg">
                  <span className="material-symbols-outlined text-on-primary-container">trending_up</span>
                </div>
                <h4 className="font-body text-sm font-medium text-on-surface">اتجاه المزاج (آخر 7 أيام)</h4>
              </div>
              {/* Sparkline */}
              <div className="h-20 flex items-end gap-2 px-1">
                {sparkData.map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-t-lg transition-all duration-700"
                    style={{
                      height: `${h}%`,
                      background: i === sparkData.length - 1 ? 'var(--primary)' : 'color-mix(in srgb, var(--primary) 30%, transparent)',
                    }}
                  />
                ))}
              </div>
              <p className="font-body text-sm text-on-surface-variant">
                لقد تحسن مزاجك بشكل مطرد خلال الأسبوع. أكملت 4 جلسات تأمل!
              </p>
            </div>
            <div className="w-full md:w-px h-px md:h-24 bg-outline-variant/30" />
            <ProgressRing value={80} label="الهدف اليومي" />
          </Card>
        </motion.section>

      </motion.div>
    </PageContainer>
  )
}
