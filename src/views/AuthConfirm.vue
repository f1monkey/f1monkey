<template>
  <auth-confirm></auth-confirm>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import AuthConfirm from '@/components/Auth/AuthConfirm.vue';

@Component({
  components: {
    AuthConfirm,
  },
})
export default class AuthConfirmView extends Vue {}
</script>
