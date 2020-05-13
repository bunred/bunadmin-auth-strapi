/**
 * Remote data controller
 */
import { Query } from "material-table"
import request from "@/utils/scripts/request"
import storedToken from "@/utils/scripts/storedToken"
import { ENV } from "@/utils/config"

export default async function listSer(query: Query<any>) {
  const { page, pageSize } = query
  const token = await storedToken()

  const data = await request(
    "/content-manager/explorer/plugins::users-permissions.user",
    {
      params: { _limit: pageSize, _sort: "username:ASC", _start: page },
      prefix: ENV.AUTH_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  const { count } = await request(
    "/content-manager/explorer/plugins::users-permissions.user/count",
    {
      prefix: ENV.AUTH_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return {
    data,
    totalCount: count,
    errors: data.status >= 400 ? "Fetch error" : undefined
  }
}
