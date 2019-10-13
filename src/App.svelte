<!--From Props/Spread props to -->
<script>
    import Info from './Info.svelte';

    const pkg = {
        name: 'svelte',
        version: 3,
        speed: 'blazing',
        website: 'https://svelte.dev'
    };

    let user = { loggedIn: false };

    function toggle() {
        user.loggedIn = !user.loggedIn;
    }

    let x = 7;
</script>

<!-- Conversely, if you need to reference all the props that were passed into a component,
     including ones that weren't declared with export, you can do so by accessing $$props directly.
     It's not generally recommended, as it's difficult for Svelte to optimise, but it's useful in rare cases.-->
<Info name={pkg.name} version={pkg.version} speed={pkg.speed} website={pkg.website}/>
<Info {...pkg}/>

{#if user.loggedIn}
        <button on:click={toggle}>
            Log out
        </button>
{/if}

{#if !user.loggedIn}
        <button on:click={toggle}>
            Log in
        </button>
{/if}

<br>

<!-- A # character always indicates a block opening tag. A / character always indicates a block closing tag.
     A : character, as in {:else}, indicates a block continuation tag.
     Don't worry — you've already learned almost all the syntax Svelte adds to HTML.-->
{#if user.loggedIn}
        <button on:click={toggle}>
            Log out
        </button>
{:else}
        <button on:click={toggle}>
            Log in
        </button>
{/if}



{#if x > 10}
        <p>{x} is greater than 10</p>
{:else}
    {#if 5 > x}
            <p>{x} is less than 5</p>
    {:else}
            <p>{x} is between 5 and 10</p>
    {/if}
{/if}

{#if x > 10}
        <p>{x} is greater than 10</p>
{:else if 5 > x}
        <p>{x} is less than 5</p>
{:else}
        <p>{x} is between 5 and 10</p>
{/if}

