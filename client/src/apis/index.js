import axios from 'axios'

const getToken = async () => {
  const { data } = await axios.get('/token')
  return data
}

export const requestLogin = async (data) => {
  const token = await getToken()
  return axios({
    method: 'POST',
    url: '/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ ...data, _csrf: token })
  })
}
