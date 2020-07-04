<template>
  <b-tabs v-model="activeTab">

    <b-tab-item label="Login">
      <login-form></login-form>
    </b-tab-item>

    <b-tab-item label="Register">
      <register-form></register-form>
    </b-tab-item>

  </b-tabs>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/Auth/LoginForm.vue';
import RegisterForm from '@/components/Auth/RegisterForm.vue';

@Component({
  components: {
    LoginForm,
    RegisterForm,
  },
})
export default class Auth extends Vue {
  protected activeTab: number

  constructor() {
    super();
    this.activeTab = 0;
  }
}

</script>
