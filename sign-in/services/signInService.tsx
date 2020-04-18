import { ENV } from "@/utils/config"
import request from "@/utils/scripts/request"

export interface SignInParamsType {
  username: string
  password: string
}

async function userSignInService(params: SignInParamsType) {
  return request("/auth/login", {
    prefix: ENV.AUTH_URL,
    method: "POST",
    data: params
  })
}

export default userSignInService
