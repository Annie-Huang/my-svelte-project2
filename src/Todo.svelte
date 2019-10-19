<script>
    import { afterUpdate } from 'svelte';
    import flash from './flash.js';

    export let todo;
    export let toggle;

    let div;

    afterUpdate(() => {
        flash(div);
    });
</script>

<style>
    div {
        cursor: pointer;
        line-height: 1.5;
    }
</style>

<!-- the text will flash red whenever
     the `todo` object changes -->

<!--You can shorten this to <svelte:options immutable/> if you prefer.-->
<svelte:options immutable={true}/>

<div bind:this={div} on:click>
    {todo.done ? '👍': ''} {todo.text}
</div>
