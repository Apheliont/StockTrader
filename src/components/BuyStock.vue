<template>
  <div class="border rounded">
    <div class="alert alert-success stock-header" role="alert">
      {{stock.name}} (Price: {{stock.price}})
    </div>
    <div class="form-row form-group d-flex justify-content-between mx-3">
      <div class="col-auto">
        <label for="Quantity" class="sr-only">Quantity</label>
        <input type="number" class="form-control mr-auto" id="Quantity" placeholder="Quantity" v-model="quantity">
      </div>
      <div class="col-auto">
        <button class="btn btn-success" @click="buy">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
          stock: {
            type: Object,
            default: {name: 'Unknown', price: 0}
          }
        },
      data() {
          return {
            quantity: ''
          }
      },
      methods: {
          buy() {
            const userMoney = this.$store.getters.userMoney;
            if (userMoney - (this.quantity * this.stock.price) >= 0) {
              this.$store.commit('buyStocks',
                {
                  name: this.stock.name,
                  amount: this.quantity,
                  price: this.stock.price
                });
            } else {
              alert('Not enough money in your account');
            }
            this.quantity = '';
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
