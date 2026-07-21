export type Doctor = {
  id: string
  name: string
  avatar: string
  department: string
  specialty: string
  experience: string
  rating: number
  reviews: number
  status: 'Active' | 'On Leave' | 'Inactive'
  phone: string
  email: string
}

export const doctors: Doctor[] = [
  {
    id: 'DM1024',
    name: 'Dr. Arjun Mehta',
    avatar: 'https://i.pravatar.cc/80?img=13',
    department: 'Cardiology',
    specialty: 'Cardiologist',
    experience: '12 Years',
    rating: 4.9,
    reviews: 128,
    status: 'Active',
    phone: '98765 43210',
    email: 'arjun.mehta@deepcitycare.com',
  },
  {
    id: 'DO1025',
    name: 'Dr. Neha Singh',
    avatar: 'https://i.pravatar.cc/80?img=32',
    department: 'Orthopedics',
    specialty: 'Orthopedic Surgeon',
    experience: '9 Years',
    rating: 4.7,
    reviews: 96,
    status: 'Active',
    phone: '98765 43211',
    email: 'neha.singh@deepcitycare.com',
  },
  {
    id: 'DM1026',
    name: 'Dr. Raj Verma',
    avatar: 'https://i.pravatar.cc/80?img=14',
    department: 'Neurology',
    specialty: 'Neurologist',
    experience: '10 Years',
    rating: 4.6,
    reviews: 84,
    status: 'Active',
    phone: '98765 43212',
    email: 'raj.verma@deepcitycare.com',
  },
  {
    id: 'DD1027',
    name: 'Dr. Priya Gupta',
    avatar: 'https://i.pravatar.cc/80?img=45',
    department: 'Dermatology',
    specialty: 'Dermatologist',
    experience: '8 Years',
    rating: 4.8,
    reviews: 102,
    status: 'Active',
    phone: '98765 43213',
    email: 'priya.gupta@deepcitycare.com',
  },
  {
    id: 'DG1028',
    name: 'Dr. Amit Patel',
    avatar: 'https://i.pravatar.cc/80?img=15',
    department: 'General Medicine',
    specialty: 'Physician',
    experience: '7 Years',
    rating: 4.5,
    reviews: 72,
    status: 'On Leave',
    phone: '98765 43214',
    email: 'amit.patel@deepcitycare.com',
  },
  {
    id: 'DP1029',
    name: 'Dr. Kavita Reddy',
    avatar: 'https://i.pravatar.cc/80?img=47',
    department: 'Pediatrics',
    specialty: 'Pediatrician',
    experience: '11 Years',
    rating: 4.9,
    reviews: 118,
    status: 'Active',
    phone: '98765 43215',
    email: 'kavita.reddy@deepcitycare.com',
  },
  {
    id: 'DO1030',
    name: 'Dr. Suresh Iyer',
    avatar: 'https://i.pravatar.cc/80?img=17',
    department: 'Ophthalmology',
    specialty: 'Ophthalmologist',
    experience: '14 Years',
    rating: 4.8,
    reviews: 110,
    status: 'Active',
    phone: '98765 43216',
    email: 'suresh.iyer@deepcitycare.com',
  },
  {
    id: 'DN1031',
    name: 'Dr. Meera Nair',
    avatar: 'https://i.pravatar.cc/80?img=48',
    department: 'ENT',
    specialty: 'ENT Specialist',
    experience: '6 Years',
    rating: 4.6,
    reviews: 58,
    status: 'Active',
    phone: '98765 43217',
    email: 'meera.nair@deepcitycare.com',
  },
]
