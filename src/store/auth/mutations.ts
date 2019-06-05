import { MutationTree } from 'vuex';
import { AuthStateType } from '@/store/auth/types';

export const mutations: MutationTree<AuthStateType> = {
    setUser(state, user) {
        state.user = user;
    },
    clearUser(state) {
        state.user = null;
    },
    setToken(state, token) {
        localStorage.setItem('accessToken', token);
        state.token = token;
    },
    clearToken(state) {
        localStorage.removeItem('accessToken');
        state.token = null;
    },
};
