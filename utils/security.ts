import { Dispatch, SetStateAction } from "react"
import { NextRouter } from "next/router"
import verify from "./verify"
import { DynamicRoute, UserRoute } from "@bunred/bunadmin"

const delayMS = 600 // (ms) delay for animation

interface Props {
  setReady: Dispatch<SetStateAction<boolean>>
  router: NextRouter
}

const isIgnoredPaths = (asPath: string) => {
  return asPath.indexOf(UserRoute.signIn) > -1
}

async function security({ setReady, router }: Props) {
  function delayReady() {
    setTimeout(() => setReady(true), delayMS)
  }
  const { asPath } = router

  if (isIgnoredPaths(asPath)) {
    delayReady()
  }

  const userProfile = await verify()
  // Authentication rule (check profile & id exists)
  const isVerified = userProfile && userProfile.id

  if (isVerified) {
    delayReady()
  } else {
    // const isIgnoredOrigins = asPath.indexOf(`?redirect=${asPath}`) > -1
    let toUrl = `${UserRoute.signIn}?redirect=${asPath}`
    toUrl = toUrl.replace(`?redirect=${UserRoute.signIn}`, "")
    router.replace(DynamicRoute, toUrl).then(_r => setReady(true))
  }
}

export default security
