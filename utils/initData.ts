import { IPluginData } from "@bunred/bunadmin"

export default {
  plugin: "strapi-user",
  data: [
    {
      id: "strapi_user_sign_in",
      group: "user",
      name: "sign-in",
      label: "Sign-in",
      team: "buncms",
      customized: true,
      ignore_menu: true
    },
    {
      id: "strapi_user_users",
      group: "user",
      name: "users",
      label: "User",
      team: "buncms",
      customized: true,
      icon_type: "eva",
      icon: "person-outline",
      rank: "100"
    },
    {
      id: "strapi_user_roles",
      group: "user",
      name: "roles",
      label: "Role",
      team: "buncms",
      customized: true,
      icon_type: "eva",
      icon: "people-outline",
      rank: "100"
    }
  ] as IPluginData[]
}
