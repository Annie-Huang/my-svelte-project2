<!--From Classes/The class directive to-->
<script>
    import Box from './Box.svelte';

    let current = 'foo';
    let big = false;
</script>

<style>
    button {
        display: block;
    }

    .active {
        background-color: #ff3e00;
        color: white;
    }

    .big {
        font-size: 4em;
    }
</style>

<button
        class="{current === 'foo' ? 'active' : ''}"
        on:click="{() => current = 'foo'}"
>foo</button>

<button
        class:active="{current === 'foo'}"
        on:click="{() => current = 'foo'}"
>foo</button>

<button
        class="{current === 'bar' ? 'active' : ''}"
        on:click="{() => current = 'bar'}"
>bar</button>

<button
        class="{current === 'baz' ? 'active' : ''}"
        on:click="{() => current = 'baz'}"
>baz</button>



<label>
    <input type=checkbox bind:checked={big}>
    big
</label>

<div class:big={big}>
    some {big ? 'big' : 'small'} text
</div>

<div class:big>
    some {big ? 'big' : 'small'} text
</div>

<!-- Just remember, tThere is a different bewtween:
     class="big"    << will apply the style
     and
     class:big      << conditionally apply the style
-->




<Box>
    <h2>Hello!</h2>
    <p>This is a box. It can contain anything.</p>
</Box>
