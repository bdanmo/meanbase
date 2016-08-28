import { applyMiddleware, compose } from 'redux'
import promise from 'redux-promise-middleware'
import createLogger from 'redux-logger'

/**
 * Middleware
 */
const errorHandler = store => next => action => {
  try {
    if(action.error) {
      console.log(action.payload)
    }
    next(action)
  } catch (err) {
    console.log("GENERAL ERROR: ", err)
  }
}

// createLogger()
export default compose(applyMiddleware(promise({ promiseTypeSuffixes: ['loading', 'success', 'error'] }), errorHandler ))
