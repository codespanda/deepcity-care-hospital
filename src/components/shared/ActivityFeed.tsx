import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const colorMap = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-emerald-100 text-emerald-600',
  purple: 'bg-violet-100 text-violet-600',
  orange: 'bg-amber-100 text-amber-600',
  red: 'bg-rose-100 text-rose-600',
  teal: 'bg-teal-100 text-teal-600',
} as const

export type ActivityItem = {
  icon: LucideIcon
  color: keyof typeof colorMap
  text: string
  subtext?: string
  time: string
}

export function ActivityFeed({
  title = 'Recent Activity',
  viewAllHref,
  items,
}: {
  title?: string
  viewAllHref?: string
  items: ActivityItem[]
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        {viewAllHref && (
          <a href={viewAllHref} className="text-sm font-medium text-primary hover:underline">
            View All
          </a>
        )}
      </div>
      <ul className="flex flex-col gap-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={cn('flex size-8 shrink-0 items-center justify-center rounded-full', colorMap[item.color])}>
              <item.icon className="size-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-foreground">{item.text}</p>
              {item.subtext && <p className="text-xs text-muted-foreground">{item.subtext}</p>}
            </div>
            <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
