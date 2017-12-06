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
      state.user = data.userData;
      if (!data.userData.stocks) {
        state.user.stocks = []
      }
    }
  },
  actions: {
    fetchData({commit}) {
      Vue.http.get('https://vue-stock-trader-project.firebaseio.com/data.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
          commit('saveAllData', data)
        })
        .catch(error => console.log(error));
    },
    pushData(context) {
      Vue.http.put('https://vue-stock-trader-project.firebaseio.com/data.json', context.getters.getAllData)
        .then(response => {
          console.log(response)
        }).catch(error => {
        console.log(error)
      });
    }
  },
  modules: {
    stock,
    user
  }
});
