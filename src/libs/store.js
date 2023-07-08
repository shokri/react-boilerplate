import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import { initUserState } from 'modules/login/store/reducer/login-helper'

import userReducer from 'modules/login/store/reducer/login-reducer'

const initialState = {
  user: initUserState
}

const createRootReducer = () =>
  combineReducers(
    { user: userReducer },
    initialState
  )

export const reHydrateStore = () => {
  return localStorage.getItem('App') !== null
    ? JSON.parse(localStorage.getItem('App'))
    : initialState
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  createRootReducer(),
  reHydrateStore(),
  composeEnhancers(applyMiddleware())
)

store.subscribe(() => {
  localStorage.setItem('App', JSON.stringify(store.getState()))
})

export default store
