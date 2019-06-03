import { ActionTree } from 'vuex';
import AuthService from '@/interceptors/AuthService';
import { RootState } from '@/store/types';
import { AuthStateType } from '@/store/auth/types';

export const actions: ActionTree<AuthStateType, RootState> = {
    async login({ commit }, credentials) {
        return AuthService.login(credentials).then((data) => {
            commit('setLoggedIn', true);
            commit('setUser', data.user);
            commit('setAccessToken', data.token.access);
            commit('setRefreshToken', data.token.refresh);
        });
    },

    async logout({ commit }) {
        commit('setLoggedIn', false);
        commit('setUser', false);
        commit('clearAccessToken', false);
        commit('clearRefreshToken', false);
    },
};
