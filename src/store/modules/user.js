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
    },
    userData(state) {
      return state;
    }
  },
  mutations: {
    buyStocks(state, payload) {
      const {name, amount, price: stockPrice} = payload;
      state.money -= stockPrice * amount;

      const stocksArrLength = state.stocks.length;
      for (let index = 0; index < stocksArrLength; index++) {
        if (name === state.stocks[index].name) {
          state.stocks[index].amount += Number(amount);
          return true;
        }
      }
      state.stocks.push({name, amount: Number(amount)});

    },
    sellStocks(state, payload) {
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
    },
  }
};


