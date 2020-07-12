<template>
  <div class="home">
    <b-button class="menu-button" icon-left="menu" v-if="!open" @click="toggleSidebar"></b-button>
    <b-sidebar
      type="is-light"
      :fullheight="true"
      :fullwidth="false"
      :overlay="false"
      :right="false"
      :open.sync="open"
      :reduce="false"
    >
      <div class="p-1">
        <div class="block">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </div>
        <router-tabs
          position="is-left"
          :vertical="true"
          :routes="['Market','Settings-Characters']"
        >
          <b-tab-item
            label="Market"
            icon="bitcoin"
          ></b-tab-item>
          <b-tab-item
            label="Settings"
            icon="cog"
          ></b-tab-item>
        </router-tabs>
      </div>
    </b-sidebar>
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
  protected open = false;

  public toggleSidebar() {
    this.open = !this.open;
  }
}
</script>

<style lang="less" scoped>
.menu-button {
  position: fixed;
  top: 5px;
  left: 5px;
}
</style>
