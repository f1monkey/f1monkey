<template>
  <section class="section">
    <b-tabs
      position="is-right"
      class="block"
      @change="go"
    >
      <b-tab-item
        label="Characters"
        icon="account-group"
        value="Settings-Characters"
      ></b-tab-item>
      <b-tab-item
        label="Account"
        icon="account-lock"
        value="Settings-Account"
      ></b-tab-item>
    </b-tabs>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Settings extends Vue {
  constructor() {
    super();
  }

  go(tab: string): void {
    if (this.$router.currentRoute.name === tab) {
      return;
    }
    this.$router.push({ name: tab });
  }
}

</script>
