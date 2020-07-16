<template>
  <article class="box media">
    {{ item.characterName }}
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Character from '@/lib/InternalApi/Dto/Character';

@Component
export default class CharacterCard extends Vue {
  @Prop(String)
  protected readonly id!: string

  get item(): Character {
    return this.$store.getters['characters/getById'](this.id);
  }
}
</script>
