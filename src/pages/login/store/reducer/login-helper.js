export const initUserState = {
  user: {},
  permissions: {},
  access_token: ''
}

export const addUserData = (state, payload) => {
  const { data } = payload

  return {
    ...state,
    ...data
  }
}
