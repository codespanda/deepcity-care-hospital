export type InsurancePolicy = {
  id: string
  patient: string
  patientId: string
  avatar: string
  provider: string
  policyType: 'Family Floater' | 'Individual' | 'Senior Citizen'
  validFrom: string
  validTill: string
  status: 'Active' | 'Expired' | 'Pending'
  sumInsured: number
}

export const insurancePolicies: InsurancePolicy[] = [
  { id: 'POL-2024-1248', patient: 'Priya Sharma', patientId: 'PT1001', avatar: 'https://i.pravatar.cc/100?img=25', provider: 'Star Health', policyType: 'Family Floater', validFrom: '01 Jan 2024', validTill: '31 Dec 2024', status: 'Active', sumInsured: 1000000 },
  { id: 'POL-2024-1247', patient: 'Rohan Verma', patientId: 'PT1002', avatar: 'https://i.pravatar.cc/100?img=53', provider: 'HDFC ERGO', policyType: 'Individual', validFrom: '15 Feb 2024', validTill: '14 Feb 2025', status: 'Active', sumInsured: 500000 },
  { id: 'POL-2024-1246', patient: 'Ananya Gupta', patientId: 'PT1003', avatar: 'https://i.pravatar.cc/100?img=26', provider: 'ICICI Lombard', policyType: 'Family Floater', validFrom: '10 Mar 2024', validTill: '09 Mar 2025', status: 'Active', sumInsured: 800000 },
  { id: 'POL-2024-1245', patient: 'Suresh Patel', patientId: 'PT1004', avatar: 'https://i.pravatar.cc/100?img=59', provider: 'Bajaj Allianz', policyType: 'Individual', validFrom: '05 Jan 2024', validTill: '04 Jan 2025', status: 'Expired', sumInsured: 300000 },
  { id: 'POL-2024-1244', patient: 'Neha Singh', patientId: 'PT1005', avatar: 'https://i.pravatar.cc/100?img=28', provider: 'Religare', policyType: 'Senior Citizen', validFrom: '20 Feb 2024', validTill: '19 Feb 2025', status: 'Active', sumInsured: 750000 },
  { id: 'POL-2024-1243', patient: 'Amit Kumar', patientId: 'PT1006', avatar: 'https://i.pravatar.cc/100?img=60', provider: 'TATA AIG', policyType: 'Individual', validFrom: '12 Apr 2024', validTill: '11 Apr 2025', status: 'Active', sumInsured: 400000 },
  { id: 'POL-2024-1242', patient: 'Kavita Reddy', patientId: 'PT1007', avatar: 'https://i.pravatar.cc/100?img=29', provider: 'Digit Insurance', policyType: 'Family Floater', validFrom: '18 May 2024', validTill: '17 May 2025', status: 'Active', sumInsured: 600000 },
  { id: 'POL-2024-1241', patient: 'Vikram Joshi', patientId: 'PT1008', avatar: 'https://i.pravatar.cc/100?img=61', provider: 'Niva Bupa', policyType: 'Individual', validFrom: '01 Jun 2024', validTill: '31 May 2025', status: 'Pending', sumInsured: 500000 },
]
