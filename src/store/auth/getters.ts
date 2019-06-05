import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthStateType } from '@/store/auth/types';

export const getters: GetterTree<AuthStateType, RootState> = {
    user(state) {
        return state.user;
    },
    loggedin(state) {
        return state.user && state.token;
    },
    token(state) {
        return state.token;
    },
    auth(state) {
        return state;
    },
};
