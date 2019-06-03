import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { updatedCurrentChat } from '@/store/plugins/updateCurrentChat';
import createPersistedState from 'vuex-persistedstate';
import { auth } from '@/store/auth';
import { chat } from '@/store/chat';

Vue.use(Vuex);

const store: StoreOptions<{}> = {
    modules: {
        auth,
        chat,
    },
    plugins: [updatedCurrentChat, createPersistedState()],
};

export default new Vuex.Store<{}>(store);
