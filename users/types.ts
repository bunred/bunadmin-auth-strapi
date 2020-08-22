import { IUser } from "../utils/types"

export default interface Values extends IUser {
  created_at: number
  updated_at: number
}
