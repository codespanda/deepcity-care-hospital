export type Medicine = {
  name: string
  category: string
  supplier: string
  stock: number
  unit: string
  lowStockAlert: number
  unitPrice: number
  expiryDate: string
  status: 'In Stock' | 'Low Stock' | 'Out of Stock'
}

export const medicines: Medicine[] = [
  { name: 'Paracetamol 650mg', category: 'Pain Relief', supplier: 'MedPlus Ltd.', stock: 560, unit: 'Strip', lowStockAlert: 100, unitPrice: 12.5, expiryDate: '20 Sep 2025', status: 'In Stock' },
  { name: 'Amoxicillin 500mg', category: 'Antibiotic', supplier: 'HealthCare Pvt. Ltd.', stock: 320, unit: 'Strip', lowStockAlert: 80, unitPrice: 45, expiryDate: '15 Aug 2025', status: 'In Stock' },
  { name: 'Cetirizine 10mg', category: 'Antihistamine', supplier: 'MedPlus Ltd.', stock: 150, unit: 'Strip', lowStockAlert: 50, unitPrice: 18, expiryDate: '10 Jul 2025', status: 'In Stock' },
  { name: 'Omeprazole 20mg', category: 'Gastric', supplier: 'BioHealth', stock: 45, unit: 'Strip', lowStockAlert: 50, unitPrice: 28, expiryDate: '05 Jun 2025', status: 'Low Stock' },
  { name: 'Vitamin D3 60K', category: 'Vitamins', supplier: 'HealthCare Pvt. Ltd.', stock: 0, unit: 'Strip', lowStockAlert: 30, unitPrice: 35, expiryDate: '25 May 2025', status: 'Out of Stock' },
  { name: 'Azithromycin 500mg', category: 'Antibiotic', supplier: 'MedPlus Ltd.', stock: 80, unit: 'Strip', lowStockAlert: 40, unitPrice: 32, expiryDate: '18 Sep 2025', status: 'In Stock' },
  { name: 'Salbutamol Inhaler', category: 'Respiratory', supplier: 'AeroPharma', stock: 25, unit: 'Piece', lowStockAlert: 30, unitPrice: 120, expiryDate: '30 Aug 2025', status: 'Low Stock' },
  { name: 'ORS Powder', category: 'Electrolyte', supplier: 'BioHealth', stock: 300, unit: 'Sachet', lowStockAlert: 100, unitPrice: 6, expiryDate: '12 Nov 2025', status: 'In Stock' },
]
