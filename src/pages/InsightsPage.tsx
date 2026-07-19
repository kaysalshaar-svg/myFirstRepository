import { motion } from 'framer-motion'
import { staggerChildren, fadeUp } from '@/theme'
import PageContainer from '@/components/ui/PageContainer'
import Card from '@/components/ui/Card'
import SectionTitle from '@/components/ui/SectionTitle'
import MoodBar from '@/components/mood/MoodBar'

export default function InsightsPage() {
  return (
    <PageContainer>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >

        {/* ── Page Header ── */}
        <motion.section variants={fadeUp} className="space-y-2">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">رؤى المزاج</h2>
          <p className="font-body text-base text-on-surface-variant">
            نمط مشاعرك خلال الثلاثين يوماً الماضية. أنت تحرز تقدماً رائعاً.
          </p>
        </motion.section>

        {/* ── Mood Trend Chart ── */}
        <motion.section variants={fadeUp}>
          <Card padding="lg">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined icon-filled text-secondary">trending_up</span>
                <h3 className="font-body text-base font-medium text-on-surface">اتجاه المزاج العام</h3>
              </div>
              <span className="font-body text-sm text-secondary font-medium">آخر 30 يوم</span>
            </div>
            {/* SVG Line Chart */}
            <div className="relative h-36">
              <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 Q50,20 100,50 T200,30 T300,60 T400,20"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M0,80 Q50,20 100,50 T200,30 T300,60 T400,20 V100 H0 Z"
                  fill="url(#lineGrad)"
                />
                {[[0,80],[100,50],[200,30],[300,60],[400,20]].map(([cx,cy],i) => (
                  <circle key={i} cx={cx} cy={cy} r="4" fill="var(--primary)" />
                ))}
              </svg>
            </div>
            <div className="flex justify-between mt-4 font-body text-xs text-outline">
              <span>قبل شهر</span>
              <span>اليوم</span>
            </div>
          </Card>
        </motion.section>

        {/* ── Bento Grid ── */}
        <motion.section variants={fadeUp}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Most Frequent Moods */}
            <Card padding="lg" className="space-y-4">
              <h3 className="font-body text-base font-semibold text-on-surface">المزاج الأكثر تكراراً</h3>
              <div className="space-y-4">
                <MoodBar label="هدوء"     value={45} color="primary" />
                <MoodBar label="قلق"      value={20} color="secondary" />
                <MoodBar label="امتنان"   value={35} color="container" />
              </div>
            </Card>

            {/* Smart Correlations */}
            <Card padding="lg" className="space-y-4">
              <h3 className="font-body text-base font-semibold text-on-surface">الارتباطات الذكية</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-secondary-container p-2 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-container">bedtime</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-on-surface">جودة النوم</p>
                    <p className="font-body text-xs text-outline mt-0.5">
                      يتحسن مزاجك بنسبة 30% عندما تنام أكثر من 7 ساعات.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary-fixed p-2 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-on-primary-fixed">directions_walk</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-on-surface">النشاط البدني</p>
                    <p className="font-body text-xs text-outline mt-0.5">
                      المشي الصباحي يقلل من نوبات القلق المسائية لديك.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* ── Affirmation Banner ── */}
        <motion.section variants={fadeUp}>
          <div className="bg-primary-container/10 border border-primary/10 rounded-xl p-6 flex items-center gap-4">
            <div className="bg-surface rounded-full p-3 shadow-soft shrink-0">
              <span className="material-symbols-outlined icon-filled text-primary text-3xl">stars</span>
            </div>
            <div>
              <h4 className="font-body text-base font-bold text-primary">إنجاز رائع!</h4>
              <p className="font-body text-sm text-on-surface-variant mt-1">
                لقد سجلت مشاعرك لمدة 12 يوماً متتالياً. هذا الوعي الذاتي هو الخطوة الأولى نحو التوازن.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Visualization Card ── */}
        <motion.section variants={fadeUp}>
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-soft group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_YLbxv_u0IN1TtdM70Z44qKnDnf6ed5wWwOdt3Xhnr9LXNk17YizKVllhtIwhc8rrKtAXHbFmG7C8Dyw7jMzSs1DW2OIyrSNTLOi7WQWbYx1o0a7ohARh7kKCfmUGjE4Zw14ZuWRmvaxyCbihBBDiRT9t1TEo__KKG47c4HtiNLintObbX2Y7eAAPqcdnXToVLm3ndo_UBBWDY3yemkl3ct0i7DpgryOBJwouL4_LSNgt4fYxEY0h"
              alt="مساحة للتنفس"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-6 right-6 z-20 text-white">
              <h5 className="font-headline text-xl font-bold">مساحة للتنفس</h5>
              <p className="font-body text-sm opacity-90">رؤيتك اليومية للهدوء</p>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </PageContainer>
  )
}
