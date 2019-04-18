import { MutationTree } from 'vuex';
import { ChatStateType } from '@/store/store.types';

export const mutations: MutationTree<ChatStateType> = {
    setCurrentChat(state, currentChat) {
        state.currentChat = currentChat;
    },
    setChatList(state, chatList) {
        state.chats = chatList;
    },
};
