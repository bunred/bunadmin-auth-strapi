import { Values } from "../types"

export default function validateController(values: Values) {
  const errors: Partial<Values> = {}
  // email
  if (!values.username) {
    errors.username = "Required"
  } else if (values.username.length < 3) {
    errors.username = "Username must be at least 3 characters long."
  }
  // password
  if (!values.password) {
    errors.password = "Required"
  } else if (values.password.length < 6) {
    errors.password = "Passwords must be at least 6 characters long."
  }
  return errors
}
