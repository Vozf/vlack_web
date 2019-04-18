import { ActionTree } from 'vuex';
import { ChatStateType } from '@/store/store.types';
import ChatWindowService from '@/components/ChatWindowService';

export const actions: ActionTree<ChatStateType, ChatStateType> = {
    updateMessages({ commit }) {
        commit('updateMessages', []);
    },
    async sendMessage({ dispatch, commit }, message) {
        ChatWindowService.sendMessage(message).subscribe(() =>
            dispatch('updateMessages'),
        );
    },
    async fetchCurrentChat({ commit }, chatId) {
        ChatWindowService.getChat(chatId).subscribe((currentChat) =>
            commit('setCurrentChat', currentChat),
        );
    },
    async fetchChatList({ commit }) {
        ChatWindowService.getChatList().subscribe((chatList) =>
            commit('setChatList', chatList),
        );
    },
};
