/**
 *  Reducers/index
 *  combine all the reducers
 */
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import page from './page'

export default (history) => combineReducers({
  router: connectRouter(history),
  page
})