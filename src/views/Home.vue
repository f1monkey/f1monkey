<template>
  <div class="home">
    <b-tabs
      position="is-right"
      class="block"
      @change="go"
    >
      <b-tab-item
        label="Market"
        icon="bitcoin"
        value="Market"
      ></b-tab-item>
      <b-tab-item
        label="Settings"
        icon="cog"
        value="Settings"
      ></b-tab-item>
    </b-tabs>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomeView extends Vue {
  go(tab: string): void {
    if (this.$router.currentRoute.name === tab) {
      return;
    }
    this.$router.push({ name: tab });
  }
}
</script>
