import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import RootState from '@/store/rootstate';
import user from '@/store/modules/user';
import sessions from '@/store/modules/sessions';
import characters from '@/store/modules/characters';

Vue.use(Vuex);

let loadingCounter = 0;

const store: StoreOptions<RootState> = {
  state: {
    loading: false,
  },
  mutations: {
    SET_LOADING(state, payload: boolean) {
      state.loading = payload;
    },
  },
  actions: {
    loading({ commit }, payload: boolean) {
      if (payload) {
        loadingCounter++;
      } else {
        loadingCounter--;
      }
      commit('SET_LOADING', loadingCounter > 0);
    },
  },
  modules: {
    user,
    sessions,
    characters,
  },
};

export default new Vuex.Store<RootState>(store);
