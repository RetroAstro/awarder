import axios from 'axios'

export const requestLogin = (data) => {
  return axios({
    method: 'POST',
    url: '/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  })
}
