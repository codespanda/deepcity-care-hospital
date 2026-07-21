export type Patient = {
  id: string
  name: string
  avatar: string
  age: number
  gender: 'Male' | 'Female'
  bloodGroup: string
  phone: string
  email: string
  address: string
  dob: string
  insurance: string
  primaryDoctor: string
  department: string
  lastVisit: string
  status: 'Active' | 'Inactive'
}

export const patients: Patient[] = [
  {
    id: 'PT1001',
    name: 'Priya Sharma',
    avatar: 'https://i.pravatar.cc/100?img=25',
    age: 28,
    gender: 'Female',
    bloodGroup: 'O+',
    phone: '98765 43210',
    email: 'priya.sharma@email.com',
    address: 'Mohali, Punjab, India',
    dob: '16 May 1996',
    insurance: 'No Insurance',
    primaryDoctor: 'Dr. Arjun Mehta',
    department: 'Cardiology',
    lastVisit: '10 May 2024',
    status: 'Active',
  },
  {
    id: 'PT1002',
    name: 'Rohan Verma',
    avatar: 'https://i.pravatar.cc/100?img=53',
    age: 34,
    gender: 'Male',
    bloodGroup: 'A+',
    phone: '98765 43220',
    email: 'rohan.verma@email.com',
    address: 'Chandigarh, India',
    dob: '02 Feb 1990',
    insurance: 'Star Health',
    primaryDoctor: 'Dr. Amit Patel',
    department: 'General Medicine',
    lastVisit: '14 May 2024',
    status: 'Active',
  },
  {
    id: 'PT1003',
    name: 'Ananya Gupta',
    avatar: 'https://i.pravatar.cc/100?img=26',
    age: 24,
    gender: 'Female',
    bloodGroup: 'B+',
    phone: '98765 43221',
    email: 'ananya.gupta@email.com',
    address: 'Ludhiana, Punjab, India',
    dob: '19 Aug 2000',
    insurance: 'HDFC Ergo',
    primaryDoctor: 'Dr. Neha Singh',
    department: 'Orthopedics',
    lastVisit: '13 May 2024',
    status: 'Active',
  },
  {
    id: 'PT1004',
    name: 'Suresh Patel',
    avatar: 'https://i.pravatar.cc/100?img=59',
    age: 45,
    gender: 'Male',
    bloodGroup: 'AB+',
    phone: '98765 43222',
    email: 'suresh.patel@email.com',
    address: 'Patiala, Punjab, India',
    dob: '11 Nov 1979',
    insurance: 'Star Health',
    primaryDoctor: 'Dr. Raj Verma',
    department: 'Neurology',
    lastVisit: '13 May 2024',
    status: 'Active',
  },
  {
    id: 'PT1005',
    name: 'Neha Singh',
    avatar: 'https://i.pravatar.cc/100?img=28',
    age: 31,
    gender: 'Female',
    bloodGroup: 'O-',
    phone: '98765 43223',
    email: 'neha.singh2@email.com',
    address: 'Amritsar, Punjab, India',
    dob: '05 Mar 1993',
    insurance: 'No Insurance',
    primaryDoctor: 'Dr. Priya Gupta',
    department: 'Dermatology',
    lastVisit: '12 May 2024',
    status: 'Active',
  },
  {
    id: 'PT1006',
    name: 'Amit Kumar',
    avatar: 'https://i.pravatar.cc/100?img=60',
    age: 39,
    gender: 'Male',
    bloodGroup: 'B-',
    phone: '98765 43224',
    email: 'amit.kumar@email.com',
    address: 'Jalandhar, Punjab, India',
    dob: '22 Sep 1985',
    insurance: 'ICICI Lombard',
    primaryDoctor: 'Dr. Amit Patel',
    department: 'General Medicine',
    lastVisit: '12 May 2024',
    status: 'Inactive',
  },
  {
    id: 'PT1007',
    name: 'Kavita Reddy',
    avatar: 'https://i.pravatar.cc/100?img=29',
    age: 27,
    gender: 'Female',
    bloodGroup: 'A-',
    phone: '98765 43225',
    email: 'kavita.reddy2@email.com',
    address: 'Mohali, Punjab, India',
    dob: '30 Jan 1997',
    insurance: 'Star Health',
    primaryDoctor: 'Dr. Kavita Reddy',
    department: 'Pediatrics',
    lastVisit: '11 May 2024',
    status: 'Active',
  },
  {
    id: 'PT1008',
    name: 'Vikram Joshi',
    avatar: 'https://i.pravatar.cc/100?img=61',
    age: 52,
    gender: 'Male',
    bloodGroup: 'O+',
    phone: '98765 43226',
    email: 'vikram.joshi@email.com',
    address: 'Zirakpur, Punjab, India',
    dob: '14 Jul 1972',
    insurance: 'HDFC Ergo',
    primaryDoctor: 'Dr. Arjun Mehta',
    department: 'Cardiology',
    lastVisit: '11 May 2024',
    status: 'Active',
  },
]

export function getPatientById(id: string): Patient | undefined {
  return patients.find((p) => p.id === id)
}
