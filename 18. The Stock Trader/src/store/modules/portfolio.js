export default {
    namespaced: true,
    state: {
        funds: 10000,
        stocks: []
    },
    getters: {
        stockPortfolio: (state, getters) => {
            return state.stocks.map(stock=>{
                const record = getters.stocks.find(element => element.id === stock.id);

                return {
                    id: stockId,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            });
        },
        funds: state => {
            return state.funds;
        }
    },
    mutations: {
        buyStock: (state, {stockId, quantity, stockPrice}) =>{
            const record = state.stocks.find(element => element.id == stockId);
            if(record){
                record.quantity += quantity;
            }else{
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                });
            }

            state.funds -= stockPrice * quantity;
        },
        sellStock: (state, {stockId, quantity, stockPrice}) =>{
            const record = state.stocks.find(element => element.id == stockId);
            if(record.quantity > quantity){
                record.quantity -= quantity;
            }else{
                state.stocks.splice(state.stocks.indexOf(record), 1);
            }

            state.funds += stockPrice * quantity;
        }
    },
    actions: {
        sellStock: (context, order) => {
            context.commit('sellStock', order);
        }
    }
}