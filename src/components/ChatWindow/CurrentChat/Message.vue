<template>
    <v-list-tile avatar @click="">
        <v-list-tile-avatar>
            <avatar :name="item.authorName" :src="item.avatarURL"></avatar>
        </v-list-tile-avatar>

        <v-list-tile-content>
            <v-list-tile-sub-title
                v-html="item.authorName"
            ></v-list-tile-sub-title>
            <v-list-tile-title v-html="item.value"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
            <v-list-tile-action-text>{{
                item.createdAt
            }}</v-list-tile-action-text>
        </v-list-tile-action>
    </v-list-tile>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MessageType } from '@/store/chat/types';
import Avatar from '@/components/Util/Avatar.vue';

@Component({
    components: {
        Avatar,
    },
})
export default class Message extends Vue {
    @Prop() public readonly item!: MessageType;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
