import SERVICES from '@/lib/InternalApi/services';

import AuthView from '@/views/Auth.vue';
import Auth from '@/components/Auth/Auth.vue';
import AuthConfirm from '@/components/Auth/AuthConfirm.vue';

import { RouteConfig } from 'vue-router';

import container from '@/container';

import AuthServiceInterface from '@/lib/InternalApi/Service/AuthServiceInterface';

const authService = container.get<AuthServiceInterface>(SERVICES.AuthServiceInterface);

const routes: Array<RouteConfig> = [
  {
    path: '/auth',
    component: AuthView,
    children: [
      {
        name: 'Auth',
        path: '',
        component: Auth,
      },
      {
        name: 'AuthConfirm',
        path: 'confirm',
        component: AuthConfirm,
        beforeEnter: (to, from, next) => {
          if (!authService.isConfirmingLogIn()) {
            next({ name: 'Auth' });
          } else {
            next();
          }
        },
      },
    ],
    beforeEnter: (to, from, next) => {
      if (authService.isAuthenticated()) {
        next({ name: 'Home' });
      } else {
        next();
      }
    },
  },
];

export default routes;
