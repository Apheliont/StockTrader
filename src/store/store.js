import Vue from 'vue';
import Vuex from 'vuex';

import {stock} from './modules/stock';
import {user} from './modules/user';

Vue.use(Vuex);

export const store = new Vuex.Store({
  getters: {
    getAllData(state, getters) {
      const userData = getters.userData;
      const marketData = getters.stocks;
      return {userData, marketData};
    }
  },
  mutations: {
    saveAllData(state, data) {
      state.stock.stocks = data.marketData;
      state.user.money = Number(data.userData.money);
      state.user.stocks = state.user.stocks ? state.user.stocks : [];
    }
  },
  actions: {
    fetchData({commit}) {
      Vue.http.get('data.json')
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (data) {
            commit('saveAllData', data);
          }
        })
        .catch(error => console.log(error));
    },
    pushData(context) {
      Vue.http.put('data.json', context.getters.getAllData)
        .then(response => {
          console.log(response);
        }).catch(error => {
        console.log(error);
      });
    }
  },
  modules: {
    stock,
    user
  }
});
