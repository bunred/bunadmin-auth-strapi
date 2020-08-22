import { name } from "../package.json"
import { IPluginData } from "@bunred/bunadmin"

export default {
  plugin: name,
  data: [
    {
      id: "strapi_user_users",
      group: "user",
      name: "users",
      label: "User",
      team: "buncms",
      customized: true,
      icon_type: "eva",
      icon: "people-outline",
      rank: "100"
    },
    {
      id: "strapi_user_sign_in",
      group: "user",
      name: "sign-in",
      label: "Sign-in",
      team: "buncms",
      customized: true,
      ignore_menu: true
    }
  ] as IPluginData[]
}
