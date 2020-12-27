import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://test-workhub-api.herokuapp.com',
})

export const LoadCards = {
  load({ page, count }) {
    return instance
      .get('/works', {
        params: {
          page,
          count,
        },
      })
      .then((response) => {
        return response.data
      })
  },
  searchCards({ query, page, count }) {
    return instance
      .get('/work/search', {
        params: {
          query,
          page,
          count,
        },
      })
      .then((response) => {
        return response.data
      })
  },
}
