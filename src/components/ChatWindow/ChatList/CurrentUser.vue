<template>
    <v-list-tile avatar @click="">
        <v-list-tile-avatar>
            <img :src="user.avatarURL" />
        </v-list-tile-avatar>

        <v-list-tile-content>
            <v-list-tile-title v-html="user.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="user.login"></v-list-tile-sub-title>
        </v-list-tile-content>
        <v-btn flat icon color="blue" @click="logout">
            <v-icon>exit_to_app</v-icon>
        </v-btn>
    </v-list-tile>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '@/store/auth/types';
import { Action, Getter } from 'vuex-class';

@Component
export default class CurrentUser extends Vue {
    @Getter public user!: () => User;
    @Action private logout!: () => void;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
