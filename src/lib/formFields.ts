import type { FormField } from '@/components/shared/EntityFormDialog'

const doctorNames = [
  'Dr. Arjun Mehta',
  'Dr. Neha Singh',
  'Dr. Raj Verma',
  'Dr. Priya Gupta',
  'Dr. Amit Patel',
  'Dr. Kavita Reddy',
  'Dr. Suresh Iyer',
  'Dr. Meera Nair',
]

const departmentNames = [
  'Cardiology',
  'Orthopedics',
  'Neurology',
  'Dermatology',
  'General Medicine',
  'Pediatrics',
  'Ophthalmology',
  'ENT',
]

export const appointmentFields: FormField[] = [
  { name: 'patient', label: 'Patient Name', type: 'text', placeholder: 'e.g. Priya Sharma', span: 2 },
  { name: 'doctor', label: 'Doctor', type: 'select', options: doctorNames },
  { name: 'department', label: 'Department', type: 'select', options: departmentNames },
  { name: 'appointmentType', label: 'Appointment Type', type: 'select', options: ['Consultation', 'Follow-up', 'Review', 'Surgery'] },
  { name: 'date', label: 'Date', type: 'date' },
  { name: 'time', label: 'Time', type: 'time' },
  { name: 'room', label: 'Room', type: 'text', placeholder: 'e.g. 203' },
  { name: 'reason', label: 'Reason for Visit', type: 'textarea', placeholder: 'Briefly describe the reason for this visit...', span: 2 },
]

export const doctorFields: FormField[] = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'e.g. Dr. Rohan Kapoor', span: 2 },
  { name: 'department', label: 'Department', type: 'select', options: departmentNames },
  { name: 'specialty', label: 'Specialty', type: 'text', placeholder: 'e.g. Cardiologist' },
  { name: 'experience', label: 'Experience', type: 'text', placeholder: 'e.g. 5 Years' },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'XXXXXXXXXX' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'name@deepcitycare.com' },
  { name: 'status', label: 'Status', type: 'select', options: ['Active', 'On Leave', 'Inactive'] },
]

export const patientFields: FormField[] = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'e.g. Priya Sharma', span: 2 },
  { name: 'age', label: 'Age', type: 'number', placeholder: 'e.g. 28' },
  { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'] },
  { name: 'bloodGroup', label: 'Blood Group', type: 'select', options: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'] },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'XXXXXXXXXX' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'name@email.com' },
  { name: 'primaryDoctor', label: 'Primary Doctor', type: 'select', options: doctorNames },
  { name: 'department', label: 'Department', type: 'select', options: departmentNames },
]

export const departmentFields: FormField[] = [
  { name: 'name', label: 'Department Name', type: 'text', placeholder: 'e.g. Oncology', span: 2 },
  { name: 'head', label: 'Head of Department', type: 'text', placeholder: 'e.g. Dr. Arjun Mehta', span: 2 },
  { name: 'floor', label: 'Floor', type: 'select', options: ['1st Floor', '2nd Floor', '3rd Floor', '4th Floor'] },
  { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] },
  { name: 'staff', label: 'Staff Count', type: 'number', placeholder: 'e.g. 12' },
  { name: 'beds', label: 'Total Beds', type: 'number', placeholder: 'e.g. 20' },
]

export const invoiceFields: FormField[] = [
  { name: 'patient', label: 'Patient Name', type: 'text', placeholder: 'e.g. Priya Sharma', span: 2 },
  { name: 'department', label: 'Department', type: 'select', options: departmentNames },
  { name: 'paymentStatus', label: 'Payment Status', type: 'select', options: ['Paid', 'Partial', 'Unpaid'] },
  { name: 'invoiceDate', label: 'Invoice Date', type: 'date' },
  { name: 'dueDate', label: 'Due Date', type: 'date' },
  { name: 'amount', label: 'Amount (₹)', type: 'number', placeholder: 'e.g. 2500' },
]

export const medicineFields: FormField[] = [
  { name: 'name', label: 'Medicine Name', type: 'text', placeholder: 'e.g. Paracetamol 650mg', span: 2 },
  { name: 'category', label: 'Category', type: 'select', options: ['Pain Relief', 'Antibiotic', 'Antihistamine', 'Gastric', 'Vitamins', 'Respiratory', 'Electrolyte'] },
  { name: 'supplier', label: 'Supplier', type: 'text', placeholder: 'e.g. MedPlus Ltd.' },
  { name: 'stock', label: 'Stock Quantity', type: 'number', placeholder: 'e.g. 200' },
  { name: 'unitPrice', label: 'Unit Price (₹)', type: 'number', placeholder: 'e.g. 12.50' },
  { name: 'expiryDate', label: 'Expiry Date', type: 'date' },
]

export const labReportFields: FormField[] = [
  { name: 'patient', label: 'Patient Name', type: 'text', placeholder: 'e.g. Priya Sharma', span: 2 },
  { name: 'testName', label: 'Test Name', type: 'text', placeholder: 'e.g. Complete Blood Count (CBC)', span: 2 },
  { name: 'department', label: 'Department', type: 'select', options: ['Pathology', 'Microbiology', 'Immunology', 'Cardiology'] },
  { name: 'sampleDate', label: 'Sample Date', type: 'date' },
  { name: 'reportFile', label: 'Report File', type: 'file', span: 2 },
]

export const roomFields: FormField[] = [
  { name: 'number', label: 'Room Number', type: 'text', placeholder: 'e.g. 304' },
  { name: 'roomType', label: 'Room Type', type: 'select', options: ['General', 'Deluxe', 'ICU', 'Private', 'Semi-Private'] },
  { name: 'floor', label: 'Floor', type: 'select', options: ['1st Floor', '2nd Floor', '3rd Floor', '4th Floor'] },
  { name: 'department', label: 'Department', type: 'select', options: departmentNames },
  { name: 'totalBeds', label: 'Total Beds', type: 'number', placeholder: 'e.g. 2', span: 2 },
]

export const roomTransferFields: FormField[] = [
  { name: 'patient', label: 'Patient Name', type: 'text', placeholder: 'e.g. Priya Sharma', span: 2 },
  { name: 'fromRoom', label: 'From Room', type: 'select', options: ['101 - General Ward', '102 - Deluxe Room', '201 - ICU', '202 - Private Room', '203 - Semi-Private'] },
  { name: 'toRoom', label: 'To Room', type: 'select', options: ['301 - General Ward', '302 - Private Room', '303 - Deluxe Room', '201 - ICU'] },
  { name: 'transferDate', label: 'Transfer Date', type: 'date' },
  { name: 'transferTime', label: 'Transfer Time', type: 'time' },
  { name: 'reason', label: 'Reason for Transfer', type: 'textarea', placeholder: 'e.g. Patient requires ICU monitoring...', span: 2 },
]

export const inventoryFields: FormField[] = [
  { name: 'name', label: 'Item Name', type: 'text', placeholder: 'e.g. Surgical Mask', span: 2 },
  { name: 'category', label: 'Category', type: 'select', options: ['Medicines', 'Medical Supplies', 'Consumables', 'Lab Supplies', 'Fluids'] },
  { name: 'sku', label: 'SKU / Code', type: 'text', placeholder: 'e.g. SUP-00105' },
  { name: 'unit', label: 'Unit', type: 'select', options: ['Piece', 'Box', 'Strip', 'Bottle', 'Pack', 'Sachet'] },
  { name: 'stock', label: 'Stock Quantity', type: 'number', placeholder: 'e.g. 100' },
  { name: 'unitPrice', label: 'Unit Price (₹)', type: 'number', placeholder: 'e.g. 150' },
]

export const insurancePolicyFields: FormField[] = [
  { name: 'patient', label: 'Patient Name', type: 'text', placeholder: 'e.g. Priya Sharma', span: 2 },
  { name: 'provider', label: 'Insurance Provider', type: 'select', options: ['Star Health', 'HDFC ERGO', 'ICICI Lombard', 'Bajaj Allianz', 'Religare', 'TATA AIG', 'Digit Insurance', 'Niva Bupa'] },
  { name: 'policyType', label: 'Policy Type', type: 'select', options: ['Family Floater', 'Individual', 'Senior Citizen'] },
  { name: 'sumInsured', label: 'Sum Insured (₹)', type: 'number', placeholder: 'e.g. 500000' },
  { name: 'validFrom', label: 'Valid From', type: 'date' },
  { name: 'validTill', label: 'Valid Till', type: 'date' },
]

export const messageFields: FormField[] = [
  { name: 'recipient', label: 'To', type: 'text', placeholder: 'Search patient, staff or department...', span: 2 },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Optional subject', span: 2 },
  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Type your message...', span: 2 },
]

export const stockRequestFields: FormField[] = [
  { name: 'itemName', label: 'Item Name', type: 'text', placeholder: 'e.g. Surgical Mask', span: 2 },
  { name: 'category', label: 'Category', type: 'select', options: ['Medicines', 'Medical Supplies', 'Consumables', 'Lab Supplies', 'Fluids'] },
  { name: 'quantity', label: 'Quantity Requested', type: 'number', placeholder: 'e.g. 100' },
  { name: 'requestedFor', label: 'Requested For', type: 'select', options: departmentNames },
  { name: 'urgency', label: 'Urgency', type: 'select', options: ['Low', 'Medium', 'High', 'Urgent'] },
  { name: 'notes', label: 'Notes', type: 'textarea', placeholder: 'Any additional details...', span: 2 },
]
