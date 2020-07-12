<template>
  <b-tabs :vertical="vertical"
    :position="position"
    v-model="activeTab"
    class="router-tabs"
  >
    <slot></slot>
  </b-tabs>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RouterTabs extends Vue {
  @Prop(Array)
  protected readonly routes!: string[];

  @Prop({ default: false })
  protected readonly vertical!: boolean;

  @Prop({ default: 'is-right' })
  protected readonly position!: string;

  protected get activeTab(): number {
    const indexes = this.routes.map((tab) => {
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

  protected set activeTab(tab: number) {
    if (this.$router.currentRoute.name === this.routes[tab]) {
      return;
    }
    this.$router.push({ name: `${this.routes[tab]}` });
  }
}
</script>

<style lang="less">
.router-tabs > nav {
  width: 100%;
}
</style>
