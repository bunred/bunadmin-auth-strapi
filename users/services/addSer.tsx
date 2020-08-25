import Type from "../types"
import { SchemaName } from "../plugin"
import { ENV, request, storedToken, notice } from "@bunred/bunadmin"

export default async function addSer(newData: Type) {
  const token = await storedToken()

  const res = await request(`/${SchemaName}`, {
    prefix: ENV.AUTH_URL,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: newData
  })

  if (res.error) {
    await notice({
      title: "Sorry, you can't update this post",
      severity: "warning",
      content: JSON.stringify(newData)
    })
  } else {
    await notice({
      title: "Successful",
      severity: "success"
    })
  }
}
