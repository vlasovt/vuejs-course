import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ServerStatuses from './components/ServerStatuses.vue'
import ServerDetails from './components/ServerDetails.vue'

export const eventBus = new Vue({
  methods:{
    showServerDetails(server){
      this.$emit('showServerDetails', server);
    }
  }
});

Vue.component('srv-header', Header);
Vue.component('srv-footer', Footer);
Vue.component('srv-statuses', ServerStatuses);
Vue.component('srv-details', ServerDetails);


new Vue({
  el: '#app',
  render: h => h(App)
})
