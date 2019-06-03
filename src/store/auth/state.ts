import { AuthStateType } from '@/store/auth/types';

export const state: AuthStateType = {
    loggedin: false,
    user: false,
    tokens: {
        access: null,
        refresh: null,
    },
};
