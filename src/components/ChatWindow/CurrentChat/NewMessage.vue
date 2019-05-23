<template>
    <form v-stream:submit.prevent="submit$">
        <v-text-field
            label="Solo"
            placeholder="New Message"
            solo
            v-stream:input="input$"
            ref="input"
        ></v-text-field>
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
                this.sendMessage(msg);
            });

        return {
            message$,
        };
    },
})
export default class NewMessage extends Vue {
    private input$: Subject<TextInputEvent> = new Subject();
    private submit$: Subject<any> = new Subject();
    @Action('sendMessage') private sendMessage!: (message: string) => void;
}
</script>

<style scoped lang="scss"></style>
