<!--From Transitions/The transition directive to-->
<script>
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
    let visible = true;
</script>

<label>
    <input type="checkbox" bind:checked={visible}>
    visible
</label>

{#if visible}
    <p transition:fade>
        Fades in and out1
    </p>

    <p transition:fly="{{ y: 200, duration: 2000 }}">
        Flies in and out2
    </p>
{/if}

<br/>


