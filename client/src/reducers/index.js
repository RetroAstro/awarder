import { combineReducers } from 'redux'
import { initialState } from '../states'
import { RECEIVE_RESPONSE } from '../constants'

const data = (state = initialState.data, action) => {
  switch (action.type) {
    case RECEIVE_RESPONSE:
      return action.data
    default:
      return state
  }
}

export default combineReducers({ data })
