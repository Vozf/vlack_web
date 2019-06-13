import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import Axios from 'axios-observable';
import VueRx from 'vue-rx';
import VueChatScroll from 'vue-chat-scroll';
import { sync } from 'vuex-router-sync';
import { onError, beforeRequestSuccess } from './interceptors/Jwt';
import VueNativeSock from 'vue-native-websocket';

Vue.config.productionTip = false;

Axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;

Axios.interceptors.request.use(beforeRequestSuccess, undefined);
Axios.interceptors.response.use(undefined, onError);

Vue.use(VueRx);
Vue.use(VueChatScroll);
sync(store, router);

Vue.use(VueNativeSock, process.env.VUE_APP_BASE_WS_URL, {
    store,
    format: 'json',
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
