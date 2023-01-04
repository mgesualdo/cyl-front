import axios from 'axios'
import { BASE_BACK_URL } from '../utils/constants.js'

export const customFetch = async (
  path,
  method = 'GET',
  body = {},
  contentType = 'application/json'
) => {
  try {
    const { data } = await axios({
      url: `${BASE_BACK_URL}${path}`,
      method,
      withCredentials: true,
      data: body,
    })

    return method === 'GET' ? data.data : data
  } catch ({ response }) {
    const { data, status } = response
    const isText = typeof data === 'string'
    console.log({ data })
    throw new Error(status, {
      cause: { status, swalConfig: isText ? null : data?.swalConfig },
    })
  }
}
