export type Department = {
  name: string
  head: string
  headTitle: string
  avatar: string
  floor: string
  staff: number
  beds: number
  visits: number
  status: 'Active' | 'Inactive'
  color: string
}

export const departments: Department[] = [
  { name: 'Cardiology', head: 'Dr. Arjun Mehta', headTitle: 'Senior Cardiologist', avatar: 'https://i.pravatar.cc/80?img=13', floor: '2nd Floor', staff: 18, beds: 24, visits: 320, status: 'Active', color: '#3b82f6' },
  { name: 'Orthopedics', head: 'Dr. Neha Singh', headTitle: 'Orthopedic Surgeon', avatar: 'https://i.pravatar.cc/80?img=32', floor: '3rd Floor', staff: 16, beds: 30, visits: 280, status: 'Active', color: '#22c55e' },
  { name: 'Neurology', head: 'Dr. Raj Verma', headTitle: 'Neurologist', avatar: 'https://i.pravatar.cc/80?img=14', floor: '2nd Floor', staff: 14, beds: 20, visits: 210, status: 'Active', color: '#8b5cf6' },
  { name: 'General Medicine', head: 'Dr. Amit Patel', headTitle: 'Physician', avatar: 'https://i.pravatar.cc/80?img=15', floor: '1st Floor', staff: 22, beds: 28, visits: 410, status: 'Active', color: '#f59e0b' },
  { name: 'Pediatrics', head: 'Dr. Kavita Reddy', headTitle: 'Pediatrician', avatar: 'https://i.pravatar.cc/80?img=47', floor: '1st Floor', staff: 20, beds: 26, visits: 360, status: 'Active', color: '#ec4899' },
  { name: 'Dermatology', head: 'Dr. Priya Gupta', headTitle: 'Dermatologist', avatar: 'https://i.pravatar.cc/80?img=45', floor: '3rd Floor', staff: 10, beds: 16, visits: 145, status: 'Active', color: '#06b6d4' },
  { name: 'Ophthalmology', head: 'Dr. Suresh Iyer', headTitle: 'Ophthalmologist', avatar: 'https://i.pravatar.cc/80?img=17', floor: '2nd Floor', staff: 8, beds: 12, visits: 98, status: 'Inactive', color: '#64748b' },
  { name: 'ENT', head: 'Dr. Meera Nair', headTitle: 'ENT Specialist', avatar: 'https://i.pravatar.cc/80?img=48', floor: '3rd Floor', staff: 7, beds: 10, visits: 85, status: 'Active', color: '#a855f7' },
]
