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
import UserSession from '@/lib/InternalApi/Dto/UserSession';
import { Component, Vue } from 'vue-property-decorator';
import Loading from '@/components/Decorators/Loading';

@Component({
  components: {
    SessionItem,
  },
})
export default class Sessions extends Vue {
  public get items(): UserSession[] {
    return this.$store.state.sessions.items;
  }

  @Loading
  public async loadSessions() {
    await this.$store.dispatch('sessions/getList');
  }

  async mounted() {
    await this.loadSessions();
  }
}

</script>
