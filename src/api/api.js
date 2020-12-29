import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://test-workhub-api.herokuapp.com',
})

export const LoadCards = {
  load({ searchQuery, page, limit }) {
    return instance
      .get('/api/works', {
        params: {
          page,
          limit,
          searchQuery,
        },
      })
      .then((response) => {
        return response.data
      })
  },
}

export const Sign = {
  signIn({ login, password }) {
    return instance
      .get('/signIn', {
        params: {
          login,
          password,
        },
      })
      .then((response) => {
        return response.data
      })
  },
  signUp({ login, password }) {
    return instance
      .get('/signUp', {
        params: {
          login,
          password,
        },
      })
      .then((response) => {
        return response.data
      })
  },
}
