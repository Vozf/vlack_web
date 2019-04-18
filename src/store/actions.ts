import { ActionTree } from 'vuex';
import { MessagesStateType } from '@/store/store.types';
import ChatWindowService from '@/components/ChatWindowService';

export const actions: ActionTree<MessagesStateType, MessagesStateType> = {
    updateMessages({ commit }) {
        commit('updateMessages', []);
    },
    async sendMessage({ dispatch, commit }, message) {
        console.log(message);
        ChatWindowService.sendMessage(message).subscribe(() =>
            dispatch('updateMessages'),
        );
    },
};
