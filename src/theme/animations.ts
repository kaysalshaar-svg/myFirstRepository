// ─── Serene Path — Design Token: Animation Presets ─────────────────────────
// Calm, slow, premium — never aggressive.

import type { Variants } from 'framer-motion'

export const duration = {
  fast:   0.2,
  normal: 0.4,
  slow:   0.7,
  breath: 8,   // breathing loop
}

export const ease = {
  soft:    [0.4, 0, 0.2, 1] as const,
  spring:  { type: 'spring', stiffness: 80, damping: 20 },
  gentle:  [0.25, 0.46, 0.45, 0.94] as const,
}

// ── Reusable Framer Motion variant presets ────────────────────────────────

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.soft } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.normal, ease: ease.soft } },
}

export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.soft } },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: duration.normal, ease: ease.soft } },
}

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: duration.slow, ease: ease.soft } },
}

export const slideRight: Variants = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: duration.slow, ease: ease.soft } },
}

export const cardHover = {
  rest:  { y: 0,  scale: 1,    transition: { duration: duration.normal, ease: ease.soft } },
  hover: { y: -4, scale: 1.01, transition: { duration: duration.normal, ease: ease.soft } },
}

export const buttonPress = {
  rest:  { scale: 1 },
  tap:   { scale: 0.95, transition: { duration: duration.fast } },
}

export const pageTransition: Variants = {
  initial:  { opacity: 0, y: 10 },
  animate:  { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.gentle } },
  exit:     { opacity: 0, y: -6, transition: { duration: duration.normal, ease: ease.soft } },
}

export const modalTransition: Variants = {
  hidden:  { opacity: 0, scale: 0.96, y: 20 },
  visible: { opacity: 1, scale: 1,    y: 0,
    transition: { duration: duration.normal, ease: ease.soft } },
  exit:    { opacity: 0, scale: 0.96, y: 20,
    transition: { duration: duration.fast, ease: ease.soft } },
}

export const staggerChildren = {
  visible: { transition: { staggerChildren: 0.08 } },
}

export const floatingAnim = {
  animate: {
    y: [-4, 4, -4],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const pulseGlow = {
  animate: {
    opacity: [0.6, 1, 0.6],
    scale:   [1, 1.05, 1],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}
