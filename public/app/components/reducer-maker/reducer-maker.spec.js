import { expect, assert } from 'chai'
import sinon from 'sinon'
import { mapStateMaker, reducerWrapper } from './reducer-maker'

describe('Reducer Maker', () => {
  let store
  beforeEach(() => {
    store = {
      'key1': {value: '1 data'},
      'key2': {value: '2 data'},
      'key3': {value: '3 data'},
      'key4': {value: '4 data'},
    }
  });
  describe('reducerWrapper', () => {

    let reducer
    let initState
    let methods = {}
    beforeEach(() => {
      initState = [
        {_id: 1, name: "jon"},
        {_id: 2, name: "Will"}
      ]
      methods.add_user = (state, action) => {
        return state.concat(action)
      }

      methods.remove_user = (state, action) => {
        return Object.assign(state, action);
      }

      sinon.spy(methods, 'add_user')

      reducer = reducerWrapper(methods, initState)
    });

    it('should use the inital state provided', () => {
      const newState = reducer(undefined, {type:'init', payload: undefined})
      expect(newState).to.deep.equal(initState)
    })

    it("should call one of the methods passed in if it's name matches the action.type", () => {
      const newState = reducer(undefined, { type:'add_user', payload: {_id:3, name: 'Ben'} })
      assert.equal(methods.add_user.calledOnce, true)
    })

    it("should pass in the action payload and state", () => {
      const newState = reducer(undefined, { type:'add_user', payload: {_id:3, name: 'Ben'} })
      assert.equal(methods.add_user.calledWith(initState, {_id:3, name: 'Ben'}), true)
    })

    it('should not throw an error if the method does not exist for the action.type', () => {
      const newState = reducer(undefined, { type:'recreate_user', payload: {_id:3, name: 'Ben'} })
      expect(newState).to.deep.equal(initState)
    })

    it('should not affect the original state passed in', () => {
      const newState = reducer(undefined, { type:'add_user', payload: {_id:3, name: 'Ben'} })
      expect(newState).not.to.equal(initState)
    })

    it('should return what the method returns', () => {
      const action = { type:'add_user', payload: {_id:3, name: 'Ben'} }
      const newState = reducer(undefined, action)
      const methodState = methods.add_user(initState, action.payload)
      expect(newState).to.deep.equal(methodState)
    })
  });
})
