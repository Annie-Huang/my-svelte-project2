<!--From Introduction/Adding data to Introduction/Nested components-->

<script>
    import Nested from './Nested.svelte';

	let name = 'world';
    let src = 'tutorial/image.gif';
    let string = `this string contains some <strong>HTML!!!</strong>`;
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
<Nested/>

<p>{string}</p>
<p>{@html string}</p>
