import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Axios from 'axios-observable';
import VueRx from 'vue-rx';
import VueChatScroll from 'vue-chat-scroll';
import { sync } from 'vuex-router-sync';

Vue.config.productionTip = false;

Axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;

Vue.use(VueRx);
Vue.use(VueChatScroll);
sync(store, router);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
