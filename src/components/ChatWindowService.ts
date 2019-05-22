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
                avatarURL: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                value: 'Hello',
                authorName: 'Vasya',
            },
            {
                avatarURL: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                value: 'Привет',
                authorName: 'Petya',
            },
            {
                avatarURL: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                value: 'Привiт',
                authorName: 'Masha',
            },
        ];
        if (id === 1) {
            return of({
                chat: {
                    id: 1,
                    title: 'Barbeque',
                },
                messages: smallItems,
            });
        }
        return of({
            chat: {
                id,
                title: 'Long Chat',
            },
            messages: Array(100).fill(smallItems[0]),
        });
    },

    getChatList(): Observable<ChatListItemType[]> {
        return of([
            {
                chat: {
                    id: 1,
                    title: 'Barbeque',
                },
                lastMessage: {
                    avatarURL: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    value: 'Привiт',
                    authorName: 'Masha',
                },
            },
            {
                chat: {
                    id: 2,
                    title: 'Long Barbeque',
                },
                lastMessage: {
                    avatarURL: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    value: 'Привет',
                    authorName: 'Petya',
                },
            },
        ]);
    },
};
