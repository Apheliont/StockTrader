<template>
  <nav class="navbar navbar-expand-md navbar-light border rounded">
    <router-link class="navbar-brand" to="/">
      <img src="../images/Stock-Market.png" height="30" alt="Stock Trader Brand"> Stock Trader
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" to="sell" tag="li" active-class="active">
          <a class="nav-link">Sell</a>
        </router-link>
        <router-link class="nav-item" to="buy" tag="li" active-class="active">
          <a class="nav-link">Buy</a>
        </router-link>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#" @click="pushData">Save Data</a>
            <a class="dropdown-item" href="#" @click="fetchData">Load Data</a>
          </div>
        </li>
      </ul>
      <span class="navbar-text">
        Funds: <span class="font-weight-bold">{{userMoney | moneyFormat}}</span>
    </span>
    </div>
  </nav>
</template>

<script>
  import {mapMutations} from 'vuex';
  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters(['userMoney'])
    },
    methods: {
      ...mapMutations(['endDay']),
      ...mapActions(['fetchData', 'pushData']),
    }
  }
</script>

<style scoped>

</style>
