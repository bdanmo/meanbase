/**
 * Initialize the app
 * Import routes
 * Attempt to authenticate user before render
 */
import {bootstrap} from '@angular/platform-browser-dynamic'
// import Root from '../views/root/root.view'
import routes from './routes'
import { NgRedux } from 'ng2-redux'

import {Component, AfterViewInit} from '@angular/core'
import {ROUTER_DIRECTIVES, Router} from '@angular/router'
// import * as help from '@angular/router'

import store from './store'

/**
 * Root Class
 * contains router-outlet to let views load
 */
@Component({
  selector: 'root',
  template: require('./root.html'),
  directives: [ROUTER_DIRECTIVES]
})
class Root implements AfterViewInit {
  constructor(ngRedux: NgRedux, router: Router) {
    ngRedux.provideStore(store)
  }
}

if (process.env.NODE_ENV === 'production') {
  enableProdMode()
}

function boot() {
  bootstrap(Root, [
    NgRedux,
    routes
  ])
}


app.authenticate().then((result) => {
  window.user = result.data
  window.authenticated = true
  boot()
}, (err) => {
  window.authenticated = false
  boot()
})
