import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AppSidebar } from '@/components/layout/AppSidebar'
import { Topbar } from '@/components/layout/Topbar'
import { Footer } from '@/components/layout/Footer'

function getInitialSidebarOpen() {
  if (typeof window === 'undefined') return true
  // Expanded by default on desktop, closed (off-canvas drawer) by default on mobile.
  return window.matchMedia('(min-width: 1024px)').matches
}

export function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(getInitialSidebarOpen)

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar open={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />

      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Topbar onToggleSidebar={() => setSidebarOpen((o) => !o)} />
        <main className="flex flex-1 flex-col px-4 py-6 sm:px-6">
          <div className="flex-1">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
