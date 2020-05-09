import request from "@/utils/scripts/request"
import storedToken from "@/utils/scripts/storedToken"
import { ENV } from "@/utils/config"

async function verify(): Promise<any> {
  const token = await storedToken()

  // query remote user with token
  return request("/users/me", {
    prefix: ENV.AUTH_URL,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export default verify
