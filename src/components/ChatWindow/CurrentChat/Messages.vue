<template>
    <v-layout justify-end fill-height column>
        <v-flex shrink class="mes" v-chat-scroll>
            <v-list>
                <Message
                    v-for="(item, index) in items"
                    :item="item"
                    :key="index"
                />
            </v-list>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Message from '@/components/ChatWindow/CurrentChat/Message.vue';
import { Message as MessageType } from '@/store/store.types';

@Component({
    components: { Message },
})
export default class Messages extends Vue {
    public smallItems = [
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            message: 'Hello',
            author: 'Vasya',
        },
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            message: 'Привет',
            author: 'Petya',
        },
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            message: 'Привiт',
            author: 'Masha',
        },
    ];
    public longItems = Array(100).fill(this.smallItems[0]);
    public items: MessageType[] = this.smallItems;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mes {
    overflow-y: auto;
}
</style>
