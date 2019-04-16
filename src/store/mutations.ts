import { MutationTree } from 'vuex';
import { Message, MessagesState } from '@/store/store.types';

export const mutations: MutationTree<MessagesState> = {
    updateMessages(state, messages: Message[]) {
        state.messages = messages;
    },
};
