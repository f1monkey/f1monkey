import 'buefy/dist/buefy.css';
import 'reflect-metadata';

import '@/lib/Api/container';
import '@/lib/Auth/container';
import '@/lib/Event/container';

import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
