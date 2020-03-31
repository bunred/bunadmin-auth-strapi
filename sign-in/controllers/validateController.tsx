import { Values } from "../types"
import { TFunction } from "i18next"

export default function validateController(values: Values, t: TFunction) {
  const errors: Partial<Values> = {}
  // email
  if (!values.username) {
    errors.username = "Required"
  } else if (values.username.length < 3) {
    errors.username = t("Username must be at least 3 characters long.")
  }
  // password
  if (!values.password) {
    errors.password = "Required"
  } else if (values.password.length < 6) {
    errors.password = t("Passwords must be at least 6 characters long.")
  }
  return errors
}
