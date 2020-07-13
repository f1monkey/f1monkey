import { Module } from 'vuex';
import RootState from '@/store/rootstate';
import container from '@/container';
import SERVICES from '@/lib/InternalApi/services';
import SessionServiceInterface from '@/lib/InternalApi/Service/SessionServiceInterface';
import UserSession from '@/lib/InternalApi/Dto/UserSession';

const sessionService = container.get<SessionServiceInterface>(SERVICES.SessionServiceInterface);

export interface SessionState {
  items: UserSession[];
}

const SessionModule: Module<SessionState, RootState> = {
  namespaced: true,
  state: {
    items: [],
  },
  actions: {
    async getList({ commit }) {
      const sessions = await sessionService.getList();
      commit('SET_SESSIONS', sessions);
    },
    async delete({ commit }, payload: string) {
      await sessionService.delete(payload);
      commit('DELETE_SESSION', payload);
    },
  },
  mutations: {
    SET_SESSIONS(state, payload: UserSession[]) {
      state.items = payload;
    },
    DELETE_SESSION(state, payload: string) {
      state.items = state.items.filter(
        (session) => session.getId() !== payload,
      );
    },
  },
  getters: {
    getById: (state) => (id: string) => state.items.find((session) => session.getId() === id),
  },
};

export default SessionModule;
