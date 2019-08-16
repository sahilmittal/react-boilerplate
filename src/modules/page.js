/**
 *  Reducer: 'page'
 */

import axios from 'axios'

export const SUCCESS = 'PAGE/SUCCESS'
export const FAILED = 'PAGE/FAILED'

const initialState = {
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SUCCESS:
      return { ...state, data: action.data }

    case FAILED:
      return { ...state }

    default:
      return state
  }
}

const actions = {
  success: (data) => ({ type: SUCCESS, data }),
  error: () => ({ type: FAILED })
}

/**
 *  Action: 'testAction'
 */
export const testAction = () => {
  return dispatch => {
    return axios.post('/test').then(
      res => dispatch(actions.success(1)),
      err => dispatch(actions.error())
    ).catch(
      err => dispatch(actions.error())
    )
  }
}