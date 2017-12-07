export const stock = {
  state: {
    stocks: [
      {id: 1, name: 'Lada', price: 50},
      {id: 2, name: 'Bitcoin', price: 100},
      {id: 3, name: 'Kfc', price: 250},
      {id: 4, name: 'Aeroflot', price: 150},
    ]
  },
  getters: {
    stocks(state) {
      return state.stocks;
    },
  },
  mutations: {
    endDay(state) {
      state.stocks.forEach(stock => {
        stock.price = Math.floor(stock.price * (0.5 + Math.random()));
      });
    }
  }
};
