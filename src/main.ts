import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Axios from 'axios';
import VueRx from 'vue-rx';

Vue.config.productionTip = false;

Axios.defaults.baseURL = process.env.baseURL;

Vue.use(VueRx);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
