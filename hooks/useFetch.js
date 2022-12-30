import { useRouter } from "next/router"
import { useState } from "react"
import Swal from "sweetalert2"
import { customFetch } from "../helpers/customFetch"
import { useStore } from "./useForms"

const VALIDATIONS = {
  login: ({ email, code }) => {
    if (!email || !code) {
      return {
        ok: false,
        title: "UPS",
        html: "Debes inidicar un email y código de ingreso",
        icon: "info",
        confirmButtonText: "Entendido",
      }
    }
    return { ok: true }
  },
  getCode: ({ email }) => {
    if (!email) {
      return {
        ok: false,
        title: "UPS",
        html: "Debes indicar un email para recibir el código",
        icon: "info",
        confirmButtonText: "Entendido",
      }
    }
    return { ok: true }
  },
}

const useFetch = ({ form }) => {
  const [fetching, setFetching] = useState(false)
  const router = useRouter()
  console.log("HOLI")
  const post = async ({ path, validation }) => {
    const state = useStore.getState()[form]

    const result = VALIDATIONS[validation](state)
    if (!result.ok) {
      delete result.ok
      Swal.fire(result)
      return
    }
    try {
      setFetching(true)
      const { redirect, swalConfig } = await customFetch(path, "POST", state)
      setFetching(false)

      if (swalConfig) await Swal.fire(swalConfig)
      if (redirect) router.push(redirect)
    } catch (error) {
      console.log({ error })
      setFetching(false)
      const { status, swalConfig } = error.cause
      if (status === 401 && form === "auth") {
        Swal.fire({
          title: "UPS",
          html: "Credenciales incorrectas",
          icon: "info",
          confirmButtonText: "Entendido 😣",
        })
        return
      }
      if (status === 401 && form !== "auth") {
        router.replace("/")
        return
      }
      Swal.fire(swalConfig)

      return
    }
  }

  return { post, fetching }
}

export default useFetch
