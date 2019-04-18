import { ActionTree } from 'vuex';
import { ChatStateType } from '@/store/store.types';
import ChatWindowService from '@/components/ChatWindowService';

export const actions: ActionTree<ChatStateType, ChatStateType> = {
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
