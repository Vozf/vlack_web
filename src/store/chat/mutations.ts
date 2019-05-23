import { MutationTree } from 'vuex';
import { ChatStateType } from '@/store/chat/types';

export const mutations: MutationTree<ChatStateType> = {
    setCurrentChat(state, currentChat) {
        state.currentChat = currentChat;
    },
    setChatList(state, chatList) {
        state.chats = chatList;
    },
};
