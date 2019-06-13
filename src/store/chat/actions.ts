import { ActionTree } from 'vuex';
import { ChatStateType } from '@/store/chat/types';
import ChatWindowService from '@/components/ChatWindow/ChatWindowService';
import { RootState } from '@/store/types';

export const actions: ActionTree<ChatStateType, RootState> = {
    async sendMessage({ dispatch, commit, state }, message) {
        const chatId = state.currentChat && state.currentChat.chat.id;
        if (!chatId) {
            return;
        }
        ChatWindowService.sendMessage(chatId, message).subscribe();
    },
    async fetchCurrentChat({ commit, state }) {
        if (!state.currentChat) {
            return;
        }
        ChatWindowService.getChat(state.currentChat.chat.id).subscribe(
            (currentChat) => commit('setCurrentChat', currentChat),
        );
    },
    async changeCurrentChat({ commit }, chatId) {
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
