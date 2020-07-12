<template>
  <article class="box media">
    <div class="media-content">
      <div class="columns">
        <div class="column is-10">
          <p>
            <strong>{{ item.info.ip}}</strong>
            <small v-if="item.info.platform">{{ item.info.platform }}/{{ item.info.browser }}</small><small v-else>unknown</small>
            <br>
            {{ item.createdAt.toUTCString() }}
          </p>
        </div>
        <div
          class="column is-2"
          v-if="!isCurrent()"
        >
          <b-button
            type="is-danger"
            @click="confirmDestroy"
          >Terminate</b-button>
        </div>
        <div
          class="column is-2"
          v-else
        >
          <b-button type="is-success" disabled>Current</b-button>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserSession from '../../../lib/User/Dto/UserSession';

const SessionItemProps = Vue.extend({
  props: {
    id: String,
  },
});

@Component
export default class SessionItem extends SessionItemProps {
  get item(): UserSession {
    return this.$store.getters['sessions/getById'](this.id);
  }

  public confirmDestroy() {
    this.$buefy.dialog.confirm({
      title: 'Deleting session',
      message: 'Are you sure you want to <b>terminate</b> this session? This action cannot be undone.',
      confirmText: 'Terminate session',
      type: 'is-danger',
      hasIcon: true,
      onConfirm: () => this.destroy(),
    });
  }

  public async destroy() {
    await this.$store.dispatch('sessions/delete', this.id);
    this.$buefy.toast.open('Session terminated!');
  }

  public isCurrent() {
    return this.$store.state.user.user.getTokens().getSessionId() === this.item.getId();
  }
}

</script>
