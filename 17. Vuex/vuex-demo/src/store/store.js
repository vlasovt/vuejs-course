import Vue from 'vue';
import Vuex from 'vuex';
import counters from './modules/counters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    //all the properties our application has
    state: {
        value: 0
    },

    getters: {
        value: state => {
            return state.value;
        }
    },

    //cannot run asynchrounous code inside mutations
    mutations: {
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },

    // can be asynchronous
    actions: {
        updateValue: (context, payload) => {
            context.commit('updateValue', payload);
        }
    },

    modules: {
        counters
    }
});