<!--From Motion/Tweened to Motion/Tweened-->
<script>
    // import { writable } from 'svelte/store';
    //
    // const progress = writable(0);

    import { tweened } from 'svelte/motion';

    // const progress = tweened(0);

    // The svelte/easing module contains the , or you can supply your own p => t function where p and t are both values between 0 and 1.
    import { cubicOut } from 'svelte/easing';

    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut
    });
</script>

<style>
    progress {
        display: block;
        width: 100%;
    }
</style>

<progress value={$progress}></progress>

<button on:click="{() => progress.set(0)}">
    0%
</button>

<button on:click="{() => progress.set(0.25)}">
    25%
</button>

<button on:click="{() => progress.set(0.5)}">
    50%
</button>

<button on:click="{() => progress.set(0.75)}">
    75%
</button>

<button on:click="{() => progress.set(1)}">
    100%
</button>
