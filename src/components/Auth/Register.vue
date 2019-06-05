<template>
    <div id="app">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Register</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form @keyup.enter.native="register">
                                    <v-text-field
                                        v-model="user.login"
                                        prepend-icon="person"
                                        name="login"
                                        label="Login"
                                        type="text"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="user.password"
                                        prepend-icon="lock"
                                        name="password"
                                        label="Password"
                                        id="password"
                                        type="password"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="user.name"
                                        prepend-icon="person"
                                        name="name"
                                        label="Name"
                                        type="text"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="user.avatarURL"
                                        prepend-icon="face"
                                        name="avatarURL"
                                        label="Avatar URL"
                                        type="text"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn @click="register" color="primary"
                                    >Register</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import AuthService from './AuthService';
import { LoginCredentials } from '@/store/auth/types';

@Component
export default class Register extends Vue {
    public user = { login: '', password: '', avatarURL: '', name: '' };
    @Action private login!: (user: LoginCredentials) => void;

    public register() {
        AuthService.register(this.user).subscribe(() =>
            this.login({
                login: this.user.login,
                password: this.user.password,
            }),
        );
    }
}
</script>

<style scoped></style>
