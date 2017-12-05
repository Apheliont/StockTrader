<template>
  <div class="my-container d-md-flex justify-content-around flex-wrap">
    <template v-for="stock in userStocks">
      <app-sell-stock :stock="stock"></app-sell-stock>
    </template>
  </div>
</template>

<script>
  import SellStock from './SellStock';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      appSellStock: SellStock
    },
    computed: {
      ...mapGetters(['userStocks'])
    }
  }
</script>

<style scoped>
  .my-container > div {
    flex-basis: 45%;
    margin-bottom: 30px;
  }
</style>
