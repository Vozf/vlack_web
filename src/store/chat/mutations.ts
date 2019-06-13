import { MutationTree } from 'vuex';
import { ChatStateType } from '@/store/chat/types';
import Vue from 'vue';

export const mutations: MutationTree<ChatStateType> = {
    setCurrentChat(state, currentChat) {
        state.currentChat = currentChat;
    },
    setChatList(state, chatList) {
        state.chats = chatList;
    },
    SOCKET_ONMESSAGE(state, message) {
        switch (message.msgType) {
            case 'NewMessageType': {
                const chatId = message.payload.chatId;
                const messageToAdd = {
                    value: message.payload.value,
                    authorName: 'Someone',
                    createdAt: new Date(),
                    avatarURL: undefined,
                };
                if (state.currentChat && state.currentChat.chat.id === chatId) {
                    state.currentChat.messages.push(messageToAdd);
                }
                const chatToUpdate = state.chats.find(
                    (obj) => obj.chat.id === chatId,
                );
                if (chatToUpdate) {
                    chatToUpdate.lastMessage = messageToAdd;
                }
                break;
            }
        }
    },
    SOCKET_ONOPEN(state, event) {
        Vue.prototype.$socket = event.currentTarget;
    },
};
