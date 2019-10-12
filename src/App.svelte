<!--From Introduction/HTML tags to -->
<script>
    let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<!--Svelte doesn't perform any sanitization of the expression inside {@html ...} before it gets inserted into the DOM.
    In other words, if you use this feature it's critical that you manually escape HTML that comes from sources
    you don't trust, otherwise you risk exposing your users to XSS attacks.-->
<p>{string}</p>
<p>{@html string}</p>
