<template>
  <div>
    <b-field
      label="Username or e-mail"
      label-position="on-border"
    >
      <b-input v-model="username"></b-input>
    </b-field>

    <b-button type="is-primary" @click="login">Login</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import User from '@/lib/InternalApi/Dto/User';

@Component
export default class LoginForm extends Vue {
  get username() {
    return this.$store.state.user.login.username;
  }

  set username(value: string) {
    this.$store.commit('user/SET_LOGIN_USERNAME', value);
  }

  async login() {
    try {
      await this.$store.dispatch('user/login', new User(this.username));
      this.$router.push({ name: 'AuthConfirm' });
    // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
</script>
