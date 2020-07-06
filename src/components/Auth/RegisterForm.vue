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
import User from '@/lib/Auth/Dto/User';

@Component
export default class RegisterForm extends Vue {
  protected username = '';

  protected email = '';

  protected register() {
    this.$store.dispatch('user/register', new User(this.username, this.email));
  }
}
</script>
