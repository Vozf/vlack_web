import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { AuthStateType } from '@/store/auth/types';

export const getters: GetterTree<AuthStateType, RootState> = {
    user(state) {
        return state.user;
    },
    loggedin(state) {
        return state.loggedin;
    },
    accesstoken(state) {
        return state.tokens.access;
    },
    refreshtoken(state) {
        return state.tokens.refresh;
    },
    auth(state) {
        return state;
    },
};
