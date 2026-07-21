export type Invoice = {
  id: string
  patient: string
  patientId: string
  avatar: string
  department: string
  invoiceDate: string
  dueDate: string
  amount: number
  status: 'Paid' | 'Pending' | 'Overdue'
  paymentStatus: 'Paid' | 'Unpaid' | 'Partial'
}

export const invoices: Invoice[] = [
  { id: 'INV-2024-1248', patient: 'Priya Sharma', patientId: 'PT1001', avatar: 'https://i.pravatar.cc/100?img=25', department: 'Cardiology', invoiceDate: '14 May 2024', dueDate: '21 May 2024', amount: 12450, status: 'Pending', paymentStatus: 'Unpaid' },
  { id: 'INV-2024-1247', patient: 'Rohan Verma', patientId: 'PT1002', avatar: 'https://i.pravatar.cc/100?img=53', department: 'General Medicine', invoiceDate: '14 May 2024', dueDate: '14 May 2024', amount: 2850, status: 'Paid', paymentStatus: 'Paid' },
  { id: 'INV-2024-1246', patient: 'Ananya Gupta', patientId: 'PT1003', avatar: 'https://i.pravatar.cc/100?img=26', department: 'Orthopedics', invoiceDate: '13 May 2024', dueDate: '20 May 2024', amount: 8600, status: 'Pending', paymentStatus: 'Partial' },
  { id: 'INV-2024-1245', patient: 'Suresh Patel', patientId: 'PT1004', avatar: 'https://i.pravatar.cc/100?img=59', department: 'Neurology', invoiceDate: '13 May 2024', dueDate: '18 May 2024', amount: 4300, status: 'Paid', paymentStatus: 'Paid' },
  { id: 'INV-2024-1244', patient: 'Neha Singh', patientId: 'PT1005', avatar: 'https://i.pravatar.cc/100?img=28', department: 'Dermatology', invoiceDate: '12 May 2024', dueDate: '19 May 2024', amount: 1950, status: 'Overdue', paymentStatus: 'Unpaid' },
  { id: 'INV-2024-1243', patient: 'Amit Kumar', patientId: 'PT1006', avatar: 'https://i.pravatar.cc/100?img=60', department: 'Pediatrics', invoiceDate: '12 May 2024', dueDate: '17 May 2024', amount: 3600, status: 'Paid', paymentStatus: 'Paid' },
  { id: 'INV-2024-1242', patient: 'Kavita Reddy', patientId: 'PT1007', avatar: 'https://i.pravatar.cc/100?img=29', department: 'Gynecology', invoiceDate: '11 May 2024', dueDate: '16 May 2024', amount: 2200, status: 'Pending', paymentStatus: 'Partial' },
  { id: 'INV-2024-1241', patient: 'Vikram Joshi', patientId: 'PT1008', avatar: 'https://i.pravatar.cc/100?img=61', department: 'ENT', invoiceDate: '11 May 2024', dueDate: '15 May 2024', amount: 1750, status: 'Paid', paymentStatus: 'Paid' },
]
