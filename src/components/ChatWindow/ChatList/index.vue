<template>
    <v-list class="chats">
        <ChatListItem
            v-for="(item, index) in chatList"
            :item="item"
            :key="index"
        />
    </v-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChatListItem from '@/components/ChatWindow/ChatList/ChatListItem.vue';
import { ChatListItemType } from '@/store/store.types';
import { Action, Getter } from 'vuex-class';

@Component<ChatList>({
    components: { ChatListItem },
})
export default class ChatList extends Vue {
    @Getter public chatList!: () => ChatListItemType[];
    @Action private fetchChatList!: () => void;

    constructor(props: any) {
        super(props);
        this.fetchChatList();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chats {
    height: 100%;
    overflow-y: auto;
}
</style>
