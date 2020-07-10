import { Module } from 'vuex';
import RootState from '@/store/rootstate';
import User from '@/lib/User/Dto/User';
import container from '@/container';
import AuthServiceInterface from '@/lib/User/Service/AuthServiceInterface';
import SERVICES from '@/lib/User/services';
import UserStorageInterface from '@/lib/User/Service/UserStorageInterface';
import TokenPair from '@/lib/User/Dto/TokenPair';

const authService = container.get<AuthServiceInterface>(SERVICES.AuthServiceInterface);
const userStorage = container.get<UserStorageInterface>(SERVICES.UserStorageInterface);

interface LoginForm {
  username: string;
  email: string;
}

export interface UserState {
  user: User | undefined;
  confirmed: boolean;
  login: LoginForm;
}

const UserModule: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    user: userStorage.getCurrent(),
    confirmed: false,
    login: {
      username: '',
      email: '',
    },
  },
  actions: {
    login: async ({ commit }, payload: User) => {
      commit('SET_USER', payload);
      await authService.login(payload);
    },
    loginConfirm: async ({ commit, state }, payload: string) => {
      const { user } = state;
      if (user === undefined) {
        return;
      }

      const tokens = await authService.loginConfirm(user, payload);
      commit('SET_TOKENS', tokens);
    },
    register: async ({ commit }, payload: User) => {
      await authService.register(payload);
      commit('SET_USER', payload);
    },
  },
  mutations: {
    SET_LOGIN_USERNAME: (state: UserState, payload: string) => {
      state.login.username = payload;
    },
    SET_LOGIN_EMAIL: (state: UserState, payload: string) => {
      state.login.email = payload;
    },
    SET_USER: (state: UserState, payload: User) => {
      userStorage.setCurrent(payload);
      state.user = payload;
    },
    SET_TOKENS: (state: UserState, payload: TokenPair) => {
      const { user } = state;
      if (user === undefined) {
        return;
      }
      user.setTokens(payload);
      userStorage.setCurrent(user);
    },
  },
};

export default UserModule;
