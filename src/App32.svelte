<!--From Component composition/Slot props to Component composition/Slot props-->
<script>
    import Hoverable from './Hoverable.svelte';
</script>

<style>
    div {
        padding: 1em;
        margin: 0 0 1em 0;
        background-color: #eee;
    }

    .active {
        background-color: #ff3e00;
        color: white;
    }
</style>

<!--Then, to expose hovering to the contents of the <Hoverable> component, we use the let directive:-->
<!--<Hoverable let:hovering={hovering}>-->
<!--    <div class:active={hovering}>-->
<!--        {#if hovering}-->
<!--            <p>I am being hovered upon.</p>-->
<!--        {:else}-->
<!--            <p>Hover over me!</p>-->
<!--        {/if}-->
<!--    </div>-->
<!--</Hoverable>-->

<!--renaming hovering to active-->
<!--You can have as many of these components as you like, and the slotted props will remain local to the component
    where they're declared.-->
<Hoverable let:hovering={active}>
    <div class:active>
        {#if active}
            <p>I am being hovered upon.</p>
        {:else}
            <p>Hover over me!</p>
        {/if}
    </div>
</Hoverable>
