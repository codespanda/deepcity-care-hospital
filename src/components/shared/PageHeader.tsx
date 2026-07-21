import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

export function PageHeader({
  breadcrumb,
  title,
  description,
  actions,
}: {
  breadcrumb: string[]
  title: string
  description?: string
  actions?: ReactNode
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <div className="mb-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-3.5" />}
              <span className={i === breadcrumb.length - 1 ? 'text-foreground' : ''}>{crumb}</span>
            </span>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  )
}
