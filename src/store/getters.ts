import { GetterTree } from 'vuex';
import {
    ChatInfo,
    ChatListItemType,
    ChatStateType,
    MessageType,
} from '@/store/store.types';

export const getters: GetterTree<ChatStateType, ChatStateType> = {
    currentMessages({ currentChat }): MessageType[] | undefined {
        return currentChat && currentChat.messages;
    },
    currentChatInfo({ currentChat }): ChatInfo | undefined {
        return currentChat && currentChat.chat;
    },
    chatList({ chats }): ChatListItemType[] {
        return chats;
    },
    route({ route }) {
        return route;
    },
};
