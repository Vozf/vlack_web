import { ActionTree } from 'vuex';
import { ChatStateType } from '@/store/store.types';
import ChatWindowService from '@/components/ChatWindowService';

export const actions: ActionTree<ChatStateType, ChatStateType> = {
    async sendMessage({ dispatch, commit, state }, message) {
        const chatId = state.currentChat && state.currentChat.chat.id;
        if (!chatId) {
            return;
        }
        ChatWindowService.sendMessage(chatId, message).subscribe(() => {
            dispatch('fetchCurrentChat', chatId);
        });
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
