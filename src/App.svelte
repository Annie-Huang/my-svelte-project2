<!--From Bindings/Component bindings to -->
<script>
    import Keypad from './Keypad.svelte';

    let pin;
    $: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

    function handleSubmit() {
        alert(`submitted ${pin}`);
    }
</script>

<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>

<!--Use component bindings sparingly. It can be difficult to track the flow of data around your application
    if you have too many of them, especially if there is no 'single source of truth'.-->
<Keypad bind:value={pin} on:submit={handleSubmit}/>
