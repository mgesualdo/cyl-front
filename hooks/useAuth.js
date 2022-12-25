import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const useAuth = () => {
  const [user, setUser] = useState()
  const router = useRouter()
  useEffect(() => {
    if (!router.asPath.includes("login") && !user) {
      fetch(`${process.env.NEXT_PUBLIC_BASE_BACK_URL}/auth/login/verify`, {
        credentials: "include",
      }).then(async (rawRes) => {
        if (rawRes.status === 401) {
          router.push("login")
          return
        } else {
          const res = await rawRes.json()
          setUser(res.user)
        }
      })
    }
  }, [router.asPath])

  return [user]
}

export default useAuth
