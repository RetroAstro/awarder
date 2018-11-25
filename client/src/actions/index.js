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

export const login = () => dispatch => {
  dispatch(startRequest())
  return requestLogin().then((res) => dispatch(receiveRequest(res)))
}
