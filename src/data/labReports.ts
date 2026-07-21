export type LabReport = {
  id: string
  patient: string
  patientId: string
  avatar: string
  testName: string
  department: string
  sampleDate: string
  reportDate: string
  status: 'Completed' | 'Pending'
}

export const labReports: LabReport[] = [
  { id: 'LR-2024-3287', patient: 'Priya Sharma', patientId: 'PT1001', avatar: 'https://i.pravatar.cc/100?img=25', testName: 'Complete Blood Count (CBC)', department: 'Pathology', sampleDate: '14 May 2024', reportDate: '14 May 2024', status: 'Completed' },
  { id: 'LR-2024-3286', patient: 'Rohan Verma', patientId: 'PT1002', avatar: 'https://i.pravatar.cc/100?img=53', testName: 'Lipid Profile', department: 'Pathology', sampleDate: '14 May 2024', reportDate: '14 May 2024', status: 'Completed' },
  { id: 'LR-2024-3285', patient: 'Ananya Gupta', patientId: 'PT1003', avatar: 'https://i.pravatar.cc/100?img=26', testName: 'Thyroid Profile (T3, T4, TSH)', department: 'Pathology', sampleDate: '13 May 2024', reportDate: '14 May 2024', status: 'Completed' },
  { id: 'LR-2024-3284', patient: 'Suresh Patel', patientId: 'PT1004', avatar: 'https://i.pravatar.cc/100?img=59', testName: 'Urine Routine & Microscopic', department: 'Microbiology', sampleDate: '13 May 2024', reportDate: '-', status: 'Pending' },
  { id: 'LR-2024-3283', patient: 'Neha Singh', patientId: 'PT1005', avatar: 'https://i.pravatar.cc/100?img=28', testName: 'Blood Sugar (Fasting)', department: 'Pathology', sampleDate: '12 May 2024', reportDate: '13 May 2024', status: 'Completed' },
  { id: 'LR-2024-3282', patient: 'Amit Kumar', patientId: 'PT1006', avatar: 'https://i.pravatar.cc/100?img=60', testName: 'Liver Function Test (LFT)', department: 'Pathology', sampleDate: '12 May 2024', reportDate: '-', status: 'Pending' },
  { id: 'LR-2024-3281', patient: 'Kavita Reddy', patientId: 'PT1007', avatar: 'https://i.pravatar.cc/100?img=29', testName: 'Vitamin D3', department: 'Immunology', sampleDate: '11 May 2024', reportDate: '11 May 2024', status: 'Completed' },
  { id: 'LR-2024-3280', patient: 'Vikram Joshi', patientId: 'PT1008', avatar: 'https://i.pravatar.cc/100?img=61', testName: 'ECG Report', department: 'Cardiology', sampleDate: '11 May 2024', reportDate: '11 May 2024', status: 'Completed' },
]
