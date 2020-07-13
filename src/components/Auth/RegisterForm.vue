<template>
  <div>
    <b-field
      label="Username"
      label-position="on-border"
    >
      <b-input v-model="username"></b-input>
    </b-field>

    <b-field
      label="E-mail"
      label-position="on-border"
    >
      <b-input v-model="email"></b-input>
    </b-field>

    <b-button type="is-primary" @click="register">Register</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import User from '@/lib/InternalApi/Dto/User';

@Component
export default class RegisterForm extends Vue {
  get username() {
    return this.$store.state.user.login.username;
  }

  set username(value: string) {
    this.$store.commit('user/SET_LOGIN_USERNAME', value);
  }

  get email() {
    return this.$store.state.user.login.email;
  }

  set email(value: string) {
    this.$store.commit('user/SET_LOGIN_EMAIL', value);
  }

  async register() {
    try {
      await this.$store.dispatch('user/register', new User(this.username, this.email));
      this.$router.push({ name: 'AuthConfirm' });
    // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
</script>
