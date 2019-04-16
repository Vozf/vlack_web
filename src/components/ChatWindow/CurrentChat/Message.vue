<template>
    <v-subheader v-if="item.header" :key="item.header">
        {{ item.header }}
    </v-subheader>

    <v-divider v-else-if="item.divider" :inset="item.inset"></v-divider>
    <v-list-tile v-else :key="item.title" avatar @click="">
        <v-list-tile-avatar>
            <img :src="item.avatar" />
        </v-list-tile-avatar>

        <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title
                v-html="item.subtitle"
            ></v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Message as MessageType } from '@/store/store.types';

@Component
export default class Message extends Vue {
    @Prop() public readonly item!: MessageType;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
