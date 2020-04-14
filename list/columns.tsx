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
    { title: t("Email"), field: "email", width: 135 },
    {
      title: t("Role"),
      field: "role",
      width: 135,
      render: r => {
        const role = r.role.replace("buncms_", "")
        return t(role)
      }
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
