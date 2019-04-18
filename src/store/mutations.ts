import { MutationTree } from 'vuex';
import { MessageType, MessagesStateType } from '@/store/store.types';

export const mutations: MutationTree<MessagesStateType> = {
    updateMessages(state, messages: MessageType[]) {
        state.messages = messages;
    },
};
