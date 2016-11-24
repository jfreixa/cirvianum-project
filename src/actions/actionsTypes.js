import { createConstants } from 'redux-module-builder'

export const types = createConstants()(
  'SIGNUP',
  'LOGIN',
  'LOGOUT'
)
