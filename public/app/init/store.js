import { createStore, combineReducers } from 'redux'
import middleware from './middleware'

// inject reducers
// end inject reducers

// Combine Reducers
const reducers = combineReducers({
  // init reducers
  // end init reducers
})

/**
 * Create a store by passing in the reducer and middleware
 */
const store = createStore(reducers, undefined, middleware)
export default store
