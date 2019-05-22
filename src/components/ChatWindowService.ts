import Axios from 'axios-observable';
import { EMPTY, Observable } from 'rxjs';
import { ChatListItemType, ChatType } from '@/store/store.types';
import { mergeMapTo, pluck } from 'rxjs/operators';

export default {
    sendMessage(message: string): Observable<never> {
        return Axios.post('chats/1', { value: message, userId: 2 }).pipe(
            mergeMapTo(EMPTY),
        );
    },
    getChat(id: number): Observable<ChatType> {
        return Axios.get(`chats/${id}`).pipe(pluck('data'));
    },

    getChatList(): Observable<ChatListItemType[]> {
        return Axios.get(`chats`).pipe(pluck('data'));
    },
};
