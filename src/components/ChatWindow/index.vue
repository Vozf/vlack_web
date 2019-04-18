<template>
    <v-container pa-0 class="chat" fill-height>
        <v-layout text-xs-center>
            <v-flex class="chat-list" xs2>
                <ChatList />
            </v-flex>
            <v-flex class="current-chat" xs10>
                <CurrentChat />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CurrentChat from '@/components/ChatWindow/CurrentChat/index.vue';
import ChatList from '@/components/ChatWindow/ChatList/index.vue';

@Component({ components: { ChatList, CurrentChat } })
export default class ChatWindow extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.current-chat {
    border: solid gray 1px;
}
</style>
