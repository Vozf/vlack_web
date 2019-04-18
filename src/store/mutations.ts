import { MutationTree } from 'vuex';
import { MessageType, ChatStateType } from '@/store/store.types';

export const mutations: MutationTree<ChatStateType> = {
    updateMessages(state, messages: MessageType[]) {
        // state.chats = messages;
    },
    setCurrentChat(state, currentChat) {
        state.currentChat = currentChat;
    },
};
