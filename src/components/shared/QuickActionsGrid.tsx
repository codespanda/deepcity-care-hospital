import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const colorMap = {
  blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
  green: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100',
  purple: 'bg-violet-50 text-violet-600 hover:bg-violet-100',
  orange: 'bg-amber-50 text-amber-600 hover:bg-amber-100',
  red: 'bg-rose-50 text-rose-600 hover:bg-rose-100',
  teal: 'bg-teal-50 text-teal-600 hover:bg-teal-100',
} as const

export type QuickAction = {
  icon: LucideIcon
  label: string
  color: keyof typeof colorMap
}

export function QuickActionsGrid({ actions }: { actions: QuickAction[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="mb-4 text-base font-semibold text-foreground">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            className={cn(
              'flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
              colorMap[action.color],
            )}
          >
            <action.icon className="size-4 shrink-0" />
            <span className="truncate">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
