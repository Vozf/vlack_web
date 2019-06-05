export interface AuthStateType {
    user: {
        avatarURL: string | null;
        id: number;
        login: string;
        name: string;
    } | null;
    token: string | null;
}

export interface LoginCredentials {
    login: string;
    password: string;
}

export interface RegisterCredentials extends LoginCredentials {
    avatarURL: string | null;
    name: string;
}

export interface User {
    avatarURL: string | null;
    id: number;
    login: string;
    name: string;
}
