export type Room = {
  number: string
  type: string
  roomType: 'General' | 'Deluxe' | 'ICU' | 'Private' | 'Semi-Private'
  floor: string
  department: string
  totalBeds: number
  occupied: number
  available: number
  status: 'Available' | 'Occupied'
}

export const rooms: Room[] = [
  { number: '101', type: 'General Ward', roomType: 'General', floor: '1st Floor', department: 'General Medicine', totalBeds: 6, occupied: 4, available: 2, status: 'Available' },
  { number: '102', type: 'Deluxe Room', roomType: 'Deluxe', floor: '1st Floor', department: 'Cardiology', totalBeds: 2, occupied: 2, available: 0, status: 'Occupied' },
  { number: '201', type: 'ICU', roomType: 'ICU', floor: '2nd Floor', department: 'Critical Care', totalBeds: 8, occupied: 8, available: 0, status: 'Occupied' },
  { number: '202', type: 'Private Room', roomType: 'Private', floor: '2nd Floor', department: 'Orthopedics', totalBeds: 1, occupied: 1, available: 0, status: 'Occupied' },
  { number: '203', type: 'Semi-Private', roomType: 'Semi-Private', floor: '2nd Floor', department: 'Neurology', totalBeds: 2, occupied: 1, available: 1, status: 'Available' },
  { number: '301', type: 'General Ward', roomType: 'General', floor: '3rd Floor', department: 'General Medicine', totalBeds: 6, occupied: 3, available: 3, status: 'Available' },
  { number: '302', type: 'Private Room', roomType: 'Private', floor: '3rd Floor', department: 'Pediatrics', totalBeds: 1, occupied: 0, available: 1, status: 'Available' },
  { number: '303', type: 'Deluxe Room', roomType: 'Deluxe', floor: '3rd Floor', department: 'Maternity', totalBeds: 2, occupied: 1, available: 1, status: 'Available' },
]
