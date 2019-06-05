<template>
    <v-app class="app">
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <router-link class="link" to="/">
                    <span>Vlack</span>
                </router-link>
            </v-toolbar-title>
        </v-toolbar>
        <v-content class="content">
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
};
</script>
<style>
html,
body,
.app,
.content {
    height: 100%;
}
.link {
    color: inherit;
    text-decoration: none;
}
</style>
