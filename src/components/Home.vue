<template>
  <div class="jumbotron border">
    <h1 class="display-4">Make money by buying and selling stocks!</h1>
    <p class="lead">You may Save or Load your data</p>
    <p class="lead">Click on End Day to see how market will change</p>
    <hr class="my-4">
    <p class="h4">Your Funds: {{userMoney | moneyFormat}}</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters(['userMoney'])
    }
  }
</script>

<style scoped>
  .jumbotron {
    padding-bottom: 20px;
    padding-top: 40px;
    background-color: transparent;
  }
</style>
