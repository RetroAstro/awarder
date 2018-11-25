import { combineReducers } from 'redux'
import { initialState } from '../states'
import { START_REQUEST, RECEIVE_REQUEST } from '../constants'

const loading = (state = initialState.loading, action) => {
  switch (action.type) {
    case START_REQUEST:
    case RECEIVE_REQUEST:
      return action.loading
    default:
      return state
  }
}

const data = (state = initialState.data, action) => {
  switch (action.type) {
    case RECEIVE_REQUEST:
      return action.data
    default:
      return state
  }
}

export default combineReducers({ loading, data })
