<template>
    <router-link class="link" :to="'/chats/' + item.chat.id.toString()">
        <v-list-tile avatar @click="" :class="{ current: current }">
            <v-list-tile-avatar class="avatar">
                <avatar
                    :name="item.lastMessage.authorName"
                    :src="item.lastMessage.avatarURL"
                ></avatar>
            </v-list-tile-avatar>

            <v-list-tile-content>
                <v-list-tile-title v-html="item.chat.title"></v-list-tile-title>
                <v-list-tile-sub-title
                    v-html="item.lastMessage.value"
                ></v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
    </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ChatListItemType } from '@/store/chat/types';
import Avatar from '@/components/Util/Avatar.vue';

@Component({
    components: {
        Avatar,
    },
})
export default class ChatListItem extends Vue {
    @Prop() public readonly item!: ChatListItemType;
    @Prop() public readonly current!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.current {
    background-color: #e0e0e0;
}
.link {
    color: inherit;
}
.avatar {
    margin-top: 0;
}
</style>
