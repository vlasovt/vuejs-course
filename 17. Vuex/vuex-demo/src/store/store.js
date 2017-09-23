import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    //all the properties our application has
    state: {
        counter: 0
    }
});