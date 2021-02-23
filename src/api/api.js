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

export const Sign = ({ type }) => {
  return ({ login, password }) => {
    return instance
      .get(`/sign${type}`, {
        params: {
          login,
          password,
        },
      })
      .then((response) => {
        return response.data
      })
  }
}
