<!--From Events/DOM event forwarding to Bindings/Checkbox inputs-->
<script>
    import FancyButton from './FancyButton.svelte';

    function handleClick() {
        alert('clicked');
    }

    let name = 'world';

    let a = 1;
    let b = 2;

    let yes = false;

    function handleClick1() {
        alert('clicked1');
    }
</script>

<FancyButton on:click={handleClick} />

<br />
<!--As a general rule, data flow in Svelte is top down — a parent component can set props on a child component,
    and a component can set attributes on an element, but not the other way around.
    we can use the bind:value directive:
    This means that not only will changes to the value of name update the input value, but changes to the input value will update name.-->
<input bind:value={name}>

<h1>Hello {name}!</h1>

<br />

<!--In the DOM, everything is a string. That's unhelpful when you're dealing with
    numeric inputs — type="number" and type="range" — as it means you have to remember to coerce input.value before using it.
    With bind:value, Svelte takes care of it for you:-->
<label>
    <input type=number bind:value={a} min=0 max=10>
    <input type=range bind:value={a} min=0 max=10>
</label>

<label>
    <input type=number bind:value={b} min=0 max=10>
    <input type=range bind:value={b} min=0 max=10>
</label>

<p>{a} + {b} = {a + b}</p>

<br/>
<label>
    <input type=checkbox bind:checked={yes}>
    Yes! Send me regular email spam
</label>

{#if yes}
    <p>Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
    <p>You must opt in to continue. If you're not paying, you're the product.</p>
{/if}

<!--Add the on:click function as it's hard to see the button is disabled in chrome browsers with its current style.-->
<button disabled={!yes} on:click={handleClick1}>
    Subscribe
</button>
