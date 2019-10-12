<script>
	let name = 'world';
    let src = 'tutorial/image.gif';
</script>

<style>
    p {
        color: purple;
        font-family: 'Comic Sans MS';
        font-size: 2em;
    }
</style>

<h1>Hello {name.toUpperCase()}!</h1>
<img src={src} alt="A man dances.">
<img src={src} alt="{name} dances.">

<!--Shorthand attributes-->
<img {src} alt="A man dances.">

<p>This is a paragraph.</p>
