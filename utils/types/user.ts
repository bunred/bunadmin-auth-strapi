import { IRole } from "./role"

/**
 * Model definition for user
 */
export interface IUser {
  id: string
  username: string
  email: string
  provider?: string
  password?: string
  resetPasswordToken?: string
  confirmed?: boolean
  blocked?: boolean
  role?: IRole
}
