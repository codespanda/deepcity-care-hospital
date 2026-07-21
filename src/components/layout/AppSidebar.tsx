import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HeartPulse, Headset } from 'lucide-react'
import { navItems, authNavItems } from '@/lib/nav'
import { Button } from '@/components/ui/button'
import { GetSupportDialog } from '@/components/shared/GetSupportDialog'
import { cn } from '@/lib/utils'

export function AppSidebar({ collapsed }: { collapsed: boolean }) {
  const [supportOpen, setSupportOpen] = useState(false)

  return (
    <aside
      className={cn(
        'flex h-screen flex-col border-r border-border bg-sidebar shrink-0 sticky top-0 transition-all duration-200',
        collapsed ? 'w-[76px]' : 'w-64',
      )}
    >
      <div className="flex h-16 items-center gap-2 px-4 border-b border-border">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <HeartPulse className="size-5" />
        </div>
        {!collapsed && (
          <div className="leading-tight">
            <p className="text-lg font-bold text-primary">DeepCity Care</p>
            <p className="-mt-1 text-sm font-semibold text-foreground">Hospital</p>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
                    isActive && 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
                    collapsed && 'justify-center px-2',
                  )
                }
                title={collapsed ? item.label : undefined}
              >
                <item.icon className="size-[18px] shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={cn('mt-4 border-t border-border pt-4', collapsed && 'mt-2 pt-2')}>
          {!collapsed && (
            <p className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Authentication</p>
          )}
          <ul className="flex flex-col gap-1">
            {authNavItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
                      isActive && 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
                      collapsed && 'justify-center px-2',
                    )
                  }
                  title={collapsed ? item.label : undefined}
                >
                  <item.icon className="size-[18px] shrink-0" />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="p-3">
        <div
          className={cn(
            'rounded-xl bg-accent p-4',
            collapsed && 'flex flex-col items-center gap-2 px-2',
          )}
        >
          <Headset className="size-6 text-primary" />
          {!collapsed && (
            <>
              <p className="mt-2 text-sm font-semibold text-foreground">Need Help?</p>
              <p className="text-xs text-muted-foreground">Contact our support team</p>
            </>
          )}
          <Button size={collapsed ? 'icon' : 'sm'} className="mt-3 w-full" onClick={() => setSupportOpen(true)}>
            {collapsed ? <Headset className="size-4" /> : 'Get Support'}
          </Button>
        </div>
      </div>

      <GetSupportDialog open={supportOpen} onOpenChange={setSupportOpen} />
    </aside>
  )
}
