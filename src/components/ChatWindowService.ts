import Axios from 'axios';
import { EMPTY, Observable } from 'rxjs';

export default {
    sendMessage(message: string): Observable<never> {
        return EMPTY;
    },
};
