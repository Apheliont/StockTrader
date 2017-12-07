<template>
  <div class="my-container d-md-flex justify-content-around flex-wrap">
    <template v-for="stock in stocks">
      <app-buy-stock :stock="stock" tabindex="index"></app-buy-stock>
    </template>
  </div>
</template>

<script>
  import BuyStock from './BuyStock';
  import { mapGetters } from 'vuex';
  export default {
    components: {
      appBuyStock: BuyStock
    },
    computed: {
      ...mapGetters(['stocks'])
    }
  }
</script>

<style scoped>
  .my-container > div {
    flex-basis: 45%;
    margin-bottom: 30px;
  }
</style>
