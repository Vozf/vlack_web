import Axios from 'axios-observable';
import { EMPTY, Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { ChatListItemType, ChatType } from '@/store/store.types';
import { mergeMapTo } from 'rxjs/operators';

export default {
    sendMessage(message: string): Observable<never> {
        return Axios.post('chats/1', { value: message, userId: 2 }).pipe(
            mergeMapTo(EMPTY),
        );
    },
    getChat(id: number): Observable<ChatType> {
        const smallItems = [
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
        if (id === 1) {
            return of({
                chatId: 1,
                chatName: 'Barbeque',
                messages: smallItems,
            });
        }
        return of({
            chatId: id,
            chatName: 'Long Chat',
            messages: Array(100).fill(smallItems[0]),
        });
    },

    getChatList(): Observable<ChatListItemType[]> {
        return of([
            {
                chatId: 1,
                chatName: 'Barbeque',
                lastMessage: {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    message: 'Привiт',
                    author: 'Masha',
                },
            },
            {
                chatId: 2,
                chatName: 'Long Barbeque',
                lastMessage: {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    message: 'Привет',
                    author: 'Petya',
                },
            },
        ]);
    },
};
