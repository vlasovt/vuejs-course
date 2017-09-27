<template>
  <div>
    <appPortfolioStock v-for="(stock, index) in stocks" :key="index" :stock="stock"></appPortfolioStock>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import PortfolioStock from './Stock.vue'

export default {
  computed:{
    ...mapGetters({
      stocks: 'portfolio/stockPortfolio'
    })
  },
  components:{
    appPortfolioStock: PortfolioStock
  }
}
</script>

