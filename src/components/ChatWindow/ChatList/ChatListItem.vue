<template>
    <router-link class="link" :to="item.chat.id.toString()">
        <v-list-tile avatar @click="">
            <v-list-tile-avatar>
                <img :src="item.lastMessage.avatarURL" />
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
import { ChatListItemType } from '@/store/store.types';

@Component
export default class ChatListItem extends Vue {
    @Prop() public readonly item!: ChatListItemType;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.link {
    color: inherit;
}
</style>
