import Vue from 'vue'
import App from './App.vue'

Vue.filter('countChars', function(value) {
    return value + ' ' + '('+value.length+')';
});

Vue.mixin({
    data(){
        return {
            reverseText: 'A random string'
        }
    },
    computed: {
        countChars(){
            return this.reverseText + ' ' + '(' + this.reverseText.length + ')';
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
