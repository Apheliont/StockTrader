export const stock = {
  state: {
    stocks: [
      {name: 'Lada', price: 50},
      {name: 'Bitcoin', price: 100},
      {name: 'Kfc', price: 250},
      {name: 'Aeroflot', price: 150},
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
  },
  mutations: {
    endDay(state) {
      const stocksArr = state.stocks;
      for (let stock of stocksArr) {
        const randomeValue = Math.floor(Math.random() * 25);
        const randomeSign = Math.floor(Math.random() * 100) >= 50 ? '-' : '+';
        switch(randomeSign) {
          case '-': stock.price -= randomeValue; break;
          case '+': stock.price += randomeValue; break;
        }
        if (stock.price < 0) {
          stock.price = 0;
        }
      }
    }
  }
};
