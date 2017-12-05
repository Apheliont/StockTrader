export const user = {
  state: {
    money: 10000,
    stocks: []
  },
  getters: {
    userMoney(state) {
      return state.money;
    },
    userStocks(state) {
      return state.stocks;
    }
  },
  mutations: {
    buyStocks(state, payload) {
      const {name, amount, price: stockPrice} = payload;
      state.money -= stockPrice * amount;

      for (let stock of state.stocks) {
        if (stock.name === name) {
          stock.amount += amount;
          return;
        }
      }
      state.stocks.push({name, amount});

    },
    sellStock(state, payload) {
      const {name, amount, price: stockPrice} = payload;
      state.money += stockPrice * amount;

      const stocksArrLength = state.stocks.length;
      for (let index = 0; index < stocksArrLength; index++) {
        if (name === state.stocks[index].name) {
          state.stocks[index].amount -= amount;
          if (state.stocks[index].amount === 0) {
            state.stocks.splice(index, 1);
          }
          break;
        }
      }
    }
  }
};


