<template>
  <section class="section">
    <sessions />
  </section>
</template>

<script lang="ts">
import Sessions from '@/components/Settings/Account/Sessions.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Sessions,
  },
})
export default class Account extends Vue {

}

</script>
