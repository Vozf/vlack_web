import { ActionTree } from 'vuex';
import AuthService from '@/components/Auth/AuthService';
import { RootState } from '@/store/types';
import { AuthStateType } from '@/store/auth/types';
import jwt_decode from 'jwt-decode';
import router from '@/router/router';

export const actions: ActionTree<AuthStateType, RootState> = {
    async login({ commit }, credentials: { login: string; password: string }) {
        return AuthService.login(credentials).subscribe((jwt) => {
            const { jwt: user } = jwt_decode(jwt);
            commit('setUser', user);
            commit('setToken', jwt);
            router.push('/chats');
        });
    },

    async logout({ commit }) {
        commit('setUser', null);
        commit('clearToken', null);
        router.push('/login');
    },
};
