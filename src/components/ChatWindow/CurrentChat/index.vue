<template>
    <v-container fill-height pb-0>
        <v-layout column>
            <v-flex>
                <Messages />
            </v-flex>
            <v-flex shrink>
                <NewMessage />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Messages from '@/components/ChatWindow/CurrentChat/Messages.vue';
import NewMessage from '@/components/ChatWindow/CurrentChat/NewMessage.vue';

@Component({
    components: { Messages, NewMessage },
})
export default class CurrentChat extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
