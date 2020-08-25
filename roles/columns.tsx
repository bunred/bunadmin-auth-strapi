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
    { title: t("Name"), field: "name", width: 135 },
    { title: t("Description"), field: "description", width: 135 },
    { title: t("Type"), field: "type", width: 135 }
  ] as Column<Type>[]
