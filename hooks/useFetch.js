import { useRouter } from "next/router"
import { useState } from "react"
import Swal from "sweetalert2"
import { customFetch } from "../helpers/customFetch"
import { useStore } from "./useForms"
import { useQueryClient } from "react-query"

const QUERY_KEYS = {
  person: "personas",
}

const VALIDATIONS = {
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
  person: (person) => {
    return { ok: true }
  },
}

const useFetch = ({ form }) => {
  const [fetching, setFetching] = useState(false)
  const router = useRouter()
  const queryClient = useQueryClient()

  const fetcher = async ({ path, validation = form, method = "POST" }) => {
    const state = useStore.getState()[form]

    const result = VALIDATIONS[validation](state)
    if (!result.ok) {
      delete result.ok
      Swal.fire(result)
      return
    }
    try {
      setFetching(true)
      const { redirect, swalConfig, data } = await customFetch(
        path,
        method,
        state
      )
      setFetching(false)

      if (swalConfig) await Swal.fire(swalConfig)
      if (redirect) router.push(redirect)
      if (data && method === "POST") {
        queryClient.setQueryData(QUERY_KEYS[form], (oldData) => [
          ...oldData,
          data,
        ])
      }
      if (method === "PUT") {
        queryClient.setQueryData(QUERY_KEYS[form], (oldData) => {
          let editedData = oldData.map((od) => {
            if (od._id === state._id) {
              return { ...od, ...state }
            } else {
              return od
            }
          })
          return editedData
        })
      }
      console.log({ method, state })
      if (data && method === "DELETE") {
        queryClient.setQueryData(QUERY_KEYS[form], (oldData) => {
          let filteredData = oldData.filter((od) => od._id !== data)
          return filteredData
        })
      }
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

  return { fetcher, fetching }
}

export default useFetch
