<template>
    <v-list class="chats">
        <ChatListItem
            v-for="(item, index) in chats"
            :item="item"
            :key="index"
        />
    </v-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChatListItem from '@/components/ChatWindow/ChatList/ChatListItem.vue';
import { ChatListItemType } from '@/store/store.types';

@Component({
    components: { ChatListItem },
})
export default class ChatList extends Vue {
    public shortChats: ChatListItemType[] = [
        {
            lastMessage: {
                message: 'last message',
                author: 'Vasya',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            },
            chatName: 'Barbeque',
        },
    ];

    public longChats = Array(100).fill(this.shortChats[0]);
    public chats: ChatListItemType[] = this.longChats;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chats {
    height: 100%;
    overflow-y: auto;
}
</style>
