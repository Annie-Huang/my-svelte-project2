<script>
    export let src;
    export let title;
    export let composer;
    export let performer;

    let audio;
    let paused = true;

    function stopOthers() {
        if (current && current !== audio) current.pause();
        current = audio;
    }
</script>

<style>
    article { margin: 0 0 1em 0; max-width: 800px }
    h2, p { margin: 0 0 0.3em 0; }
    audio { width: 100%; margin: 0.5em 0 1em 0; }
    .playing { color: #ff3e00; }
</style>

<!-- Very occasionally, you'll need to run some code outside of an individual component instance.
     For example, you can play all five of these audio players simultaneously; it would be better if playing one stopped all the others.

     We can do that by declaring a <script context="module"> block. Code contained inside it will run once,
     when the module first evaluates, rather than when a component is instantiated. -->
<script context="module">
    let current;
</script>

<article class:playing={!paused}>
    <h2>{title}</h2>
    <p><strong>{composer}</strong> / performed by {performer}</p>

    <audio
            bind:this={audio}
            bind:paused
            on:play={stopOthers}
            controls
            {src}
    ></audio>
</article>
