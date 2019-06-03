import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { AuthStateType } from './types';
import { RootState } from '../types';
import { state } from './state';

export const auth: Module<AuthStateType, RootState> = {
    state,
    getters,
    actions,
    mutations,
};
