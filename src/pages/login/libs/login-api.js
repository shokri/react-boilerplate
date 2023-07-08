import Api from 'libs/api'

// Creates a specific token for the requested user.
export const loginApi = data =>
  Api.POST({
    url: 'login',
    data
  })