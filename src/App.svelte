<!--From Stores/Writable stores to-->
<script>
    import { onDestroy } from 'svelte';
    import { count } from './stores.js';
    import Incrementer from './Incrementer.svelte';
    import Decrementer from './Decrementer.svelte';
    import Resetter from './Resetter.svelte';

    // let count_value;
    //
    // const unsubscribe = count.subscribe(value => {
    //     count_value = value;
    // });
    //
    // // The app in the previous example works, but there's a subtle bug — the unsubscribe function never gets called.
    // // If the component was instantiated and destroyed many times, this would result in a memory leak.
    // onDestroy(unsubscribe);

    // You're not limited to using $count inside the markup, either — you can use it anywhere in the <script> as well,
    // such as in event handlers or reactive declarations.
    // Any name beginning with $ is assumed to refer to a store value.
    // It's effectively a reserved character — Svelte will prevent you from declaring your own variables with a $ prefix.
</script>

<!--<h1>The count is {count_value}</h1>-->

<!--Auto-subscription only works with store variables that are declared (or imported) at the top-level scope of a component.-->
<h1>The count is {$count}</h1>

<Incrementer/>
<Decrementer/>
<Resetter/>
