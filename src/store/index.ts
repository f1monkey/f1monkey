import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import RootState from '@/store/rootstate';
import user from '@/store/modules/user';
import sessions from '@/store/modules/sessions';
import characters from '@/store/modules/characters';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    loading: true,
  },
  mutations: {
    SET_LOADING(state, payload: boolean) {
      state.loading = payload;
    },
  },
  actions: {
    setLoading({ commit }, payload: boolean) {
      commit('SET_LOADING', payload);
    },
  },
  modules: {
    user,
    sessions,
    characters,
  },
};

export default new Vuex.Store<RootState>(store);
