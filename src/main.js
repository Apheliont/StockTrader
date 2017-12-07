import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import { router } from './router';
import { store } from './store/store';

Vue.use(VueResource);
Vue.http.options.root = 'https://vue-stock-trader-project.firebaseio.com/';
Vue.filter('moneyFormat', (money) => {
  return `$${money.toLocaleString().replace(/\D/g, '.')}`;
});


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
