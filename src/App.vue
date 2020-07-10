<template>
  <div
    id="app"
    class="container"
  >
    <section class="section is-medium">
      <router-view />
      <error-popup />
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
