import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { scaleIn, fadeUp } from '@/theme'
import Button from '@/components/ui/Button'
import AmbientBlobs from '@/components/ui/AmbientBlobs'

const MOODS = [
  { emoji: '😌', label: 'هادئ' },
  { emoji: '😔', label: 'متعب' },
  { emoji: '😰', label: 'قلق' },
  { emoji: '😠', label: 'منزعج' },
  { emoji: '😶', label: 'غير متأكد' },
  { emoji: '✨', label: 'مستعد للنمو' },
]

const GOALS = [
  { icon: 'psychology',       label: 'تقليل التوتر والقلق اليومي' },
  { icon: 'bedtime',          label: 'تحسين جودة النوم والراحة' },
  { icon: 'favorite',         label: 'تعلم مهارات التعاطف مع الذات' },
  { icon: 'self_improvement', label: 'مجرد استكشاف أدوات الصحة النفسية' },
]

export default function OnboardingPage() {
  const [step, setStep]             = useState(1)
  const [showCrisis, setShowCrisis] = useState(false)
  const navigate                    = useNavigate()
  const totalSteps                  = 4
  const progress                    = (step / totalSteps) * 100

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <AmbientBlobs />

      {/* Top bar */}
      <header className="flex justify-between items-center px-6 h-16 bg-surface/95 backdrop-blur-md shadow-soft">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined icon-filled text-primary text-2xl">spa</span>
          <span className="font-headline text-xl font-bold text-primary">مسار الهدوء</span>
        </div>
        <button
          onClick={() => navigate('/sanctuary')}
          className="text-on-surface-variant font-body text-sm flex items-center gap-1 hover:bg-surface-container-high px-3 py-1 rounded-full transition-colors"
        >
          إغلاق
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </header>

      <main className="flex-grow px-6 pt-8 pb-12 max-w-2xl mx-auto w-full flex flex-col">
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-surface-container rounded-full mb-10 overflow-hidden">
          <div
            className="h-full bg-primary-container progress-smooth"
            style={{ width: `${progress}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1 — Mood selection */}
          {step === 1 && (
            <motion.section key="step1" variants={scaleIn} initial="hidden" animate="visible" exit={{ opacity: 0, y: -10 }}>
              <div className="text-center mb-10">
                <h1 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-3">مرحباً بك في مساحتك الآمنة</h1>
                <p className="font-body text-base text-on-surface-variant">كيف تشعر في هذه اللحظة؟</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {MOODS.map((m) => (
                  <motion.button
                    key={m.label}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStep(2)}
                    className="flex flex-col items-center justify-center p-6 bg-surface rounded-xl shadow-soft border border-transparent hover:border-outline-variant hover:bg-surface-container-low transition-all group"
                  >
                    <span className="text-4xl mb-3 grayscale group-hover:grayscale-0 transition-all">{m.emoji}</span>
                    <span className="font-body text-sm font-medium text-on-surface">{m.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.section>
          )}

          {/* Step 2 — Goal */}
          {step === 2 && (
            <motion.section key="step2" variants={scaleIn} initial="hidden" animate="visible" exit={{ opacity: 0, y: -10 }}>
              <div className="text-center mb-10">
                <h2 className="font-headline text-2xl font-bold text-primary mb-3">ما الذي أتى بك إلينا اليوم؟</h2>
                <p className="font-body text-base text-on-surface-variant">سنقوم بتخصيص تجربتك بناءً على احتياجاتك.</p>
              </div>
              <div className="space-y-4">
                {GOALS.map((g) => (
                  <motion.button
                    key={g.label}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep(3)}
                    className="w-full flex items-center justify-between p-5 bg-surface rounded-xl shadow-soft border border-transparent hover:bg-secondary-container/20 hover:border-secondary transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-secondary text-3xl">{g.icon}</span>
                      <span className="font-body text-sm font-semibold text-on-surface">{g.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-outline" style={{ transform: 'scaleX(-1)' }}>chevron_right</span>
                  </motion.button>
                ))}
              </div>
            </motion.section>
          )}

          {/* Step 3 — Safety screening */}
          {step === 3 && (
            <motion.section key="step3" variants={scaleIn} initial="hidden" animate="visible" exit={{ opacity: 0, y: -10 }}>
              <div className="bg-surface-container-low/50 p-8 rounded-3xl border border-outline-variant/30 text-center space-y-6">
                <span className="material-symbols-outlined text-primary text-5xl block">shield_spark</span>
                <h2 className="font-headline text-2xl font-bold text-on-surface">سؤال عن سلامتك</h2>
                <p className="font-body text-base text-on-surface-variant leading-relaxed max-w-md mx-auto">
                  نحن نهتم بك حقاً. هل شعرت في الأسبوعين الماضيين بوجود أي أفكار حول إيذاء نفسك أو رغبة في عدم البقاء؟
                </p>
                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                  <Button variant="primary" size="lg" fullWidth onClick={() => setStep(4)}>
                    لا، أشعر بالأمان
                  </Button>
                  <Button variant="outline" size="lg" fullWidth onClick={() => setShowCrisis(true)}
                    className="border-error/30 text-error hover:bg-error-container/20">
                    نعم، أحتاج لبعض الدعم
                  </Button>
                </div>
                <p className="font-body text-xs text-outline italic">إجابتك سرية وتساعدنا في توجيهك للموارد الصحيحة.</p>
              </div>
            </motion.section>
          )}

          {/* Step 4 — Success */}
          {step === 4 && (
            <motion.section key="step4" variants={fadeUp} initial="hidden" animate="visible" className="text-center space-y-8">
              <div>
                <div className="relative w-40 h-40 mx-auto mb-8">
                  <div className="absolute inset-0 bg-primary-container rounded-full opacity-20 animate-pulse" />
                  <div className="absolute inset-6 bg-primary rounded-full flex items-center justify-center shadow-soft">
                    <span className="material-symbols-outlined text-on-primary text-5xl">check</span>
                  </div>
                </div>
                <h2 className="font-headline text-3xl font-bold text-primary mb-3">شكراً لصراحتك</h2>
                <p className="font-body text-base text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  لقد أعددنا لك خطة مخصصة لتبدأ رحلتك نحو الهدوء والسكينة. أنت لست وحدك.
                </p>
              </div>
              <div className="p-6 bg-surface rounded-2xl border border-outline-variant/20 shadow-soft max-w-sm mx-auto space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwInZwHXrt2_Vf8oSppMvGO5fWibgQ33aXGhOpyBXIy_6J811ND36NjyDfrDiyw3OeEil3LRztjOYev4YvGcCGw9lI0Wtvn_1BkaB33iPbnnYQR68qG8VIY9hgV4bDYtSxTKoGdsalon47cttjDybTkAJ8YCdZwfu78hp_X44ALSZSz4wyh1w2E3D_FFXm_Y5uFX6ckZMr1GRjcZJJeKkpM4V4_cP4m_z9N3TKBsB-UbpFG8I69qsS"
                      alt="معالج"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-right">
                    <p className="font-body text-xs text-primary font-medium">توصية فورية</p>
                    <p className="font-headline text-base font-semibold text-on-surface">جلسة تنفس مدتها دقيقتان</p>
                  </div>
                </div>
                <Button variant="secondary" size="md" fullWidth
                  icon={<span className="material-symbols-outlined text-[18px]">play_circle</span>}>
                  ابدأ الآن
                </Button>
              </div>
              <button
                onClick={() => navigate('/sanctuary')}
                className="font-body text-sm text-primary font-bold underline underline-offset-4"
              >
                انتقل للوحة التحكم الرئيسية
              </button>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Crisis modal */}
      <AnimatePresence>
        {showCrisis && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-on-background/40 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="bg-surface w-full max-w-md rounded-3xl p-8 shadow-large text-center space-y-6"
            >
              <span className="material-symbols-outlined text-error text-6xl">emergency_share</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface">نحن هنا معك</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                إذا كنت تشعر بالخطر أو تفكر في إيذاء نفسك، يرجى التواصل فوراً مع خطوط المساعدة المتوفرة على مدار الساعة. صوتك مهم.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:999"
                  className="flex items-center justify-center w-full py-4 bg-error text-on-error rounded-full font-headline text-base shadow-soft"
                >
                  اتصل بخط الطوارئ الوطني
                </a>
                <button
                  onClick={() => { setShowCrisis(false); setStep(4) }}
                  className="w-full py-4 bg-surface-container text-on-surface rounded-full font-body text-sm"
                >
                  العودة للتقييم
                </button>
              </div>
              <p className="font-body text-xs text-outline">يمكنك أيضاً التحدث مع مرشد نفسي عبر الدردشة الفورية في أي وقت.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
