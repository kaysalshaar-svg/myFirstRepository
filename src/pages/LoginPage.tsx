import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { fadeUp, scaleIn } from '@/theme'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import AmbientBlobs from '@/components/ui/AmbientBlobs'

interface FormState {
  email:    string
  password: string
}

interface FormErrors {
  email?:    string
  password?: string
  general?:  string
}

export default function LoginPage() {
  const navigate = useNavigate()

  const [form, setForm]       = useState<FormState>({ email: '', password: '' })
  const [errors, setErrors]   = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

  function validate(): boolean {
    const next: FormErrors = {}
    if (!form.email.trim())                              next.email    = 'البريد الإلكتروني مطلوب'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'بريد إلكتروني غير صحيح'
    if (!form.password)                                  next.password = 'كلمة المرور مطلوبة'
    else if (form.password.length < 8)                   next.password = 'كلمة المرور 8 أحرف على الأقل'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setErrors({})

    try {
      const res = await fetch('/api/auth/login', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({ email: form.email, password: form.password }),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrors({ general: data.message ?? 'بيانات الدخول غير صحيحة. يرجى المحاولة مجدداً.' })
        return
      }

      // Store token returned by Laravel Sanctum / Passport
      localStorage.setItem('auth_token', data.token)
      navigate('/sanctuary', { replace: true })
    } catch {
      setErrors({ general: 'حدث خطأ في الاتصال. يرجى التحقق من اتصالك بالإنترنت.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col" dir="rtl">
      <AmbientBlobs />

      {/* ─── Top bar ─── */}
      <header className="flex items-center px-6 h-16 bg-surface/95 backdrop-blur-md shadow-soft">
        <span className="material-symbols-outlined icon-filled text-primary text-2xl ml-2">spa</span>
        <span className="font-headline text-xl font-bold text-primary">مسار الهدوء</span>
      </header>

      {/* ─── Main ─── */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          {/* Card */}
          <div className="bg-surface rounded-3xl shadow-large border border-outline-variant/20 p-8 space-y-8">

            {/* Heading */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center space-y-2">
              <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined icon-filled text-primary text-3xl">lock_open</span>
              </div>
              <h1 className="font-headline text-2xl font-bold text-on-surface">مرحباً بعودتك</h1>
              <p className="font-body text-sm text-on-surface-variant">سجّل دخولك للمتابعة في رحلتك</p>
            </motion.div>

            {/* General error */}
            {errors.general && (
              <motion.div
                variants={fadeUp} initial="hidden" animate="visible"
                className="flex items-start gap-3 bg-error-container/50 border border-error/20 rounded-xl p-4"
              >
                <span className="material-symbols-outlined text-error text-xl mt-0.5">error</span>
                <p className="font-body text-sm text-error">{errors.general}</p>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <Input
                label="البريد الإلكتروني"
                type="email"
                placeholder="example@email.com"
                icon="mail"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                error={errors.email}
                autoComplete="email"
                dir="ltr"
              />

              <div className="space-y-1">
                <div className="relative">
                  <Input
                    label="كلمة المرور"
                    type={showPass ? 'text' : 'password'}
                    placeholder="••••••••"
                    icon="lock"
                    value={form.password}
                    onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                    error={errors.password}
                    autoComplete="current-password"
                    dir="ltr"
                    className="pl-12"
                  />
                  {/* toggle visibility */}
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    className="absolute left-4 top-[2.6rem] text-outline hover:text-on-surface-variant transition-colors"
                    aria-label={showPass ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
                  >
                    <span className="material-symbols-outlined text-[22px]">
                      {showPass ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
                <div className="flex justify-start">
                  <Link
                    to="/forgot-password"
                    className="font-body text-xs text-primary hover:underline underline-offset-4"
                  >
                    نسيت كلمة المرور؟
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={loading}
                icon={
                  loading
                    ? <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                    : <span className="material-symbols-outlined text-[20px]">login</span>
                }
              >
                {loading ? 'جارٍ تسجيل الدخول…' : 'تسجيل الدخول'}
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-outline-variant/40" />
              <span className="font-body text-xs text-on-surface-variant">أو</span>
              <div className="flex-1 h-px bg-outline-variant/40" />
            </div>

            {/* Social login */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 h-12 rounded-xl border border-outline-variant/50 bg-surface-container-low hover:bg-surface-container transition-colors font-body text-sm text-on-surface"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/>
                  <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"/>
                  <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z"/>
                  <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 h-12 rounded-xl border border-outline-variant/50 bg-surface-container-low hover:bg-surface-container transition-colors font-body text-sm text-on-surface"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                GitHub
              </button>
            </div>

            {/* Footer link */}
            <p className="text-center font-body text-sm text-on-surface-variant">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-primary font-semibold hover:underline underline-offset-4">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
