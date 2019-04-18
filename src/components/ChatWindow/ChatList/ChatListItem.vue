<template>
    <v-list-tile avatar @click="">
        <v-list-tile-avatar>
            <img :src="item.lastMessage.avatar" />
        </v-list-tile-avatar>

        <v-list-tile-content>
            <v-list-tile-title v-html="item.chatName"></v-list-tile-title>
            <v-list-tile-sub-title
                v-html="item.lastMessage.message"
            ></v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
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
<style scoped lang="scss"></style>
