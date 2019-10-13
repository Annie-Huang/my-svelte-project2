<!--From Events/DOM event forwarding to -->
<script>
    import FancyButton from './FancyButton.svelte';

    function handleClick() {
        alert('clicked');
    }

    let name = 'world';
</script>

<FancyButton on:click={handleClick} />

<br />
<!--As a general rule, data flow in Svelte is top down — a parent component can set props on a child component,
    and a component can set attributes on an element, but not the other way around.
    we can use the bind:value directive:
    This means that not only will changes to the value of name update the input value, but changes to the input value will update name.-->
<input bind:value={name}>

<h1>Hello {name}!</h1>
