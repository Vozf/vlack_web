import Axios from 'axios';
import { EMPTY, Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { ChatType } from '@/store/store.types';

export default {
    sendMessage(message: string): Observable<never> {
        return EMPTY;
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
};
