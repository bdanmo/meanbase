import app from '../../init/feathers'
import store from '../../init/store'

export default (target) => {
  if(!target.prototype.service) {
    target.prototype.service = (svc) => {
      return {
        find: (params) => {
          return store.dispatch({
            type: 'find_' + svc,
            payload: app.service(svc).find(params)
          })
        },

        get: (id, params) => {
          return store.dispatch({
            type: 'get_' + svc,
            payload: app.service(svc).get(id, params)
          })
        },

        create: (data, params) => {
          return store.dispatch({
            type: 'create_' + svc,
            payload: app.service(svc).create(data, params)
          })
        },

        update: (id, data, params) => {
          return store.dispatch({
            type: 'update_' + svc,
            payload: app.service(svc).update(id, data, params)
          })
        },

        patch: (id, data, params) => {
          return store.dispatch({
            type: 'patch_' + svc,
            payload: app.service(svc).patch(id, data, params)
          })
        },

        remove: (id, params) => {
          return store.dispatch({
            type: 'remove_' + svc,
            payload: app.service(svc).remove(id, params)
          })
        }
      }
    }
  }
}
