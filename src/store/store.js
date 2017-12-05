import Vue from 'vue';
import Vuex from 'vuex';

import { stock } from './modules/stock';
import { user } from './modules/user';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    stock,
    user
  }
});
