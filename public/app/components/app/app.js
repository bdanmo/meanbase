import {Component} from '@angular/core'
import store from '../../init/store'
import feathersRest from '../feathers-rest-dispatcher/feathers-rest-dispatcher'

@Component({
  selector: 'App',
  templateUrl: require('./app.js')
})
@feathersRest
export default class App {

}
