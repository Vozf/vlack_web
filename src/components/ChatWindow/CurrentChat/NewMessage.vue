<template>
    <form v-stream:submit.prevent="submit$">
        <v-text-field
            label="Solo"
            placeholder="Placeholder"
            solo
            v-stream:input="input$"
            ref="input"
        ></v-text-field>
        <p>{{ message$ }}</p>
    </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { withLatestFrom } from 'rxjs/internal/operators/withLatestFrom';
import { Action } from 'vuex-class';

interface TextInputEvent {
    event: {
        msg: string;
    };
}
@Component<NewMessage>({
    subscriptions() {
        const message$ = this.input$.pipe(map(({ event: { msg } }) => msg));

        this.submit$
            .pipe(
                withLatestFrom(message$),
                map(([, message]) => message),
            )
            .subscribe((msg) => {
                (this.$refs.input as any).reset();
                this.sendMessage();
            });

        return {
            message$,
        };
    },
})
export default class NewMessage extends Vue {
    private input$: Subject<TextInputEvent> = new Subject();
    private submit$: Subject<any> = new Subject();
    @Action('sendMessage') private sendMessage!: () => void;
}
</script>

<style scoped lang="scss"></style>
