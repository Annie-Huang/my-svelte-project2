<script>
    import Inner from './Inner.svelte';
    // Unlike DOM events, component events don't bubble. If you want to listen to an event on some deeply nested component,
    // the intermediate components must forward the event.
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function forward(event) {
        dispatch('message', event.detail);
    }
</script>

<!--<Inner on:message={forward}/>-->

<!--But that's a lot of code to write, so Svelte gives us an equivalent shorthand —
    an on:message event directive without a value means 'forward all message events'.-->
<Inner on:message/>
