import { useRouter } from "next/router"
import { useEffect } from "react"
import useForms, { useStore } from "./useForms"

const useAuth = () => {
  const { setFields, cleanForm } = useForms({ form: "user" })
  const user = useStore((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (router.asPath.includes("login") && !!user.email) {
      router.push("/")
      return
    }
    if (!router.asPath.includes("login") && !user?.email) {
      fetch(`${process.env.NEXT_PUBLIC_BASE_BACK_URL}/auth/login/verify`, {
        credentials: "include",
      }).then(async (rawRes) => {
        if (rawRes.status === 401) {
          router.push("login")
          return
        } else {
          const res = await rawRes.json()
          console.log({ res })
          setFields({ data: res.data })
        }
      })
    }
  }, [router.asPath])

  return { user, cleanForm }
}

export default useAuth
