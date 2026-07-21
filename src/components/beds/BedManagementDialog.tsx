import { useState } from 'react'
import { BedDouble, Search } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { rooms as initialRooms } from '@/data/beds'

export function BedManagementDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [rooms, setRooms] = useState(initialRooms)

  const toggleStatus = (number: string) => {
    setRooms((prev) =>
      prev.map((r) =>
        r.number === number
          ? {
              ...r,
              status: r.status === 'Available' ? 'Occupied' : 'Available',
              occupied: r.status === 'Available' ? r.totalBeds : Math.max(0, r.totalBeds - r.available),
              available: r.status === 'Available' ? 0 : r.totalBeds - Math.max(0, r.totalBeds - r.available),
            }
          : r,
      ),
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
              <BedDouble className="size-5" />
            </span>
            <div>
              <DialogTitle>Bed Management</DialogTitle>
              <DialogDescription>Quickly view and update bed status across all rooms.</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search by room number or department..." className="h-9 pl-9" />
        </div>

        <div className="max-h-[55vh] overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {rooms.map((r) => (
              <li key={r.number} className="flex items-center gap-3 rounded-lg border border-border p-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                  <BedDouble className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Room {r.number} <span className="font-normal text-muted-foreground">· {r.type}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {r.department} · {r.floor} · {r.occupied}/{r.totalBeds} beds occupied
                  </p>
                </div>
                <StatusBadge status={r.status} />
                <Button variant="outline" size="sm" onClick={() => toggleStatus(r.number)}>
                  Mark {r.status === 'Available' ? 'Occupied' : 'Available'}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
