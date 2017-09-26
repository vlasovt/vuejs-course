import stocks from '../../data/stocks'

export default {
    namespaced: true,
    state: {
        stocks: []
    },
    getters: {
        stocks: state => {
            return state.stocks;
        }
    },
    mutations: {
        setStocks: (state, stocks) =>{
            state.stocks=stocks;
        },
        randomStocks: (state) =>{
        }
    },
    actions: {
        buyStock: (context, order) => {
            context.commit('portfolio/buyStock', order, {root: true});
        },
        initStocks: (context) => {
            context.commit('setStocks', stocks);
        },
        randomizeStocks: (context) => {
            context.commit('randomStocks');
        }
    }
}