<template>
  <div class="border rounded">
    <div class="alert alert-primary stock-header" role="alert">
      {{stock.name}} (Price: {{getCurrentPrice}} | Quantity: {{stock.amount}})
    </div>
    <div class="form-row form-group d-flex justify-content-between mx-3">
      <div class="col-auto">
        <label for="Quantity" class="sr-only">Quantity</label>
        <input type="number" class="form-control mr-auto" id="Quantity" placeholder="Quantity" v-model="quantity">
      </div>
      <div class="col-auto">
        <button class="btn btn-danger" @click="sell">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
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
            this.$store.commit('sellStock',
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
