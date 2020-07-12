import Settings from '@/components/Settings/Settings.vue';
import CharacterSettings from '@/components/Settings/Characters/Characters.vue';
import AccountSettings from '@/components/Settings/Account/Account.vue';

import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
  {
    path: '/settings',
    component: Settings,
    children: [
      {
        path: '',
        component: CharacterSettings,
        name: 'Settings-Characters',
      },
      {
        path: 'account',
        component: AccountSettings,
        name: 'Settings-Account',
      },
    ],
  },
];

export default routes;
