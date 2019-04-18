import { Getter, GetterTree } from 'vuex';
import { ChatListItemType, ChatStateType } from '@/store/store.types';

export const getters: GetterTree<ChatStateType, ChatStateType> = {
    currentChat({
        currentChat: { chatId: currentChatId },
        chats,
    }): ChatListItemType | undefined {
        const chat = chats.find(({ chatId }) => chatId === currentChatId);
        return chat;
    },
    chatList({ chats }): ChatListItemType[] {
        return chats;
    },
};
