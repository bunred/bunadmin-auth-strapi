export default interface Values {
  id: string
  created_at: number
  updated_at: number
  username: string
  email: string
  password: string
  confirmed: boolean
  blocked: boolean
  provider: string
  role: {
    id: number
    name: string
    type: string
  }
}
