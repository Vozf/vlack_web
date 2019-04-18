import { GetterTree } from 'vuex';
import {
    ChatListItemType,
    ChatStateType,
    MessageType,
} from '@/store/store.types';

export const getters: GetterTree<ChatStateType, ChatStateType> = {
    currentMessages({ currentChat }): MessageType[] | null {
        return currentChat ? currentChat.messages : null;
    },
    chatList({ chats }): ChatListItemType[] {
        return chats;
    },
    route({ route }) {
        return route;
    },
};
