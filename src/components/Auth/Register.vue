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
                                <v-form>
                                    <v-text-field
                                        v-model="user.username"
                                        prepend-icon="person"
                                        name="login"
                                        label="Login"
                                        type="text"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="user.email"
                                        prepend-icon="person"
                                        name="email"
                                        label="Email"
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
import AuthService from '../../interceptors/AuthService';

@Component
export default class Register extends Vue {
    @Action private login!: (user: any) => void;
    user = { username: '', password: '', email: '' };

    register() {
        AuthService.register(this.user).then(() =>
            this.login({
                username: this.user.username,
                password: this.user.password,
            }),
        );
    }
}
</script>

<style scoped></style>
