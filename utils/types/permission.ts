import { IRole } from "./role"

/**
 * Model definition for permission
 */
export interface IPermission {
  id: string
  type: string
  controller: string
  action: string
  enabled: boolean
  policy?: string
  role?: IRole
}
