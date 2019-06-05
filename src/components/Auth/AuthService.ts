import Axios from 'axios-observable';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { LoginCredentials, RegisterCredentials } from '@/store/auth/types';

export default {
    register(registerCreds: RegisterCredentials): Observable<null> {
        return Axios.post(`/register`, registerCreds).pipe(mapTo(null));
    },

    login(loginCreds: LoginCredentials): Observable<string> {
        return Axios.post(`/login`, loginCreds).pipe(map((res) => res.data));
    },
};
