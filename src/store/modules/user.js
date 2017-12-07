export const user = {
  state: {
    money: 10000,
    stocks: []
  },
  getters: {
    userMoney(state) {
      return state.money;
    },
    userStocks(state, getters) {
      return state.stocks.map(stock => {
        const hydratingData = getters.stocks.find(item => item.id === stock.id);
        return {
          id: stock.id,
          name: hydratingData.name,
          amount: stock.amount,
          price: hydratingData.price
        }
      });
    },
    userData(state) {
      return state;
    }
  },
  mutations: {
    buyStocks(state, payload) {
      const {id, amount, price} = payload;
      state.money -= price * amount;

      const foundStock = state.stocks.find(stock => stock.id === id);
      if (foundStock) {
        foundStock.amount += amount;
      } else {
        state.stocks.push({id, amount});
      }
    },
    sellStocks(state, payload) {
      const {id, amount, price} = payload;
      state.money += price * amount;

      const foundStock = state.stocks.find(stock => stock.id === id);
      if (foundStock.amount > amount) {
        foundStock.amount -= amount;
      } else {
        state.stocks.splice(state.stocks.indexOf(foundStock), 1);
      }
    },
  },
  actions: {
    buyStocks({commit}, payload) {
      commit('buyStocks', payload);
    },
    sellStocks({commit}, payload) {
      commit('sellStocks', payload);
    }
  }
};


