import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerChildren, fadeUp } from '@/theme'
import PageContainer from '@/components/ui/PageContainer'
import Input from '@/components/ui/Input'
import FilterChip from '@/components/ui/FilterChip'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'

const FILTERS = ['الكل', 'اليقظة الذهنية', 'CBT', 'التدوين', 'تمارين التنفس']

const CBT_CARDS = [
  { id:'1', icon:'psychology', title:'تحدي الأفكار التلقائية', desc:'تعلم كيفية التعرف على الأنماط الفكرية السلبية وتفنيدها بمنطقية.', duration:'١٢ دقيقة', rating:'٤.٨' },
  { id:'2', icon:'bubble_chart', title:'تقنية التعريض التدريجي', desc:'دليل عملي لمواجهة المخاوف البسيطة وبناء المرونة النفسية.', duration:'٨ دقائق', rating:'٤.٩' },
  { id:'3', icon:'format_list_bulleted', title:'سجل الأنشطة والمزاج', desc:'تتبع الارتباط بين أنشطتك اليومية وحالتك المزاجية العامة.', duration:'١٠ دقائق', rating:'٤.٧' },
]

const MINDFULNESS = [
  { id:'1', title:'التركيز العميق',  sub:'٥ دقائق • تنفس',   img:'https://lh3.googleusercontent.com/aida-public/AB6AXuAJgTYRW2mN9cwtdAPrT9jV_SOL8DXLWpof60R5KHF7gtlz5UJSjStJyjQItkQSbxlA8pR9dCXOXn1lnc-VUeFpKjOJZWFo-fg_eocS6B6UwxwELK35PzaGKntUFi-CrhVqS_4mQ33_-go5DWJliJkjK87WUNiv6X6mZYxqu-4eO8ayIvNNOmZESrPZ5bcvimpZteP3j2s8DtG2paRjXzd9gjHOGVlk_IdCOOT27rOElCKd-CMzGjlM' },
  { id:'2', title:'مسح الجسم',      sub:'١٢ دقيقة • استرخاء', img:'https://lh3.googleusercontent.com/aida-public/AB6AXuCfoOO9k6GsClCUW9oGb2CtcMSY1PKbBPhkP1gGj9BrDgT3nON5U1aM4EsrTCqU7XUNVfPrxVomqp8tJDV3xcRbhcZUu-Oro6FDv-yQbBDb7deeUBD2kRblmwOPdx2XrHU1l3wUp5FrU_E4X7USyeyGt60ka2tqUtvlXFqbTv3OOU0GXsWC9vjrcaj2BK4HHRlp_afxX7UBrkVxCSbVlLNLXBAZXHJHDAZNAryuu0COEHbPTmwyjf79' },
  { id:'3', title:'تأمل الممشى',    sub:'١٠ دقائق • وعي',    img:'https://lh3.googleusercontent.com/aida-public/AB6AXuBEWwfvJ-02GsYXiMBW53rnLofXpM5RPYJ6pD1O0QXm5YRfDBOOKS5KGm-bB8f-NIyjY5iRdzJRGyVA0FN-8U9MD8g1RdwxnYsG204h8d0eS305puZePNLTAKL-TevKEYwpxEc1MBSF7QvAd-MrMRiX20rM3vLiC8aPjMts4GpxgaStJxP2Hkvrr2OqUgIVPrNADpvzZbtdORbSnLPRpCDpGZ5JTY6coSps5tm3wK6P79kQ_nxNxQV6' },
  { id:'4', title:'الرحمة الذاتية', sub:'١٥ دقيقة • عاطفة',  img:'https://lh3.googleusercontent.com/aida-public/AB6AXuDQes-gm_4bwahUZgYIOPQhVnWDvh-r0hf4Fg_AXGo8WDXDoV4rR3MMDkR2i_r-2GTPVhAp6J89W_KJ__qSfTd5xgftQW5l3C2PthdLBDraAMY9txmaJHl7dFOjw6uyEAUbSyPE6l7VHwMuGYMmKmbVMF7MFgQoWcJKECnTaoZO140T5rhedlVOgCMbKFnZlQY7mclztTKezdiaLDcK0E-IWyw6ov4KuCULILpWwiB_NDqeKrWh4iSe' },
]

export default function LibraryPage() {
  const [activeFilter, setActiveFilter] = useState('الكل')
  const [query, setQuery] = useState('')

  return (
    <PageContainer>
      <motion.div variants={staggerChildren} initial="hidden" animate="visible" className="space-y-10">

        {/* Search + filters */}
        <motion.section variants={fadeUp} className="space-y-4">
          <Input
            icon="search"
            placeholder="ابحث عن تمارين، مقالات، أو أدوات..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
            {FILTERS.map((f) => (
              <FilterChip key={f} label={f} active={activeFilter === f} onClick={() => setActiveFilter(f)} />
            ))}
          </div>
        </motion.section>

        {/* Featured Bento */}
        <motion.section variants={fadeUp}>
          <SectionTitle title="موصى به لك" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large card */}
            <div className="md:col-span-2 relative h-64 rounded-xl overflow-hidden shadow-soft group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbPNic7N4vBOPa7nk7MrqT0C0MKeLIX6uFj9pyUEZQIKPgLZIt1qUktLXsIW-qF13Zl81LYeMDW5zYLSUwKDCxwXUriR-oCQkRcbPz8Q58H3m_tEydLUnzOPoulp76lNzfwKmYivqw160GK7omaRxccugYkXURnfsJqQYqrENdWjOQWuwA5rApVmrtKLOuMRHxcgvE2odwuN8qA-NpjNAVLit-yvYTfBZ09fR4AlDncHxyVT87ortp')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="bg-primary/90 self-start px-3 py-1 rounded-full font-body text-xs mb-2">اليقظة الذهنية</span>
                <h3 className="font-headline text-lg font-bold mb-1">جلسة تأمل: القبول الجذري</h3>
                <p className="font-body text-sm opacity-90">تقنيات متقدمة للقبول الكامل للحظة الراهنة.</p>
                <div className="flex items-center gap-2 mt-2 opacity-80">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span className="font-body text-xs">١٥ دقيقة</span>
                </div>
              </div>
            </div>
            {/* Secondary card */}
            <div className="bg-secondary-container/30 border border-outline-variant rounded-xl p-6 flex flex-col justify-between hover:bg-secondary-container/40 transition-all cursor-pointer">
              <div>
                <span className="material-symbols-outlined text-secondary text-3xl mb-3 block">edit_note</span>
                <h3 className="font-headline text-lg font-semibold text-on-secondary-container mb-2">تحدي التدوين</h3>
                <p className="font-body text-sm text-on-surface-variant">٧ أيام من الامتنان لتعزيز الصحة النفسية الإيجابية.</p>
              </div>
              <button className="mt-4 text-secondary font-body text-sm font-medium flex items-center gap-1 group">
                ابدأ التحدي
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:-translate-x-1">arrow_back</span>
              </button>
            </div>
          </div>
        </motion.section>

        {/* CBT Grid */}
        <motion.section variants={fadeUp}>
          <SectionTitle
            title="العلاج السلوكي المعرفي (CBT)"
            action={<a href="#" className="font-body text-sm text-primary">عرض الكل</a>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CBT_CARDS.map((c) => (
              <Card key={c.id} hoverable padding="md" className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-surface-container rounded-lg">
                    <span className="material-symbols-outlined text-primary">{c.icon}</span>
                  </div>
                  <span className="font-body text-xs text-outline">{c.duration}</span>
                </div>
                <h4 className="font-headline text-base font-bold mb-2">{c.title}</h4>
                <p className="font-body text-sm text-on-surface-variant flex-grow mb-4">{c.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-surface-variant mt-auto">
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined icon-filled text-[16px]">star</span>
                    <span className="font-body text-xs font-bold">{c.rating}</span>
                  </div>
                  <button className="font-body text-sm text-primary font-medium">ابدأ الآن</button>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Mindfulness horizontal list */}
        <motion.section variants={fadeUp}>
          <SectionTitle
            title="اليقظة الذهنية والتأمل"
            action={<a href="#" className="font-body text-sm text-primary">عرض الكل</a>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MINDFULNESS.map((m) => (
              <div key={m.id} className="bg-surface-container-low rounded-xl p-4 flex gap-4 items-center hover:bg-surface-container-high transition-colors cursor-pointer border border-outline-variant/30">
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <img src={m.img} alt={m.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-body text-sm font-bold leading-tight mb-1">{m.title}</h5>
                  <p className="font-body text-xs text-on-surface-variant">{m.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Affirmation quote */}
        <motion.section variants={fadeUp}>
          <div className="bg-on-primary-fixed/5 rounded-xl p-6 flex items-center gap-6 border-r-4 border-primary">
            <span className="material-symbols-outlined icon-filled text-primary text-4xl shrink-0">format_quote</span>
            <div>
              <p className="font-headline text-base italic text-primary-fixed-dim leading-relaxed">
                "أنت لا تتحكم في كل ما يحدث لك، لكنك تتحكم في كيفية استجابتك لما يحدث."
              </p>
              <p className="font-body text-xs text-outline mt-2">— ممارسة اليوم المقترحة</p>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </PageContainer>
  )
}
