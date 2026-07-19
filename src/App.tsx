import { Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AppLayout from '@/components/layout/AppLayout'
import SanctuaryPage   from '@/pages/SanctuaryPage'
import InsightsPage    from '@/pages/InsightsPage'
import TherapistsPage  from '@/pages/TherapistsPage'
import LibraryPage     from '@/pages/LibraryPage'
import ChatPage        from '@/pages/ChatPage'
import OnboardingPage  from '@/pages/OnboardingPage'
import LoginPage       from '@/pages/LoginPage'
import RegisterPage    from '@/pages/RegisterPage'

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* Auth — no layout chrome */}
        <Route path="/login"      element={<LoginPage />} />
        <Route path="/register"   element={<RegisterPage />} />

        {/* Onboarding — no layout chrome */}
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Main app — shared layout */}
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/sanctuary" replace />} />
          <Route path="/sanctuary"  element={<SanctuaryPage />} />
          <Route path="/insights"   element={<InsightsPage />} />
          <Route path="/therapists" element={<TherapistsPage />} />
          <Route path="/library"    element={<LibraryPage />} />
          <Route path="/chat"       element={<ChatPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/sanctuary" replace />} />
      </Routes>
    </AnimatePresence>
  )
}
