<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Character
      </p>
    </header>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              :src="portrait"
              alt="Character portrait"
            >
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
          <p class="subtitle is-6">Added:</p><!-- @todo -->
          <b-collapse
            aria-id="contentIdForA11y2"
            class="panel"
            animation="slide"
          >
            <div
              slot="trigger"
              class="panel-heading"
              role="button"
              aria-controls="contentIdForA11y2"
            >
              <strong>Scopes</strong>
            </div>
            <div class="panel-block"><!-- @todo -->
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br />
              Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
            </div>
          </b-collapse>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <!-- <button class="button card-footer-item is-link">Scopes</button> -->
      <button class="button card-footer-item is-dark" @click="confirmDelete">Delete</button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Character from '@/lib/InternalApi/Dto/Character';

@Component
export default class CharacterCard extends Vue {
  @Prop(String)
  protected readonly id!: string

  protected showScopes = false;

  get name(): string {
    const character = this.getCharacter();
    if (character === undefined) {
      return '';
    }

    return character.getCharacterName();
  }

  get portrait(): string {
    return this.getPortrait(256);
  }

  protected confirmDelete() {
    const { name } = this;

    this.$buefy.dialog.confirm({
      title: 'Deleting character',
      message: `Are you sure you want to <b>delete</b> character <b>${name}</b> and all associated data? This action cannot be undone.`,
      confirmText: 'Delete character',
      type: 'is-danger',
      hasIcon: true,
      onConfirm: () => this.delete(),
    });
  }

  protected async delete() {
    await this.$store.dispatch('characters/delete', this.id);
    this.$buefy.toast.open('Character deleted!');
  }

  protected getPortrait(size: number): string {
    return this.$store.getters['characters/getPortrait'](this.id, size);
  }

  protected getCharacter(): Character | undefined {
    return this.$store.getters['characters/getById'](this.id);
  }
}
</script>

<style lang="less" scoped>
.button.card-footer-item {
  height: 100%;
}
</style>
