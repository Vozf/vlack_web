import { ActionTree } from 'vuex';
import { MessagesState } from '@/store/store.types';
import ChatWindowService from '@/components/ChatWindowService';

export const actions: ActionTree<MessagesState, MessagesState> = {
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
