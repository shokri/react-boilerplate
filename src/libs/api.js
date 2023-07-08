import axios from 'axios'
import { ServerErrorHandling } from './errorHandler'
import { reHydrateStore } from './store'

const ApiCreator = async ({ headers, token, version = 1, ...props }) => {
  const token_ = token || reHydrateStore()?.user?.access_token
  const axiosConf = {
    baseURL: process.env.REACT_APP_API_URL + `/api/v${version}/`,
    headers: {
      Authorization: 'Bearer ' + token_,
      'X-Requested-With': 'XMLHttpRequest',
      ...(headers && { ...headers })
    },
    ...props
  }

  return await axios(axiosConf)
    .catch(err => ServerErrorHandling(err))
}

class Api {
  static GET(props) {
    return ApiCreator({
      ...props,
      method: 'get'
    })
  }

  static POST(props) {
    return ApiCreator({
      ...props,
      method: 'post'
    })
  }

  static PUT(props) {
    return ApiCreator({
      ...props,
      method: 'put'
    })
  }

  static PATCH(props) {
    return ApiCreator({
      ...props,
      method: 'patch'
    })
  }

  static DELETE(props) {
    return ApiCreator({
      ...props,
      method: 'delete'
    })
  }
}

export default Api
