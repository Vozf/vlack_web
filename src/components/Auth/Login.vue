<template>
    <div id="app">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Login</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-icon v-on="on">info</v-icon>
                                    </template>
                                    <div>Login - login</div>
                                    <div>Password - password</div>
                                </v-tooltip>
                            </v-toolbar>
                            <v-form @keyup.enter.native="loginUser">
                                <v-card-text>
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
                                </v-card-text>
                                <v-card-actions>
                                    <router-link class="link" to="/register">
                                        <v-btn flat>Register</v-btn>
                                    </router-link>
                                    <v-spacer></v-spacer>
                                    <v-btn @click="loginUser" color="primary"
                                        >Login
                                    </v-btn>
                                </v-card-actions>
                            </v-form>
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
import { LoginCredentials } from '@/store/auth/types';

@Component
export default class Login extends Vue {
    public user: LoginCredentials = { login: '', password: '' };
    @Action private login!: (user: LoginCredentials) => void;

    public loginUser() {
        this.login(this.user);
    }
}
</script>

<style scoped></style>
