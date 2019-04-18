import { ChatStateType } from '@/store/store.types';
const messages = [
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        message: 'Hello',
        author: 'Vasya',
    },
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        message: 'Привет',
        author: 'Petya',
    },
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        message: 'Привiт',
        author: 'Masha',
    },
];
const longMessages = Array(100).fill(messages[0]);

export const state: ChatStateType = {
    currentChat: { chatId: 1, chatName: 'Barbeque', messages },
    chats: [
        {
            chatId: 1,
            chatName: 'Barbeque',
            lastMessage: messages[0],
        },

        {
            chatId: 2,
            chatName: 'Long Barbeque',
            lastMessage: messages[0],
        },
    ],
    route: {},
};
