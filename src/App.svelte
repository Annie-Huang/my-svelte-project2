<!--From tick to-->
<script>
    import { tick } from 'svelte';
    let text = `Select some text and hit the tab key to toggle uppercase`;

    async function handleKeydown(event) {
        if (event.which !== 9) return;

        event.preventDefault();

        const { selectionStart, selectionEnd, value } = this;
        const selection = value.slice(selectionStart, selectionEnd);

        const replacement = /[a-z]/.test(selection)
                ? selection.toUpperCase()
                : selection.toLowerCase();

        text = (
                value.slice(0, selectionStart) +
                replacement +
                value.slice(selectionEnd)
        );

        // The tick function is unlike other lifecycle functions in that you can call it any time,
        // not just when the component first initialises. It returns a promise that resolves as soon as any pending state
        // changes have been applied to the DOM (or immediately, if there are no pending state changes).

        // When you invalidate component state in Svelte, it doesn't update the DOM immediately.
        // Instead, it waits until the next microtask to see if there are any other changes that need to be applied,
        // including in other components. Doing so avoids unnecessary work and allows the browser to batch things more effectively.
        await tick();

        // this has no effect, because the DOM hasn't updated yet
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
    }
</script>

<style>
    textarea {
        width: 100%;
        height: 200px;
    }
</style>

<textarea value={text} on:keydown={handleKeydown}></textarea>
