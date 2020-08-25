import { Column } from "material-table"
import Type from "./types"
import { TFunction } from "i18next"

export default ({ t }: { t: TFunction }) =>
  [
    {
      title: t("Id"),
      field: "id",
      editable: "never"
    },
    { title: t("Username"), field: "username", width: 135 },
    { title: t("Password"), field: "password", width: 135 },
    { title: t("Email"), field: "email", width: 135 },
    {
      title: t("Role"),
      field: "role",
      width: 135,
      lookup: {
        1: "Authenticated",
        2: "Public"
      },
      render: r => {
        const role = r.role && r.role.name
        return role && t(role)
      }
    },
    {
      title: t("Blocked"),
      field: "blocked",
      type: "boolean",
      width: 135
    },
    {
      title: t("Confirmed"),
      field: "confirmed",
      type: "boolean",
      width: 135
    },
    {
      title: t("Created At"),
      field: "created_at",
      editable: "never",
      filtering: false,
      defaultSort: "desc",
      width: 135,
      render: r => r && new Date(r.created_at).toLocaleString()
    },
    {
      title: t("Updated At"),
      field: "updated_at",
      editable: "never",
      filtering: false,
      width: 165,
      render: r => (r ? new Date(r.updated_at).toLocaleString() : "")
    }
  ] as Column<Type>[]
