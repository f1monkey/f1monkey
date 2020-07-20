<template>
  <section class="section">
    <h1 class="subtitle">Character list</h1>
    <h2 class="subtitle"><button>+<b-icon icon="account"></b-icon></button></h2>
    <div
      class="columns is-multiline"
      ref="loading"
    >
      <div
        class="column is-half"
        v-for="character in characters"
        :key="character.id"
      >
        <character-card :id="character.id"></character-card>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Character from '@/lib/InternalApi/Dto/Character';
import CharacterCard from '@/components/Settings/Characters/CharacterCard.vue';
import { Component, Vue } from 'vue-property-decorator';
import Loading from '@/components/Decorators/Loading';

@Component({
  components: {
    CharacterCard,
  },
})
export default class CharacterList extends Vue {
  get characters(): Character[] {
    return this.$store.state.characters.items;
  }

  public async mounted() {
    await this.loadCharacters();
  }

  @Loading
  public async loadCharacters() {
    await this.$store.dispatch('characters/getList');
  }
}

</script>
