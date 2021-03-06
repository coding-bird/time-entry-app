export const authReducer = (state = {
  loggedIn: false
}, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
    case 'TOKEN_RETRIVED_SUCCESS':
    case 'LOGIN_FAILED':
    case 'REGISTER_FAILED':
    case 'REGISTER_SUCCESS':
      return { ...state, ...payload }
  }
  return state
}

export const appReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'TASKLIST':
      return { ...state, ...payload }
  }
  return state
}

export const routeReducer = (state = {}, { type, payload }) => {
  const { params = {}, search, query, ...rest } = payload || {}
  switch (type) {
    case 'UPDATE_ROUTE_PARAMS':
      const prevState = { ...state }
      delete prevState.prev
      return { prev: { ...prevState }, ...rest, params, search, query }
  }
  return state
}

export const cookieReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_COOKIES':
    case 'SET_COOKIE':
      return { ...state, ...payload }
    case 'CLEAR_COOKIE':
      const newState = { ...state }
      delete newState[payload.key]
      return newState
  }
  return state
}