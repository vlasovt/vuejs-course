<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">Stock Trader</router-link>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
            <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          </ul>
          <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#" @click="endDay">End Day</a>
            </li>
            <li class="dropdown" @click="isDropdownOpen = !isDropdownOpen" :class="{open: isDropdownOpen}">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#" @click="saveData">Save Data</a>
                </li>
                <li>
                  <a href="#" @click="loadData">Load Data</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data(){
    return{
      isDropdownOpen: false
    }
  },
  computed:{
    funds(){
      return this.$store.getters['portfolio/funds'];
    }
  },
  methods: {

    endDay(){
      this.randomizeStocks();
    },

    saveData(){
      const data = {
        funds: this.$store.getters['portfolio/funds'],
        stockPortfolio: this.$store.getters['portfolio/stockPortfolio'],
        stocks: this.$store.getters['stocks/stocks']
      };

      this.$http.put('data.json', data);
    },

    loadData(){
      this.fetchData();
    },

     ...mapActions({
      randomizeStocks: 'stocks/randomizeStocks',
      fetchData: 'loadData'
    })
  }
}
</script>
