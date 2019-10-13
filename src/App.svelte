<!--From Props/Spread props to -->
<script>
    let promise = getRandomNumber();

    async function getRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const res = await fetch(`https://swapi.co/api/people/${randomNumber}/`);
        // const res = await fetch(`tutorial/random-number`);
        const text = await res.text();

        if (res.ok) {
            return text;
        } else {
            throw new Error(text);
        }
    }

    function handleClick() {
        promise = getRandomNumber();
    }

    let m = { x: 0, y: 0 };

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }
</script>

<style>
    div { width: 100%; height: 100%; }
</style>

<button on:click={handleClick}>
    generate random number
</button>

<!--Only the most recent promise is considered, meaning you don't need to worry about race conditions.-->
{#await promise}
    <p>...waiting</p>
{:then number}
    <p>The number is {number}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<br>

<!--If you know that your promise can't reject, you can omit the catch block.
     You can also omit the first block if you don't want to show anything until the promise resolves:-->
{#await promise then value}
    <p>the value is {value}</p>
{/await}

<div on:mousemove={handleMousemove}>
    The mouse position is {m.x} x {m.y}
</div>
