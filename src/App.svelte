<!--From Bindings/Select bindins to -->
<script>
    let questions = [
        { id: 1, text: `Where did you go to school?` },
        { id: 2, text: `What is your mother's name?` },
        { id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
    ];

    let selected;

    let answer = '';

    function handleSubmit() {
        alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
    }
</script>

<style>
    input { display: block; width: 500px; max-width: 100%; }
</style>

<h2>Insecurity questions</h2>

<form on:submit|preventDefault={handleSubmit}>
    <!-- Note that the <option> values are objects rather than strings. Svelte doesn't mind.
         Because we haven't set an initial value of selected, the binding will set it to the default value
         (the first in the list) automatically. Be careful though — until the binding is initialised,
         selected remains undefined, so we can't blindly reference e.g. selected.id in the template.-->
    <select bind:value={selected} on:change="{() => answer = ''}">
        {#each questions as question}
            <option value={question}>
                {question.text}
            </option>
        {/each}
    </select>

    <input bind:value={answer}>

    <button disabled={!answer} type=submit>
        Submit
    </button>
</form>

<p>selected question {selected ? selected.id : '[waiting...]'}</p>
