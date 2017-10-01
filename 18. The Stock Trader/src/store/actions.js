import Vue from 'vue';

export const loadData = (context) => {
    Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
        if(data){
            const stocks = data.stocks;
            const funds = data.funds;
            const stockPortfolio = data.stockPortfolio;

            const portfolio = {
                stockPortfolio,
                funds
            };

            context.commit('portfolio/setPortfolio', portfolio, {root: true});
            context.commit('stocks/setStocks', stocks, {root: true});
        }
    });
}