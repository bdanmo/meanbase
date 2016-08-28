import {Component} from '@angular/core'
// import store from '../../init/store'
// import feathersRest from '../feathers-rest-dispatcher/feathers-rest-dispatcher'
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router'
import app from '../../init/feathers'

@Component({
  selector: 'App',
  templateUrl: require('./app.jade')
})
export default class App {
  constructor(route: ActivatedRoute) {
    this.route = route
    // this.params = injector.parent.parent.get(RouteParams)
    // console.log("this.params", this.params);
    // this.url = params.get('pageUrl');
  }
  ngOnInit() {
    this.routeParams = this.route.params.subscribe(params => {
       this.url = params['pageUrl'] || '';
       this.url = '/' + this.url
       console.log("this.url", this.url);
       app.service('api/pages').find({ query: {url: this.url} }).then(result => {
         console.log("result", result);
         if(result && result[0]) {
         }
       }).catch(function(err) {
         console.log("err", err);
       })
    });
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }

}
