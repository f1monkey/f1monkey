<template>
  <section class="section">
    <router-tabs :tabs="['Settings-Characters', 'Settings-Account']">
      <b-tab-item
        label="Characters"
        icon="account-group"
      ></b-tab-item>
      <b-tab-item
        label="Account"
        icon="account-lock"
      ></b-tab-item>
    </router-tabs>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import RouterTabs from '@/components/Common/RouterTabs.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    RouterTabs,
  },
})
export default class Settings extends Vue {

}

</script>
