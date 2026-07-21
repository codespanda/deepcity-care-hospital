import { Plus, ClipboardList } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const statusTones = {
  Delivered: 'green',
  'In Transit': 'blue',
  Pending: 'amber',
  Cancelled: 'red',
} as const

const purchaseOrders = [
  { id: 'PO-2024-0142', supplier: 'MedPlus Ltd.', date: '18 May 2024', items: 12, amount: '₹48,500', status: 'Delivered' },
  { id: 'PO-2024-0141', supplier: 'HealthCare Pvt. Ltd.', date: '15 May 2024', items: 8, amount: '₹32,200', status: 'In Transit' },
  { id: 'PO-2024-0140', supplier: 'BioHealth', date: '12 May 2024', items: 5, amount: '₹18,750', status: 'Delivered' },
  { id: 'PO-2024-0139', supplier: 'AeroPharma', date: '08 May 2024', items: 3, amount: '₹9,600', status: 'Pending' },
  { id: 'PO-2024-0138', supplier: 'MedPlus Ltd.', date: '02 May 2024', items: 15, amount: '₹56,300', status: 'Delivered' },
  { id: 'PO-2024-0137', supplier: 'HealthCare Pvt. Ltd.', date: '28 Apr 2024', items: 6, amount: '₹21,000', status: 'Cancelled' },
]

export function PurchaseOrdersDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                <ClipboardList className="size-5" />
              </span>
              <div>
                <DialogTitle>Purchase Orders</DialogTitle>
                <DialogDescription>Track and manage medicine purchase orders.</DialogDescription>
              </div>
            </div>
            <Button size="sm" className="mr-8">
              <Plus className="size-4" /> New Order
            </Button>
          </div>
        </DialogHeader>

        <div className="max-h-[60vh] overflow-y-auto pt-1">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order No.</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchaseOrders.map((po) => (
                <TableRow key={po.id}>
                  <TableCell className="font-medium text-foreground">{po.id}</TableCell>
                  <TableCell>{po.supplier}</TableCell>
                  <TableCell>{po.date}</TableCell>
                  <TableCell>{po.items}</TableCell>
                  <TableCell className="font-medium text-foreground">{po.amount}</TableCell>
                  <TableCell>
                    <StatusBadge status={po.status} tone={statusTones[po.status as keyof typeof statusTones]} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  )
}
