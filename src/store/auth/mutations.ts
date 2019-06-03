import { MutationTree } from 'vuex';
import { AuthStateType } from '@/store/auth/types';

export const mutations: MutationTree<AuthStateType> = {
    setUser(state, user) {
        state.user = user;
    },
    clearUser(state) {
        state.user = false;
    },
    setAccessToken(state, token) {
        localStorage.setItem('accessToken', token);
        state.tokens.access = token;
    },
    clearAccessToken(state) {
        localStorage.removeItem('accessToken');
        state.tokens.access = null;
    },
    setRefreshToken(state, token) {
        localStorage.setItem('refreshToken', token);
        state.tokens.refresh = token;
    },
    clearRefreshToken(state) {
        localStorage.removeItem('refreshToken');
        state.tokens.refresh = null;
    },
    setLoggedIn(state, status) {
        state.loggedin = status;
    },
};
