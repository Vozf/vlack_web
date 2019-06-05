import store from '../store/store';
import { AxiosRequestConfig } from 'axios';

const onError = (error: any) => {
    if (error.response.status === 401) {
        store.dispatch('logout');
        return Promise.reject(error);
    }
    return Promise.reject(error);
};

const beforeRequestSuccess = (config: AxiosRequestConfig) => {
    const accesstoken = store.getters.token;
    if (accesstoken) {
        config.headers.Authorization = `Bearer ${accesstoken}`;
    }
    return config;
};

export { onError, beforeRequestSuccess };
