<!--From Stores/Custom stores to Stores/Stores bindings-->
<script>
    import { count } from './stores.js';
    import { name, greeting } from './stores.js';
</script>

<h1>The count is {$count}</h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>


<h1>{$greeting}</h1>
<!--If a store is writable — i.e. it has a set method — you can bind to its value, just as you can bind to
local component state.-->
<input bind:value={$name}>


<!--We can also assign directly to store values inside a component. Add a <button> element:-->
<!--The $name += '!' assignment is equivalent to name.set($name + '!').-->
<button on:click="{() => $name += '!'}">
    Add exclamation mark!
</button>
