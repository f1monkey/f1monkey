import { Module } from 'vuex';
import RootState from '@/store/rootstate';
import container from '@/container';
import INTERNAL_API_SERVICES from '@/lib/InternalApi/services';
import CharacterServiceInterface from '@/lib/InternalApi/Service/CharacterServiceInterface';
import Character from '@/lib/InternalApi/Dto/Character';
import ImageServiceInterface from '@/lib/EveApi/Services/ImageServiceInterface';
import EVEAPI_SERVICES from '@/lib/EveApi/services';

const characterService = container.get<CharacterServiceInterface>(INTERNAL_API_SERVICES.CharacterServiceInterface);
const imageService = container.get<ImageServiceInterface>(EVEAPI_SERVICES.ImageServiceInterface);

export interface CharacterState {
  items: Character[];
}

function getCharacterById(state: CharacterState, id: string): Character | undefined {
  return state.items.find((character) => character.getId() === id);
}

const CharacterModule: Module<CharacterState, RootState> = {
  namespaced: true,
  state: {
    items: [],
  },
  actions: {
    async getList({ commit }) {
      const characters = await characterService.getList();
      commit('SET_CHARACTERS', characters);
    },
    async delete({ commit }, payload: string) {
      await characterService.delete(payload);
      commit('DELETE_CHARACTERS', payload);
    },
  },
  mutations: {
    SET_CHARACTERS(state, payload: Character[]) {
      state.items = payload;
    },
    DELETE_CHARACTERS(state, payload: string) {
      state.items = state.items.filter(
        (character) => character.getId() !== payload,
      );
    },
  },
  getters: {
    getById(state) {
      return (id: string) => getCharacterById(state, id);
    },
    getPortrait(state) {
      return (id: string, size: number): string | undefined => {
        const character = getCharacterById(state, id);
        if (character === undefined) {
          return undefined;
        }

        return imageService.getCharacterPortrait(character.getCharacterId(), size);
      };
    },
  },
};

export default CharacterModule;
