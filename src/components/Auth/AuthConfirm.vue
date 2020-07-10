<template>
  <div>
    <b-field
      label="Auth code"
      label-position="on-border"
    >
      <b-input v-model="authCode"></b-input>
    </b-field>

    <b-button type="is-primary" @click="loginConfirm">Confirm code</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AuthConfirm extends Vue {
  protected authCode: string

  constructor() {
    super();
    this.authCode = '';
  }

  async loginConfirm() {
    try {
      await this.$store.dispatch('user/loginConfirm', this.authCode);
    // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

</script>
