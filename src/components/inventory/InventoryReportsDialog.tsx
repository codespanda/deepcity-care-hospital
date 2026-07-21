import { FileBarChart2, Download, Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const reports = [
  { name: 'Monthly Stock Summary', category: 'All Categories', period: 'May 2024', generatedOn: '01 Jun 2024', format: 'PDF' },
  { name: 'Low Stock Alert Report', category: 'Medical Supplies', period: 'This Week', generatedOn: '21 Jul 2026', format: 'XLSX' },
  { name: 'Category-wise Valuation', category: 'All Categories', period: 'Q2 2024', generatedOn: '01 Jul 2024', format: 'PDF' },
  { name: 'Expiry Report', category: 'Medicines', period: 'Next 90 Days', generatedOn: '15 Jul 2026', format: 'XLSX' },
  { name: 'Stock Movement Report', category: 'All Categories', period: 'June 2024', generatedOn: '01 Jul 2024', format: 'PDF' },
]

export function InventoryReportsDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                <FileBarChart2 className="size-5" />
              </span>
              <div>
                <DialogTitle>Inventory Reports</DialogTitle>
                <DialogDescription>Generate and download inventory reports.</DialogDescription>
              </div>
            </div>
            <Button size="sm" className="mr-8">
              <Plus className="size-4" /> Generate Report
            </Button>
          </div>
        </DialogHeader>

        <div className="max-h-[60vh] overflow-y-auto pt-1">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Generated On</TableHead>
                <TableHead>Format</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((r) => (
                <TableRow key={r.name}>
                  <TableCell className="font-medium text-foreground">{r.name}</TableCell>
                  <TableCell>{r.category}</TableCell>
                  <TableCell>{r.period}</TableCell>
                  <TableCell>{r.generatedOn}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{r.format}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end">
                      <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                        <Download className="size-4" />
                      </button>
                    </div>
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
