<!--From Events/Event modifiers to -->
<script>

    function handleClick() {
        alert('no more alerts')
    }

    import Inner from './Inner.svelte';

    function handleMessage(event) {
        alert(event.detail.text);
    }

    import Outer from './Outer.svelte';
</script>

<button on:click|once={handleClick}>
    Click me
</button>

<br/>
Inner:
<Inner on:message={handleMessage}/>

<br/>
Outer
<Outer on:message={handleMessage}/>
