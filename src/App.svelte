<!--From Events/Event modifiers to -->
<script>
    function handleClick() {
        alert('no more alerts')
    }

    import Inner from './Inner.svelte';

    function handleMessage(event) {
        alert(event.detail.text);
    }
</script>

<button on:click|once={handleClick}>
    Click me
</button>

<br/>
<Inner on:message={handleMessage}/>
