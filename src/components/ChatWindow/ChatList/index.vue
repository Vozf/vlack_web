<template>
    <v-list class="chats" three-line>
        <v-subheader inset>Account</v-subheader>

        <CurrentUser />
        <v-divider inset></v-divider>

        <v-subheader inset>
            Chats
            <v-spacer />
            <v-btn flat icon @click="reload">
                <v-icon>autorenew</v-icon>
            </v-btn>
        </v-subheader>
        <ChatListItem
            v-for="(item, index) in chatList"
            :item="item"
            :key="index"
            :current="
                (item.chat && item.chat.id) ===
                    (currentChatInfo && currentChatInfo.id)
            "
        />
    </v-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChatListItem from '@/components/ChatWindow/ChatList/ChatListItem.vue';
import { ChatInfo, ChatListItemType } from '@/store/chat/types';
import { Action, Getter } from 'vuex-class';
import CurrentUser from '@/components/ChatWindow/ChatList/CurrentUser.vue';

@Component<ChatList>({
    components: { ChatListItem, CurrentUser },
})
export default class ChatList extends Vue {
    @Getter public chatList!: () => ChatListItemType[];
    @Getter public currentChatInfo!: () => ChatInfo;
    @Action private fetchChatList!: () => void;
    @Action private fetchCurrentChat!: () => void;

    constructor(props: any) {
        super(props);
        this.fetchChatList();
    }

    public reload() {
        this.fetchChatList();

        this.fetchCurrentChat();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chats {
    height: 100%;
    overflow-y: auto;
}

.reload {
    margin-right: 50px;
}
</style>
