import { Module } from 'vuex';
import RootState from '@/store/rootstate';
import container from '@/container';
import SERVICES from '@/lib/InternalApi/services';
import CharacterServiceInterface from '@/lib/InternalApi/Service/CharacterServiceInterface';
import Character from '@/lib/InternalApi/Dto/Character';

const characterService = container.get<CharacterServiceInterface>(SERVICES.CharacterServiceInterface);

export interface CharacterState {
  items: Character[];
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
    getById: (state) => (id: string) => state.items.find((character) => character.getId() === id),
  },
};

export default CharacterModule;
