import store from '../../store/store';
import { NavigationGuard } from 'vue-router';

const isLoggedIn: NavigationGuard = (to, from, next) => {
    if (!store.getters.loggedin) {
        store.dispatch('logout');
        return next('/login');
    }

    return next();
};
export default isLoggedIn;
