import { PUT_USER_DATA } from '../const/login-const'

export const getUserData = data => ({
  type: PUT_USER_DATA,
  payload: { data }
})
