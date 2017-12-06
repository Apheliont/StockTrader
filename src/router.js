import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Sell from './components/Sell/Sell';
import Buy from './components/Buy/Buy';

Vue.use(VueRouter);

const routes = [
  {path: '', component: Home},
  {path: '/sell', component: Sell, name: 'sell'},
  {path: '/buy', component: Buy, name: 'buy'},
  {path: '*', redirect: '/'}
];

export const router = new VueRouter({
  routes
});
