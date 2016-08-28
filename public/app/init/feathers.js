import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import hooks from 'feathers-hooks'
import io from 'socket.io-client'
import localstorage from 'feathers-localstorage'
import authentication from 'feathers-authentication/client'

const socket = io('http://localhost:3030')
const app = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(authentication({ storage: window.localStorage }))

window.app = app

export default app
