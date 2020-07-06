<template>
  <auth></auth>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Auth from '@/components/Auth/Auth.vue';

@Component({
  components: {
    Auth,
  },
})
export default class AuthView extends Vue {}
</script>
