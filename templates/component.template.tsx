// TEMPLATE — a new reusable shared component. Copy into src/components/shared/MyWidget.tsx
// (or src/components/<feature>/ if it's specific to one page, like src/components/pharmacy/).
//
// Conventions used everywhere in this codebase:
//  - rounded-xl border border-border bg-card p-5   -> the standard "card" shell
//  - text-base font-semibold text-foreground        -> card title
//  - text-sm font-medium text-primary hover:underline -> a "View All" link in the header
//  - Tailwind semantic tokens (bg-card, text-foreground, border-border, ...) so the
//    component works in both light and dark mode automatically.

import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type MyWidgetItem = {
  label: string
  value: string
}

export function MyWidget({
  title,
  icon: Icon,
  items,
  viewAllHref,
  className,
}: {
  title: string
  icon?: LucideIcon
  items: MyWidgetItem[]
  viewAllHref?: string
  className?: string
}) {
  return (
    <div className={cn('rounded-xl border border-border bg-card p-5', className)}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-base font-semibold text-foreground">
          {Icon && <Icon className="size-4 text-primary" />}
          {title}
        </h3>
        {viewAllHref && (
          <a href={viewAllHref} className="text-sm font-medium text-primary hover:underline">
            View All
          </a>
        )}
      </div>

      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.label} className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{item.label}</span>
            <span className="font-medium text-foreground">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
