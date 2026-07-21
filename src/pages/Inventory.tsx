import { useState } from 'react'
import {
  Package,
  Boxes,
  TriangleAlert,
  XCircle,
  ShoppingCart,
  FileBarChart2,
  ClipboardList,
  Plus,
  ChevronDown,
  Eye,
  Pencil,
  MoreVertical,
  Layers,
  ArrowLeftRight,
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
import { ActivityFeed, type ActivityItem } from '@/components/shared/ActivityFeed'
import { EntityFormDialog } from '@/components/shared/EntityFormDialog'
import { InventoryReportsDialog } from '@/components/inventory/InventoryReportsDialog'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { inventoryItems } from '@/data/inventory'
import { inventoryFields, stockRequestFields } from '@/lib/formFields'

const stockAlerts = [
  { name: 'Surgical Mask', meta: '0 in Stock' },
  { name: 'Vacutainer (EDTA)', meta: '35 in Stock' },
  { name: 'Hand Sanitizer 500ml', meta: '45 in Stock' },
]

const inventorySummary = [
  { name: 'Medicines', value: 412, color: '#3b82f6' },
  { name: 'Medical Supplies', value: 356, color: '#22c55e' },
  { name: 'Consumables', value: 198, color: '#8b5cf6' },
  { name: 'Lab Supplies', value: 124, color: '#f59e0b' },
  { name: 'Fluids', value: 88, color: '#06b6d4' },
  { name: 'Others', value: 67, color: '#cbd5e1' },
]

const quickActions: QuickAction[] = [
  { icon: Plus, label: 'Add New Item', color: 'blue' },
  { icon: Layers, label: 'Stock Adjustment', color: 'green' },
  { icon: ArrowLeftRight, label: 'Stock Transfer', color: 'purple' },
  { icon: ClipboardList, label: 'Purchase Order', color: 'orange' },
  { icon: Truck, label: 'Suppliers', color: 'red' },
  { icon: FileBarChart2, label: 'Inventory Reports', color: 'teal' },
]

const recentActivity: ActivityItem[] = [
  { icon: Pencil, color: 'blue', text: 'Paracetamol 650mg stock updated', time: '10:30 AM' },
  { icon: Plus, color: 'green', text: 'Surgical Mask added to inventory', time: '09:45 AM' },
  { icon: ArrowLeftRight, color: 'purple', text: 'Stock transfer to Pharmacy', time: 'Yesterday' },
  { icon: Layers, color: 'orange', text: 'Hand Sanitizer stock adjusted', time: '12 May 2024' },
]

const valueTrend = [
  { month: 'Jan', value: 12 },
  { month: 'Feb', value: 15 },
  { month: 'Mar', value: 13 },
  { month: 'Apr', value: 17 },
  { month: 'May', value: 16 },
  { month: 'Jun', value: 19 },
]

const topCategories = [
  { label: 'Medicines', value: '₹7,45,230', percent: 100 },
  { label: 'Medical Supplies', value: '₹5,32,410', percent: 71 },
  { label: 'Consumables', value: '₹2,11,870', percent: 28 },
  { label: 'Lab Supplies', value: '₹1,26,340', percent: 17 },
  { label: 'Fluids', value: '₹68,950', percent: 9 },
]

export function Inventory() {
  const [addItemOpen, setAddItemOpen] = useState(false)
  const [reportsOpen, setReportsOpen] = useState(false)
  const [stockRequestOpen, setStockRequestOpen] = useState(false)

  return (
    <div>
      <PageHeader
        breadcrumb={['Inventory', 'Overview']}
        title="Inventory"
        description="Track and manage hospital inventory and supplies."
        actions={
          <>
            <Button variant="outline" onClick={() => setReportsOpen(true)}>
              <FileBarChart2 className="size-4" /> Inventory Reports
            </Button>
            <Button variant="outline" onClick={() => setStockRequestOpen(true)}>
              <ClipboardList className="size-4" /> Stock Request
            </Button>
            <Button onClick={() => setAddItemOpen(true)}>
              <Plus className="size-4" /> Add New Item <ChevronDown className="size-4" />
            </Button>
          </>
        }
      />

      <InventoryReportsDialog open={reportsOpen} onOpenChange={setReportsOpen} />

      <EntityFormDialog
        open={stockRequestOpen}
        onOpenChange={setStockRequestOpen}
        title="Stock Request"
        description="Request additional stock for an item."
        icon={ClipboardList}
        fields={stockRequestFields}
        submitLabel="Submit Request"
      />

      <EntityFormDialog
        open={addItemOpen}
        onOpenChange={setAddItemOpen}
        title="Add New Item"
        description="Add a new item to the hospital inventory."
        icon={Package}
        fields={inventoryFields}
        submitLabel="Add Item"
      />

      <div className="mb-5 flex flex-wrap gap-4">
        <StatCard icon={Package} color="blue" label="Total Items" value="1,245" delta="8.4%" />
        <StatCard icon={Boxes} color="green" label="In Stock" value="876" delta="6.7%" />
        <StatCard icon={TriangleAlert} color="orange" label="Low Stock Items" value="58" delta="12.3%" deltaDirection="down" />
        <StatCard icon={XCircle} color="red" label="Out of Stock" value="17" delta="4.2%" />
        <StatCard icon={ShoppingCart} color="purple" label="Total Value" value="₹18,75,430" delta="10.6%" />
      </div>

      <FilterBar>
        <SearchInput placeholder="Search items, categories, or codes..." />
        <FilterSelect placeholder="Category" options={['All Categories', 'Medicines', 'Medical Supplies', 'Consumables']} />
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
                  <TableHead>Item Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>SKU / Code</TableHead>
                  <TableHead>In Stock</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Total Value</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventoryItems.map((item) => (
                  <TableRow key={item.sku}>
                    <TableCell className="font-medium text-foreground">{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.sku}</TableCell>
                    <TableCell>
                      {item.inStock} {item.unit}
                    </TableCell>
                    <TableCell>₹{item.unitPrice.toFixed(2)}</TableCell>
                    <TableCell>₹{item.totalValue.toLocaleString('en-IN')}.00</TableCell>
                    <TableCell>
                      <StatusBadge status={item.status} />
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
          <TablePagination showingFrom={1} showingTo={8} totalCount={1245} totalPages={156} itemLabel="items" />
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Stock Alerts</h3>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                View All
              </a>
            </div>
            <ul className="flex flex-col gap-3.5">
              {stockAlerts.map((s) => (
                <li key={s.name} className="flex items-center justify-between gap-2 text-sm">
                  <span className="flex items-center gap-2.5 text-foreground">
                    <TriangleAlert className="size-4 shrink-0 text-rose-500" />
                    {s.name}
                  </span>
                  <span className="shrink-0 text-xs font-medium text-rose-600">{s.meta}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-medium text-primary hover:underline">+ 14 more alerts</p>
          </div>

          <DonutCard title="Inventory Summary" data={inventorySummary} centerValue="1,245" centerLabel="Total Items" />
          <QuickActionsGrid actions={quickActions} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TrendChartCard
          className="lg:col-span-2"
          title="Inventory Value Trend"
          type="line"
          data={valueTrend}
          xKey="month"
          series={[{ key: 'value', label: 'Value', color: '#3b82f6' }]}
          yFormatter={(v) => `${v}L`}
        />
        <BarListCard title="Top Categories by Value" items={topCategories} />
      </div>
      <div className="mt-5">
        <ActivityFeed items={recentActivity} />
      </div>
    </div>
  )
}
