import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export function SearchInput({
  placeholder,
  className,
}: {
  placeholder: string
  className?: string
}) {
  return (
    <div className={cn('relative min-w-[220px] flex-1', className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input placeholder={placeholder} className="h-9 pl-9" />
    </div>
  )
}
