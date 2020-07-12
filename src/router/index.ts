import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import auth from '@/router/auth';
import market from '@/router/market';
import settings from '@/router/settings';

import container from '@/container';
import SERVICES from '@/lib/User/services';
import AuthServiceInterface from '@/lib/User/Service/AuthServiceInterface';

import Home from '@/views/Home.vue';

const authService = container.get<AuthServiceInterface>(SERVICES.AuthServiceInterface);

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...auth,
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!authService.isAuthenticated()) {
        next({ name: 'Auth' });
      } else {
        next();
      }
    },
    children: [
      ...market,
      ...settings,
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
