import { PUT_USER_DATA } from '../const/login-const'
import { initUserState, addUserData } from './login-helper'

const userReducer = (state = initUserState, action) => {
  switch (action.type) {
    case PUT_USER_DATA:
      return addUserData(state, action.payload)

    default:
      return { ...state }
  }
}

export default userReducer
