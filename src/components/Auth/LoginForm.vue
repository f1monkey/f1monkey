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
import User from '@/lib/Auth/Dto/User';

@Component
export default class LoginForm extends Vue {
  username = '';

  async login() {
    await this.$store.dispatch('user/login', new User(this.username));
  }
}
</script>
