import { useState } from 'react'
import {
  Package,
  Boxes,
  TriangleAlert,
  XCircle,
  ShoppingCart,
  ClipboardList,
  Users,
  Plus,
  ChevronDown,
  Eye,
  Pencil,
  MoreVertical,
  ClipboardPlus,
  Layers,
  FileBarChart2,
  FolderKanban,
  Truck,
} from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { StatCard } from '@/components/shared/StatCard'
import { FilterBar } from '@/components/shared/FilterBar'
import { SearchInput } from '@/components/shared/SearchInput'
import { FilterSelect } from '@/components/shared/FilterSelect'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { TablePagination } from '@/components/shared/TablePagination'
import { DonutCard } from '@/components/shared/DonutCard'
import { TrendChartCard } from '@/components/shared/TrendChartCard'
import { BarListCard } from '@/components/shared/BarListCard'
import { QuickActionsGrid, type QuickAction } from '@/components/shared/QuickActionsGrid'
import { EntityFormDialog } from '@/components/shared/EntityFormDialog'
import { PurchaseOrdersDialog } from '@/components/pharmacy/PurchaseOrdersDialog'
import { SupplierManagementDialog } from '@/components/pharmacy/SupplierManagementDialog'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { medicines } from '@/data/medicines'
import { medicineFields } from '@/lib/formFields'

const stockValueSummary = [
  { name: 'In Stock', value: 912450, color: '#22c55e' },
  { name: 'Low Stock', value: 125600, color: '#f59e0b' },
  { name: 'Out of Stock', value: 85400, color: '#f43f5e' },
  { name: 'Expired', value: 61000, color: '#8b5cf6' },
  { name: 'Others', value: 101000, color: '#cbd5e1' },
]

const expiryAlerts = [
  { name: 'Amoxicillin 500mg', meta: 'Expires in 15 days', date: '15 May 2025' },
  { name: 'Cetirizine 10mg', meta: 'Expires in 30 days', date: '10 Jun 2025' },
  { name: 'Omeprazole 20mg', meta: 'Expires in 45 days', date: '25 Jun 2025' },
]

const quickActions: QuickAction[] = [
  { icon: Plus, label: 'Add Medicine', color: 'blue' },
  { icon: ClipboardPlus, label: 'New Purchase Order', color: 'green' },
  { icon: Layers, label: 'Stock Adjustment', color: 'purple' },
  { icon: FileBarChart2, label: 'View Sales Report', color: 'orange' },
  { icon: FolderKanban, label: 'Medicine Categories', color: 'red' },
  { icon: Truck, label: 'Supplier Management', color: 'teal' },
]

const salesTrend = [
  { day: '1 May', sales: 40 },
  { day: '9 May', sales: 90 },
  { day: '17 May', sales: 65 },
  { day: '21 May', sales: 140 },
  { day: '31 May', sales: 175 },
]

const topSelling = [
  { label: 'Paracetamol 650mg', value: '₹1,25,450', percent: 100 },
  { label: 'Amoxicillin 500mg', value: '₹98,230', percent: 78 },
  { label: 'Cetirizine 10mg', value: '₹74,800', percent: 60 },
  { label: 'Azithromycin 500mg', value: '₹65,120', percent: 52 },
  { label: 'ORS Powder', value: '₹48,600', percent: 39 },
]

const categorySales = [
  { name: 'Pain Relief', value: 30, color: '#3b82f6' },
  { name: 'Antibiotics', value: 25, color: '#22c55e' },
  { name: 'Vitamins', value: 15, color: '#8b5cf6' },
  { name: 'Gastric', value: 12, color: '#f59e0b' },
  { name: 'Others', value: 18, color: '#cbd5e1' },
]

export function Pharmacy() {
  const [addMedicineOpen, setAddMedicineOpen] = useState(false)
  const [purchaseOrdersOpen, setPurchaseOrdersOpen] = useState(false)
  const [supplierManagementOpen, setSupplierManagementOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['Pharmacy', 'Overview']}
        title="Pharmacy"
        description="Manage medicines, prescriptions and stock."
        actions={
          <>
            <Button variant="outline" onClick={() => setPurchaseOrdersOpen(true)}>
              <ClipboardList className="size-4" /> Purchase Orders
            </Button>
            <Button variant="outline" onClick={() => setSupplierManagementOpen(true)}>
              <Users className="size-4" /> Supplier Management
            </Button>
            <Button onClick={() => setAddMedicineOpen(true)}>
              <Plus className="size-4" /> Add Medicine <ChevronDown className="size-4" />
            </Button>
          </>
        }
      />

      <PurchaseOrdersDialog open={purchaseOrdersOpen} onOpenChange={setPurchaseOrdersOpen} />
      <SupplierManagementDialog open={supplierManagementOpen} onOpenChange={setSupplierManagementOpen} />

      <EntityFormDialog
        open={addMedicineOpen}
        onOpenChange={setAddMedicineOpen}
        title="Add Medicine"
        description="Add a new medicine to the pharmacy inventory."
        icon={Package}
        fields={medicineFields}
        submitLabel="Add Medicine"
      />

      <div className="mb-5 flex flex-wrap gap-4">
        <StatCard icon={Package} color="blue" label="Total Medicines" value="1,568" delta="9.3%" />
        <StatCard icon={Boxes} color="green" label="In Stock" value="1,124" delta="8.6%" />
        <StatCard icon={TriangleAlert} color="orange" label="Low Stock" value="96" delta="5.4%" deltaDirection="down" />
        <StatCard icon={XCircle} color="red" label="Out of Stock" value="24" delta="12.1%" deltaDirection="down" />
        <StatCard icon={ShoppingCart} color="purple" label="Total Sales (This Month)" value="₹8,45,210" delta="14.2%" />
      </div>

      <FilterBar>
        <SearchInput placeholder="Search medicines by name, type..." />
        <FilterSelect placeholder="Category" options={['All Categories', 'Pain Relief', 'Antibiotic', 'Vitamins']} />
        <FilterSelect placeholder="Supplier" options={['All Suppliers', 'MedPlus Ltd.', 'HealthCare Pvt. Ltd.']} />
        <FilterSelect placeholder="Status" options={['All Status', 'In Stock', 'Low Stock', 'Out of Stock']} />
        <Button variant="outline" size="sm">
          Filter
        </Button>
      </FilterBar>

      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <div className="mb-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Medicine Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medicines.map((m) => (
                  <TableRow key={m.name}>
                    <TableCell className="font-medium text-foreground">{m.name}</TableCell>
                    <TableCell>{m.category}</TableCell>
                    <TableCell>{m.supplier}</TableCell>
                    <TableCell>
                      {m.stock} {m.unit}
                    </TableCell>
                    <TableCell>₹{m.unitPrice.toFixed(2)}</TableCell>
                    <TableCell>{m.expiryDate}</TableCell>
                    <TableCell>
                      <StatusBadge status={m.status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-1">
                        <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                          <Eye className="size-4" />
                        </button>
                        <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                          <Pencil className="size-4" />
                        </button>
                        <button className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent">
                          <MoreVertical className="size-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <TablePagination showingFrom={1} showingTo={8} totalCount={1568} totalPages={196} itemLabel="medicines" />
        </div>

        <div className="flex flex-col gap-5">
          <DonutCard title="Stock Value Summary" data={stockValueSummary} centerValue="₹12,85,450" centerLabel="Total Value" />

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Expiry Alerts</h3>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                View All
              </a>
            </div>
            <ul className="flex flex-col gap-3.5">
              {expiryAlerts.map((e) => (
                <li key={e.name} className="flex items-start gap-2.5 text-sm">
                  <TriangleAlert className="mt-0.5 size-4 shrink-0 text-amber-500" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground">{e.name}</p>
                    <p className="text-xs text-muted-foreground">{e.meta}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{e.date}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-medium text-primary hover:underline">+ 12 more alerts</p>
          </div>

          <QuickActionsGrid actions={quickActions} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TrendChartCard
          title="Sales Trend (This Month)"
          type="area"
          data={salesTrend}
          xKey="day"
          series={[{ key: 'sales', label: 'Sales', color: '#3b82f6' }]}
          yFormatter={(v) => `${v}K`}
        />
        <BarListCard title="Top Selling Medicines" items={topSelling} />
        <DonutCard title="Category Sales" data={categorySales} centerValue="₹8,45,210" centerLabel="Total Sales" />
      </div>
    </div>
  )
}
