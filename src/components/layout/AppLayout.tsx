import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import BottomNavigation from './BottomNavigation'
import AmbientBlobs from '@/components/ui/AmbientBlobs'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <AmbientBlobs />
      <TopBar />
      {/* Page content — padded for fixed top bar + bottom nav */}
      <main className="pt-20 pb-28">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  )
}
