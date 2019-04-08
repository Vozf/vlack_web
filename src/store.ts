import Vue from 'vue';
import Vuex from 'vuex';
import ChatWindowService from '@/components/ChatWindowService';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messages: [{ value: 'hello' }],
    },
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages;
        },
    },
    actions: {
        updateMessages({ commit }) {
            commit('updateMessages', []);
        },
        async sendMessage({ dispatch, commit }, message) {
            ChatWindowService.sendMessage(message).subscribe(() =>
                dispatch('updateMessages'),
            );
        },
    },
});
