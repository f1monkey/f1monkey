import 'reflect-metadata';

import '@mdi/font/css/materialdesignicons.min.css';
import '@mdi/font/fonts/materialdesignicons-webfont.woff2';

import 'buefy/dist/buefy.css';
import Buefy from 'buefy';

import '@/container';

import Vue from 'vue';
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
