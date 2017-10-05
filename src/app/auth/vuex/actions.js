import * as types from './mutations-types'
import http from '@/http'

export const attemptLogin = (context, payload) => {
  return http.get('https://uinames.com/api/?ext')
    .then(response => response.data)
    .then(data => {
      context.commit(types.setToken, data.email)
      context.commit(types.setUser, data)
    })
}
