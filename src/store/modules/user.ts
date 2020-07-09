import { Module } from 'vuex';
import RootState from '@/store/rootstate';
import User from '@/lib/Auth/Dto/User';
import container from '@/container';
import AuthServiceInterface from '@/lib/Auth/Service/AuthServiceInterface';
import SERVICES from '@/lib/Auth/services';

const authService = container.get<AuthServiceInterface>(SERVICES.AuthServiceInterface);

export interface UserState {
  username: string | undefined;
  confirmed: boolean;
}

const UserModule: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    username: undefined,
    confirmed: false,
  },
  actions: {
    login: async ({ commit }, payload: User) => {
      await authService.login(payload);
      commit('LOGIN', payload.getUsername());
    },
    loginConfirm: async ({ commit }, payload: { user: User; code: string }) => {
      const tokens = await authService.loginConfirm(payload.user, payload.code);
      // commit('LOGIN_CONFIRM', payload.getUsername());
    },
    register: async ({ commit }, payload: User) => {
      await authService.register(payload);
      commit('LOGIN', payload.getUsername());
    },
  },
  mutations: {
    LOGIN: (state: UserState, payload: string) => {
      state.username = payload;
    },
  },
};

export default UserModule;
