export const stock = {
  state: {
    stocks: [
      {name: 'Lada', price: 100},
      {name: 'Bitcoin', price: 100},
      {name: 'Kfc', price: 100},
      {name: 'Aeroflot', price: 100},
    ]
  },
  getters: {
    stocks(state) {
      return state.stocks;
    },
    getPriceByName(state) {
      return function (name) {
        for (let stock of state.stocks) {
          if (stock.name === name) {
            return stock.price;
          }
        }
      }
    }
  }
};
