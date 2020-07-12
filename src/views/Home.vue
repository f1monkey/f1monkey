<template>
  <div class="home">
    <router-tabs :tabs="['Market','Settings-Characters']">
      <b-tab-item
        label="Market"
        icon="bitcoin"
      ></b-tab-item>
      <b-tab-item
        label="Settings"
        icon="cog"
      ></b-tab-item>
    </router-tabs>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import RouterTabs from '@/components/Common/RouterTabs.vue';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    RouterTabs,
  },
})
export default class HomeView extends Vue {
}
</script>
