import { ChatStateType } from '@/store/chat/types';
import { Store } from 'vuex';

export const updatedCurrentChat = (store: Store<ChatStateType>) => {
    store.subscribe((mutation, state) => {
        if (
            mutation.type === 'route/ROUTE_CHANGED' &&
            mutation.payload.to.name === 'chat' &&
            mutation.payload.to.params.id
        ) {
            store.dispatch('changeCurrentChat', +mutation.payload.to.params.id);
        }
    });
};
