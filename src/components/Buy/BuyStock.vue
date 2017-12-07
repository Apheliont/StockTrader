<template>
  <div class="card">
    <div class="card-header alert-success">
      {{stock.name}} (Price: {{stock.price}})
    </div>
    <div class="card-body d-flex flex-nowrap justify-content-between">
      <div>
        <label for="Quantity" class="sr-only">Quantity</label>
        <input type="number" class="form-control" id="Quantity" placeholder="Quantity" @keypress="buy" v-model.number="quantity">
      </div>
      <div class="col-auto">
        <button class="btn btn-success" @click="buy" :disabled="isQuantityValid">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      stock: {
        type: Object
      }
    },
    data() {
      return {
        quantity: ''
      }
    },
    methods: {
      buy() {
        if (event.type === 'click' ||event.type === 'keypress' && event.keyCode === 13) {
          const userMoney = this.$store.getters.userMoney;
          if (userMoney - (this.quantity * this.stock.price) >= 0) {
            this.$store.dispatch('buyStocks',
              {
                id: this.stock.id,
                amount: this.quantity,
                price: this.stock.price
              });
          } else {
            alert('Not enough money in your account');
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
