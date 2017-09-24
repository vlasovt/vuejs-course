import Vue from 'vue';
import Vuex from 'vuex';
import counters from './modules/counters';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    //all the properties our application has
    state: {
        value: 0
    },

    getters,

    //cannot run asynchrounous code inside mutations
    mutations,

    // can be asynchronous
    actions,

    modules: {
        counters
    }
});