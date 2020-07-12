<template>
  <b-tabs
    position="is-right"
    class="block"
    v-model="activeTab"
  >
    <slot></slot>
  </b-tabs>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const RouterTabsProps = Vue.extend({
  props: {
    tabs: Array,
  },
});

@Component
export default class RouterTabs extends RouterTabsProps {
  get activeTab(): number {
    const indexes = this.tabs.map((tab) => {
      const matchedIndexes: number[] = [];
      this.$route.matched.forEach((route, routeIndex) => {
        if (route.name === tab) {
          matchedIndexes.push(routeIndex);
        }
      });

      return Math.max(...matchedIndexes, -1);
    });

    if (indexes.length === 0) {
      return 0;
    }

    const sorted = [...indexes].sort((a, b) => b - a);
    return indexes.indexOf(sorted[0]);
  }

  set activeTab(tab: number) {
    if (this.$router.currentRoute.name === this.tabs[tab]) {
      return;
    }
    this.$router.push({ name: `${this.tabs[tab]}` });
  }
}
</script>
