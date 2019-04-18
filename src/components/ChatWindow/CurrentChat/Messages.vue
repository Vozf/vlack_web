<template>
    <v-layout justify-end fill-height column>
        <v-flex shrink class="mes" v-chat-scroll>
            <v-list>
                <Message
                    v-for="(item, index) in currentMessages"
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
import { MessageType } from '@/store/store.types';
import { Getter } from 'vuex-class';

@Component({
    components: { Message },
})
export default class Messages extends Vue {
    @Getter public currentMessages!: () => MessageType[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mes {
    overflow-y: auto;
}
</style>
