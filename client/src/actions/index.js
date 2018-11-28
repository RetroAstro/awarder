import { START_REQUEST, RECEIVE_REQUEST } from '../constants'
import { requestLogin } from '../api'

const startRequest = () => ({
  type: START_REQUEST,
  loading: true
})

const receiveRequest = (data) => ({
  type: RECEIVE_REQUEST,
  loading: false,
  data: data
})

export const login = (data) => dispatch => {
  dispatch(startRequest())
  return requestLogin(data).then((res) => dispatch(receiveRequest(res)))
}
