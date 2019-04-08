<template>
    <form v-on:submit.prevent="submit">
        <v-text-field
            label="Solo"
            placeholder="Placeholder"
            solo
            v-model="message"
        ></v-text-field>
    </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { map } from 'rxjs/operators';

@Component<NewMessage>({
    subscriptions() {
        return {
            message: this.$watchAsObservable('message').pipe(
                map((mes) => {
                    console.log(mes);
                    return 1;
                }),
            ),
        };
    },
})
export default class NewMessage extends Vue {
    public message = '';

    public submit() {
        console.log(this.message);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
