import { Module } from 'vuex';
import RootState from '@/store/rootstate';
import User from '@/lib/Auth/Dto/User';

export interface UserState {
  username: string | undefined;
}

const UserModule: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    username: undefined,
  },
  actions: {
    login: ({ commit }, payload: User) => {
      commit('LOGIN', payload.username);
    },
    register: ({ commit }, payload: User) => {
      commit('LOGIN', payload.username);
    },
  },
  mutations: {
    LOGIN: (state: UserState, payload: string) => {
      state.username = payload;
    },
  },
};

export default UserModule;
