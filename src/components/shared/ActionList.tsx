import type { LucideIcon } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const colorMap = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-emerald-100 text-emerald-600',
  purple: 'bg-violet-100 text-violet-600',
  orange: 'bg-amber-100 text-amber-600',
  red: 'bg-rose-100 text-rose-600',
  teal: 'bg-teal-100 text-teal-600',
} as const

export type ActionListItem = {
  icon: LucideIcon
  color: keyof typeof colorMap
  label: string
  subtitle?: string
}

export function ActionList({
  title,
  items,
}: {
  title?: string
  items: ActionListItem[]
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      {title && <h3 className="mb-4 text-base font-semibold text-foreground">{title}</h3>}
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.label}>
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-accent"
            >
              <span className={cn('flex size-9 shrink-0 items-center justify-center rounded-lg', colorMap[item.color])}>
                <item.icon className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-foreground">{item.label}</span>
                {item.subtitle && <span className="block truncate text-xs text-muted-foreground">{item.subtitle}</span>}
              </span>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
