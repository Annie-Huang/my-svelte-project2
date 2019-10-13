<!--From Lifecycle/onDestroy to Lifecycle/onDestroy-->
<script>
    // import { onDestroy } from 'svelte';
    //
    // let seconds = 0;
    // const interval = setInterval(() => seconds += 1, 1000);
    //
    // // For example, we can add a setInterval function when our component initialises, and clean it up when it's
    // // no longer relevant. Doing so prevents memory leaks.
    // onDestroy(() => clearInterval(interval));

    import { onInterval } from './utils.js';

    let seconds = 0;
    onInterval(() => seconds += 1, 1000);
</script>

<p>
    The page has been open for
    {seconds} {seconds === 1 ? 'second' : 'seconds'}
</p>
