<template>
  <div
    id="app"
    class="container"
  >
    <section class="section is-medium">
      <router-view />
      <error-popup />
      <b-loading
        :is-full-page="true"
        :active.sync="loading"
        :can-cancel="false"
      ></b-loading>
    </section>
  </div>
</template>

<script lang="ts">
import ErrorPopup from '@/components/ErrorPopup.vue';
import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
  components: {
    ErrorPopup,
  },
})
export default class App extends Vue {
  get loading(): boolean {
    return this.$store.state.loading;
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
