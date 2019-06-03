export interface AuthStateType {
    loggedin: boolean;
    user: boolean;
    tokens: {
        access: string | null;
        refresh: string | null;
    };
}
