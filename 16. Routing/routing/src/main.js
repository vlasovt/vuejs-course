import Vue from 'vue'

//import vue router
import VueRouter from 'vue-router';
import App from './App.vue'

//import routes (between brackets because it is a constant)
import { routes } from './routes'

//enable router
Vue.use(VueRouter);

//Setup Router
const router = new VueRouter({
  routes, // in ES6 it is short for 'routes: routes',
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash){
      return {selector: to.hash}
    }
    return {x:0, y:700};
  } 
});

//register routes

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
