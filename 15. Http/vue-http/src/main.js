import Vue from 'vue'
//import npm package
import VueResource from 'vue-resource';
import App from './App.vue'

//use npm package library
Vue.use(VueResource);

//configure http service routes and other options globally
Vue.http.options.root = 'https://vuejs-http-31226.firebaseio.com/';

//intercept requests
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  //if(request.method == 'POST'){
  //  request.method = 'PUT';
  //}
  //intercept response
  next(response => {
    //response.json = () => {return { messages: response.body}}
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
