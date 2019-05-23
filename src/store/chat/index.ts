import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ChatStateType } from './types';
import { RootState } from '../types';
import { state } from './state';

export const chat: Module<ChatStateType, RootState> = {
    state,
    getters,
    actions,
    mutations,
};
