import deepAssign from 'deep-assign'

export const reducerWrapper = (methods, initState) => {
  return (previousState = initState, action) => {
    let state
    if(Array.isArray(previousState)) {
      state = deepAssign(previousState)
    } else {
      state = deepAssign({}, previousState)
    }

    try { return methods[action.type](state, action.payload) }
    catch(err) { return state }
  }
}
