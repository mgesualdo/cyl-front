import { useRouter } from 'next/router'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { customFetch } from '../helpers/customFetch'
import useForms, { useStore } from './useForms'
import { useQueryClient } from 'react-query'

const QUERY_KEYS = {
  person: 'personas',
  business: 'comercios',
}

const USES_FORM_DATA = ['person', 'business']

const VALIDATIONS = {
  getCode: ({ email }) => {
    if (!email) {
      return {
        ok: false,
        title: 'UPS',
        html: 'Debes indicar un email para recibir el código',
        icon: 'info',
        confirmButtonText: 'Entendido',
      }
    }
    return { ok: true }
  },
  login: ({ email, code }) => {
    if (!email || !code) {
      return {
        ok: false,
        title: 'UPS',
        html: 'Debes inidicar un email y código de ingreso',
        icon: 'info',
        confirmButtonText: 'Entendido',
      }
    }
    return { ok: true }
  },
  business: (business) => {
    return { ok: true }
  },
  person: (person) => {
    return { ok: true }
  },
}

const useFetch = ({ form }) => {
  const [fetching, setFetching] = useState(false)
  const { cleanForm } = useForms({ form })
  const router = useRouter()
  const queryClient = useQueryClient()

  const fetcher = async ({ path, validation = form, method = 'POST' }) => {
    const state = useStore.getState()[form]

    const result = VALIDATIONS[validation](state)
    if (!result.ok) {
      delete result.ok
      Swal.fire(result)
      return
    }

    let body = state

    if (USES_FORM_DATA.includes(form)) {
      body = new FormData()
      body.append('file', state.file)
      delete state.fileContent
      delete state.file
      body.append('data', JSON.stringify(state))
    }

    try {
      setFetching(true)
      const { redirect, swalConfig, data } = await customFetch(
        path,
        method,
        body
      )
      setFetching(false)

      if (swalConfig) await Swal.fire(swalConfig)
      if (redirect) router.push(redirect)
      if (data && form !== 'auth' && method === 'POST') {
        queryClient.setQueryData(QUERY_KEYS[form], (oldData) => [
          ...oldData,
          data,
        ])
      }
      if (method === 'PUT') {
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
      if (data && method === 'DELETE') {
        queryClient.setQueryData(QUERY_KEYS[form], (oldData) => {
          let filteredData = oldData.filter((od) => od._id !== data)
          return filteredData
        })
      }
      cleanForm()
    } catch (error) {
      setFetching(false)
      console.log({ error })
      const { status, swalConfig } = error.cause
      if (status === 401 && form === 'auth') {
        Swal.fire({
          title: 'UPS',
          html: 'Credenciales incorrectas',
          icon: 'info',
          confirmButtonText: 'Entendido 😣',
        })
        return
      }
      if (status === 401 && form !== 'auth') {
        router.replace('/')
        return
      }
      if (swalConfig) await Swal.fire(swalConfig)

      return
    }
  }

  return { fetcher, fetching }
}

export default useFetch
