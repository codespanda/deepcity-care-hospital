import { Plus, Truck, Phone } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const suppliers = [
  { name: 'MedPlus Ltd.', contact: 'Sanjay Kumar', phone: '98765 43220', category: 'Medicines', items: 148, status: 'Active' },
  { name: 'HealthCare Pvt. Ltd.', contact: 'Anita Sharma', phone: '98765 43221', category: 'Medical Supplies', items: 96, status: 'Active' },
  { name: 'BioHealth', contact: 'Rakesh Verma', phone: '98765 43222', category: 'Consumables', items: 64, status: 'Active' },
  { name: 'AeroPharma', contact: 'Meena Joshi', phone: '98765 43223', category: 'Respiratory', items: 22, status: 'Inactive' },
]

export function SupplierManagementDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                <Truck className="size-5" />
              </span>
              <div>
                <DialogTitle>Supplier Management</DialogTitle>
                <DialogDescription>Manage your medicine suppliers and vendors.</DialogDescription>
              </div>
            </div>
            <Button size="sm" className="mr-8">
              <Plus className="size-4" /> Add Supplier
            </Button>
          </div>
        </DialogHeader>

        <div className="max-h-[60vh] overflow-y-auto pt-1">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Supplier</TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Items Supplied</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {suppliers.map((s) => (
                <TableRow key={s.name}>
                  <TableCell className="font-medium text-foreground">{s.name}</TableCell>
                  <TableCell>
                    <p className="text-foreground">{s.contact}</p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Phone className="size-3" /> {s.phone}
                    </p>
                  </TableCell>
                  <TableCell>{s.category}</TableCell>
                  <TableCell>{s.items}</TableCell>
                  <TableCell>
                    <StatusBadge status={s.status} />
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
