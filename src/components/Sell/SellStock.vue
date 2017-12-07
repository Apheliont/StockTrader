<template>
  <div class="card">
    <div class="card-header alert-primary">
      {{stock.name}} (Price: {{stock.price}} | Quantity: {{stock.amount}})
    </div>
    <div class="card-body d-flex flex-nowrap justify-content-between">
      <div>
        <label for="Quantity" class="sr-only">Quantity</label>
        <input type="number" class="form-control" id="Quantity" placeholder="Quantity" @keypress="sell" v-model.number="quantity">
      </div>
      <div class="col-auto">
        <button class="btn btn-danger" @click="sell" :disabled="isQuantityValid">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    props: {
      stock: {
        type: Object
      },
    },
    data() {
      return {
        quantity: ''
      }
    },
    methods: {
      sell(event) {
        if (event.type === 'click' ||event.type === 'keypress' && event.keyCode === 13) {
          if (this.stock.amount - this.quantity >= 0) {
            this.$store.dispatch('sellStocks', {
              id: this.stock.id,
              amount: this.quantity,
              price: this.stock.price
            });
          } else {
            alert('You can\'t sell more stocks than you currently have');
          }
          this.quantity = '';
        }

      }
    },
    computed: {
      isQuantityValid() {
        return !(this.quantity > 0 && Number.isInteger(this.quantity));
      }
    }
  }
</script>

<style scoped>

</style>
