export type BarListItem = {
  label: string
  value: string
  percent: number
  color?: string
}

export function BarListCard({
  title,
  viewAllHref,
  items,
  rank = false,
}: {
  title: string
  viewAllHref?: string
  items: BarListItem[]
  rank?: boolean
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
      <ul className="flex flex-col gap-3.5">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-3 text-sm">
            {rank && (
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-muted-foreground">
                {i + 1}
              </span>
            )}
            <span className="w-32 shrink-0 truncate text-muted-foreground">{item.label}</span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
              <span
                className="block h-full rounded-full"
                style={{ width: `${Math.min(item.percent, 100)}%`, backgroundColor: item.color ?? 'var(--color-primary)' }}
              />
            </span>
            <span className="w-20 shrink-0 text-right font-medium text-foreground">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
