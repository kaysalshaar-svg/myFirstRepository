import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

interface NavItem {
  to:     string
  icon:   string
  label:  string
}

const navItems: NavItem[] = [
  { to: '/sanctuary',  icon: 'home_max',      label: 'الملاذ'    },
  { to: '/insights',   icon: 'analytics',     label: 'الرؤى'     },
  { to: '/library',    icon: 'local_library', label: 'المكتبة'   },
  { to: '/chat',       icon: 'chat_bubble',   label: 'المحادثة'  },
]

export default function BottomNavigation() {
  return (
    <nav
      className={[
        'fixed bottom-0 left-0 w-full z-50',
        'flex justify-around items-center',
        'px-4 py-3 pb-safe',
        'bg-surface shadow-nav rounded-t-2xl',
      ].join(' ')}
      aria-label="التنقل الرئيسي"
    >
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} className="focus:outline-none">
          {({ isActive }) => (
            <motion.div
              whileTap={{ scale: 0.92 }}
              className={[
                'flex flex-col items-center justify-center gap-0.5',
                'px-5 py-2 rounded-full transition-all duration-300',
                isActive
                  ? 'bg-primary-container text-on-primary-container scale-95 shadow-soft'
                  : 'text-on-surface-variant hover:bg-surface-container-highest',
              ].join(' ')}
              aria-current={isActive ? 'page' : undefined}
            >
              <span
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className="font-body text-xs font-medium">{item.label}</span>
            </motion.div>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
