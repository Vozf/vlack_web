import Vue from 'vue';
import Router from 'vue-router';
import Chat from '../views/Chat.vue';
import Login from '@/components/Auth/Login.vue';
import Register from '@/components/Auth/Register.vue';
import IsLoggedIn from '@/router/guards/IsLoggedIn';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/chats',
        },
        {
            path: '/chats/:id?',
            name: 'chat',
            component: Chat,
            beforeEnter: IsLoggedIn,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ '../views/About.vue'),
        },
    ],
});
