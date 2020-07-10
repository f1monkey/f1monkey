import Market from '@/components/Market/Market.vue';

import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
  {
    path: '/market',
    component: Market,
    name: 'Market',
  },
];

export default routes;
