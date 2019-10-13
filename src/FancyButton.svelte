<style>
    button {
        font-family: 'Comic Sans MS';
        font-size: 2em;
        padding: 0.5em 1em;
        color: royalblue;
        background: gold;
        border-radius: 1em;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }
</style>

<!--Event forwarding works for DOM events too.
    We want to get notified of clicks on our <FancyButton> — to do that, we just need to forward click events on
    the <button> element in FancyButton.svelte:-->
<button on:click>
    Click me
</button>
