import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // All colors reference CSS variables — change :root → whole app updates
      colors: {
        primary:                  'var(--primary)',
        'on-primary':             'var(--on-primary)',
        'primary-container':      'var(--primary-container)',
        'on-primary-container':   'var(--on-primary-container)',
        'primary-fixed':          'var(--primary-fixed)',
        'primary-fixed-dim':      'var(--primary-fixed-dim)',
        'on-primary-fixed':       'var(--on-primary-fixed)',
        'inverse-primary':        'var(--inverse-primary)',

        secondary:                'var(--secondary)',
        'on-secondary':           'var(--on-secondary)',
        'secondary-container':    'var(--secondary-container)',
        'on-secondary-container': 'var(--on-secondary-container)',
        'secondary-fixed':        'var(--secondary-fixed)',

        error:                    'var(--error)',
        'on-error':               'var(--on-error)',
        'error-container':        'var(--error-container)',
        'on-error-container':     'var(--on-error-container)',

        background:               'var(--background)',
        'on-background':          'var(--on-background)',
        surface:                  'var(--surface)',
        'surface-dim':            'var(--surface-dim)',
        'surface-container-lowest': 'var(--surface-container-lowest)',
        'surface-container-low':  'var(--surface-container-low)',
        'surface-container':      'var(--surface-container)',
        'surface-container-high': 'var(--surface-container-high)',
        'surface-container-highest': 'var(--surface-container-highest)',
        'on-surface':             'var(--on-surface)',
        'on-surface-variant':     'var(--on-surface-variant)',
        'inverse-surface':        'var(--inverse-surface)',
        'inverse-on-surface':     'var(--inverse-on-surface)',
        'surface-variant':        'var(--surface-variant)',

        outline:                  'var(--outline)',
        'outline-variant':        'var(--outline-variant)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm:      'var(--radius-sm)',
        lg:      'var(--radius-lg)',
        xl:      'var(--radius-xl)',
        '2xl':   'var(--radius-2xl)',
        '3xl':   'var(--radius-3xl)',
        full:    'var(--radius-full)',
      },
      boxShadow: {
        soft:   'var(--shadow-soft)',
        medium: 'var(--shadow-medium)',
        large:  'var(--shadow-large)',
        glass:  'var(--shadow-glass)',
        nav:    'var(--shadow-nav)',
      },
      fontFamily: {
        headline: ["'Noto Sans Arabic'", "'Manrope'", 'sans-serif'],
        body:     ["'Noto Sans Arabic'", "'Be Vietnam Pro'", 'sans-serif'],
        arabic:   ["'Noto Sans Arabic'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
