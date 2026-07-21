export type InventoryItem = {
  name: string
  category: string
  sku: string
  unit: string
  inStock: number
  lowStockLevel: number
  status: 'In Stock' | 'Low Stock' | 'Out of Stock'
  unitPrice: number
  totalValue: number
}

export const inventoryItems: InventoryItem[] = [
  { name: 'Paracetamol 650mg', category: 'Medicines', sku: 'MED-00125', unit: 'Strip', inStock: 560, lowStockLevel: 100, status: 'In Stock', unitPrice: 12.5, totalValue: 7000 },
  { name: 'Disposable Syringe 5ml', category: 'Medical Supplies', sku: 'SUP-00458', unit: 'Piece', inStock: 1200, lowStockLevel: 200, status: 'In Stock', unitPrice: 2.8, totalValue: 3360 },
  { name: 'Nitrile Gloves (M)', category: 'Medical Supplies', sku: 'SUP-00214', unit: 'Box', inStock: 120, lowStockLevel: 50, status: 'In Stock', unitPrice: 180, totalValue: 21600 },
  { name: 'Hand Sanitizer 500ml', category: 'Consumables', sku: 'CON-00112', unit: 'Bottle', inStock: 45, lowStockLevel: 50, status: 'Low Stock', unitPrice: 95, totalValue: 4275 },
  { name: 'Vacutainer (EDTA)', category: 'Lab Supplies', sku: 'LAB-00321', unit: 'Piece', inStock: 35, lowStockLevel: 50, status: 'Low Stock', unitPrice: 15, totalValue: 525 },
  { name: 'Surgical Mask', category: 'Medical Supplies', sku: 'SUP-00105', unit: 'Box', inStock: 0, lowStockLevel: 100, status: 'Out of Stock', unitPrice: 150, totalValue: 0 },
  { name: 'IV Fluids (NS 500ml)', category: 'Fluids', sku: 'FLU-00098', unit: 'Bottle', inStock: 230, lowStockLevel: 100, status: 'In Stock', unitPrice: 38, totalValue: 8740 },
  { name: 'Cotton Roll', category: 'Medical Supplies', sku: 'SUP-00654', unit: 'Pack', inStock: 15, lowStockLevel: 30, status: 'Low Stock', unitPrice: 25, totalValue: 375 },
]
