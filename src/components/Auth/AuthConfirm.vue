<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Code sent
          </h1>
          <h2 class="subtitle">{{authCode}}
            Authentication code sent to {{email}}. It will remain valid for 30 minutes.
          </h2>
        </div>
      </div>
    </section>
    <b-field
      label="Auth code"
      label-position="on-border"
    >
      <b-input v-model="authCode"></b-input>
    </b-field>

    <b-button
      type="is-primary"
      @click="loginConfirm"
    >Confirm code</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AuthConfirm extends Vue {
  get email(): string {
    return this.$store.state.user.login.email;
  }

  protected authCode: string

  constructor() {
    super();
    this.authCode = '';
  }

  async loginConfirm() {
    try {
      await this.$store.dispatch('user/loginConfirm', this.authCode);
      this.$router.push({ name: 'Home' });
      // eslint-disable-next-line no-empty
    } catch (e) { }
  }
}

</script>
