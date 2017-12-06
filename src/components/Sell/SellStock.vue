<template>
  <div class="card">
    <div class="card-header alert-primary">
      {{stock.name}} (Price: {{getCurrentPrice}} | Quantity: {{stock.amount}})
    </div>
    <div class="card-body d-flex flex-nowrap justify-content-between">
      <div>
        <label for="Quantity" class="sr-only">Quantity</label>
        <input type="number" class="form-control" id="Quantity" placeholder="Quantity" v-model="quantity">
      </div>
      <div class="col-auto">
        <button class="btn btn-danger" @click="sell">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    props: {
      stock: {
        type: Object,
        default: {name: 'Unknown', amount: 0}
      }
    },
    data() {
      return {
        quantity: ''
      }
    },
    methods: {
      sell() {
        if (this.stock.amount - this.quantity >= 0) {
          this.$store.commit('sellStocks',
            {
              name: this.stock.name,
              amount: this.quantity,
              price: this.getCurrentPrice
            });
        } else {
          alert('You can\'t sell more stocks than you currently have');
        }
        this.quantity = '';
      }
    },
    computed: {
      getCurrentPrice() {
        return this.$store.getters.getPriceByName(this.stock.name);
      }
    }
  }
</script>

<style scoped>
  .stock-header {
    border: none;
    border-radius: 3px 3px 0 0;
  }
</style>
