import request from "@/utils/scripts/request"
import storedToken from "@/utils/scripts/storedToken"
import { ENV } from "@/utils/config"

async function verify(): Promise<any> {
  const token = await storedToken()

  // query remote user with token
  return request("/auth/me", {
    prefix: ENV.AUTH_URL,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export default verify
