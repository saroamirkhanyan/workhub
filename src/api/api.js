import * as axios from 'axios'

export const LoadCards = {
  load({ page, count }) {
    return axios
      .get('https://test-workhub-api.herokuapp.com/works', {
        params: {
          page,
          count,
        },
      })
      .then((response) => {
        return response.data
      })
  },
}
