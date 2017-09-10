import Vue from 'vue'
import App from './App.vue'

//globally registered directive (v-highlight)
Vue.directive('highlight', {

  //'bind' and 'update' are the most used hooks in directives

  //el - element, bind - arguments and modifiers passed, vnode - virtual dome node
  //when directive is attached to the element
  bind (el, binding, vnode){
    //el.style.backgroundColor = 'green';
    //el.style.backgroundColor = binding.value;
    var delay = 0;

    //can have multiple modifiers
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }else{
        el.style.color = binding.value;
      }
    }, delay);
  },

  //when the elemnt is inserted into the DOM
  inserted(el, binding, vnode){

  },

  //when component gets updated (not its children).
  update(el, binding, vnode, oldVnode){

  },

  //when component and its children get updated.
  componentUpdated(el, binding, vnode, oldVnode){

  },

  //when directive is removed
  unbind (el, binding, vnode){

  }

});

new Vue({
  el: '#app',
  render: h => h(App)
})
