import Axios from 'axios-observable';
import { Observable } from 'rxjs';
import { ChatListItemType, ChatType } from '@/store/store.types';
import { mapTo, pluck } from 'rxjs/operators';

export default {
    sendMessage(chatId: number, message: string): Observable<null> {
        return Axios.post(`chats/${chatId}`, {
            value: message,
            userId: 2,
        }).pipe(mapTo(null));
    },
    getChat(id: number): Observable<ChatType> {
        return Axios.get(`chats/${id}`).pipe(pluck('data'));
    },

    getChatList(): Observable<ChatListItemType[]> {
        return Axios.get(`chats`).pipe(pluck('data'));
    },
};
