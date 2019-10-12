<!--From Introduction/HTML tags to -->
<script>
    let string = `this string contains some <strong>HTML!!!</strong>`;

    let count = 0;

    function handleClick() {
        // event handler code goes here
        count += 1;
    }
</script>

<!--Svelte doesn't perform any sanitization of the expression inside {@html ...} before it gets inserted into the DOM.
    In other words, if you use this feature it's critical that you manually escape HTML that comes from sources
    you don't trust, otherwise you risk exposing your users to XSS attacks.-->
<p>{string}</p>
<p>{@html string}</p>

<button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
