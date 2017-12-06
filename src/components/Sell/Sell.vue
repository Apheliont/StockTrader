<template>
  <transition-group class="d-md-flex justify-content-around flex-wrap" name="sell">
    <app-sell-stock class="my-container" v-for="(stock, index) in userStocks" :stock="stock"
                    key="index"></app-sell-stock>
    <app-placeholder v-if="isUserStockEmpty" key="placeholder"></app-placeholder>
  </transition-group>
</template>

<script>
  import SellStock from './SellStock';
  import Placeholder from './Placeholder';
  import {mapGetters} from 'vuex';

  export default {
    components: {
      appSellStock: SellStock,
      appPlaceholder: Placeholder
    },
    computed: {
      ...mapGetters(['userStocks']),
      isUserStockEmpty() {
        return this.userStocks.length === 0;
      }
    }
  }
</script>

<style scoped>
  .my-container {
    flex-basis: 45%;
    margin-bottom: 30px;
  }

  .sell-enter {
    transform: translateX(40px);
    opacity: 0;
  }

  .sell-enter-active {
    transition-duration: 0.5s;
  }

  .sell-leave {

  }

  .sell-leave-active {
    transform: translateX(40px);
    opacity: 0;
    transition-duration: 0.4s;
    position: absolute;
  }

  .sell-move {
    transition: all 1s;
  }
</style>
