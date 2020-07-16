<template>
  <section class="section">
    <h1 class="subtitle">Character list</h1>
    <h2 class="subtitle"><button>+<b-icon icon="account"></b-icon></button></h2>
    <div class="columns is-multiline">
      <div class="column is-half">
        <character-card v-for="character in characters" :key="character.id" :id="character.id"></character-card>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Character from '@/lib/InternalApi/Dto/Character';
import CharacterCard from '@/components/Settings/Characters/CharacterCard.vue';

@Component({
  components: {
    CharacterCard,
  },
})
export default class CharacterList extends Vue {
  get characters(): Character[] {
    return this.$store.state.characters.items;
  }

  async mounted() {
    await this.$store.dispatch('characters/getList');
  }
}

</script>
