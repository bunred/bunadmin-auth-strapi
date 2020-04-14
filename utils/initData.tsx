import { name } from "../package.json"
import { Collection as Schema } from "@/core/schema/collections"
import { Collection as Menu } from "@/core/menu/collections"

const BunadminSchema = Schema.name
const BunadminMenu = Menu.name

const created_at = Date.now()

export default {
  plugin: name,
  list: [
    {
      name: BunadminSchema,
      data: [
        {
          team: "buncms",
          group: "user",
          name: "list",
          label: "User",
          columns: '[{"title":"Id","field":"id"}]',
          created_at,
          customized: true,
          id: "user"
        },
        {
          team: "buncms",
          group: "user",
          name: "sign-in",
          label: "Sign-in",
          customized: true,
          columns: '[{"title":"Id","field":"id"}]',
          created_at,
          id: "user_sign_in"
        }
      ]
    },
    {
      name: BunadminMenu,
      data: [
        {
          rank: "0",
          label: "User",
          slug: "/user/list",
          parent: "",
          name: "list",
          icon_type: "eva",
          icon: "people-outline",
          id: "buncms_user"
        }
      ]
    }
  ]
}
