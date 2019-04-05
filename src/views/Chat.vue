<template>
    <ChatWindow/>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ChatWindow from '@/components/ChatWindow/index.vue'; // @ is an alias to /src

    @Component({
        components: {
            ChatWindow,
        },
    })
    export default class Home extends Vue {
    }

</script>
