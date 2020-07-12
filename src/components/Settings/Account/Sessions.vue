<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Session list</h1>
      <h2 class="subtitle">List of all your active sessions</h2>
      <session-item
        v-for="item in items"
        :key="item.id"
        :id="item.id"
      ></session-item>
    </div>
  </section>
</template>

<script lang="ts">
import SessionItem from '@/components/Settings/Account/SessionItem.vue';
import { Component, Vue } from 'vue-property-decorator';
import UserSession from '../../../lib/User/Dto/UserSession';

@Component({
  components: {
    SessionItem,
  },
})
export default class Sessions extends Vue {
  get items(): UserSession[] {
    return this.$store.state.sessions.items;
  }

  constructor() {
    super();
  }
}

</script>
