<!--From Introduction/HTML tags to -->
<script>
    import Nested from './Nested.svelte';

    let string = `this string contains some <strong>HTML!!!</strong>`;

    let count = 0;

    function handleClick() {
        // event handler code goes here
        count += 1;
    }

    // Reactive values become particularly valuable when you need to reference them multiple times,
    // or you have values that depend on other reactive values.
    $: doubled = count * 2;

    $: {
        console.log(`the count is ${count}`);
        alert(`I SAID THE COUNT IS ${count}`);
    }
    $: if (count >= 10) {
        alert(`count is dangerously high!`);
        count = 9;
    }

    let numbers = [1, 2, 3, 4];

    // function addNumber() {
    //     numbers.push(numbers.length + 1);
    //     // Because Svelte's reactivity is triggered by assignments, using array methods like push and splice
    //     // won't automatically cause updates. For example, clicking the button doesn't do anything.
    //     // One way to fix that is to add an assignment that would otherwise be redundant:
    //     numbers = numbers;
    // }

    // // Or: use the following.
    // // You can use similar patterns to replace pop, shift, unshift and splice.
    // function addNumber() {
    //     numbers = [...numbers, numbers.length + 1];
    // }

    // Or: this..
    // Assignments to properties of arrays and objects — e.g. obj.foo += 1 or array[i] = x — work the same way
    // as assignments to the values themselves
    function addNumber() {
        numbers[numbers.length] = numbers.length + 1;
    }

    $: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<!--Svelte doesn't perform any sanitization of the expression inside {@html ...} before it gets inserted into the DOM.
    In other words, if you use this feature it's critical that you manually escape HTML that comes from sources
    you don't trust, otherwise you risk exposing your users to XSS attacks.-->
<p>{string}</p>
<p>{@html string}</p>

<button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
    Add a number
</button>

<Nested answer={42}/>
<Nested/>
