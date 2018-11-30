import { RECEIVE_RESPONSE } from '../constants'
import { requestLogin } from '../api'

const receiveResponse = (data) => ({
  type: RECEIVE_RESPONSE,
  data: data
})

export const login = (data) => dispatch => requestLogin(data).then(res => dispatch(receiveResponse(res.data)))
