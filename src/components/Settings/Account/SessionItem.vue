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
        <div class="column is-2">
          <b-button type="is-danger" @click="destroy">Destroy</b-button>
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

  public async destroy() {
    await this.$store.dispatch('sessions/delete', this.id);
  }
}

</script>
