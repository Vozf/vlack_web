<template>
    <avatarCmp :size="40" :username="name" :src="src"></avatarCmp>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AvatarCmp from 'vue-avatar';

@Component({ components: { AvatarCmp } })
export default class Avatar extends Vue {
    @Prop() public readonly src!: string;
    @Prop() public readonly name!: string;
}
</script>

<style scoped lang="scss"></style>
