import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function TablePagination({
  showingFrom,
  showingTo,
  totalCount,
  totalPages,
  itemLabel = 'entries',
}: {
  showingFrom: number
  showingTo: number
  totalCount: number
  totalPages: number
  itemLabel?: string
}) {
  const [page, setPage] = useState(1)
  const pageNumbers = Array.from({ length: Math.min(totalPages, 4) }, (_, i) => i + 1)

  return (
    <div className="flex flex-col items-center justify-between gap-3 border-t border-border px-1 pt-4 text-sm sm:flex-row">
      <p className="text-muted-foreground">
        Showing {showingFrom} to {showingTo} of {totalCount.toLocaleString()} {itemLabel}
      </p>
      <div className="flex items-center gap-1">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-accent disabled:opacity-40"
        >
          <ChevronLeft className="size-4" />
        </button>
        {pageNumbers.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setPage(n)}
            className={cn(
              'flex size-8 items-center justify-center rounded-md text-sm font-medium',
              page === n ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent',
            )}
          >
            {n}
          </button>
        ))}
        {totalPages > 4 && <span className="px-1 text-muted-foreground">...</span>}
        {totalPages > 4 && (
          <button
            type="button"
            onClick={() => setPage(totalPages)}
            className="flex size-8 items-center justify-center rounded-md text-sm font-medium text-muted-foreground hover:bg-accent"
          >
            {totalPages}
          </button>
        )}
        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-accent disabled:opacity-40"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  )
}
