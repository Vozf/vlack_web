import Axios from 'axios-observable';
import { Observable, of } from 'rxjs';
import { ChatListItemType, ChatType } from '@/store/chat/types';
import { pluck } from 'rxjs/operators';
import Vue from 'vue';

export default {
    sendMessage(chatId: number, message: string): Observable<null> {
        const payload = {
            value: message,
            chatId,
        };
        Vue.prototype.$socket.sendObj({
            payload,
            msgType: 'NewMessageType',
        });
        return of(null);
    },
    getChat(id: number): Observable<ChatType> {
        return Axios.get(`chats/${id}`).pipe(pluck('data'));
    },

    getChatList(): Observable<ChatListItemType[]> {
        return Axios.get(`chats`).pipe(pluck('data'));
    },
};
