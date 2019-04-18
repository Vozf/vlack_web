import { GetterTree } from 'vuex';
import {
    ChatListItemType,
    ChatStateType,
    MessageType,
} from '@/store/store.types';

export const getters: GetterTree<ChatStateType, ChatStateType> = {
    currentMessages({
        route,
        chats,
        currentChat: { messages },
    }): MessageType[] {
        const id = route.params.id;
        const chat = chats.find(({ chatId }) => chatId === id);
        return messages;
    },
    chatList({ chats }): ChatListItemType[] {
        return chats;
    },
    route({ route }) {
        return route;
    },
};
