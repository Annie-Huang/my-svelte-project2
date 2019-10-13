<!--From Props/Spread props to Logic/Keyed each blocks -->
<script>
    import Info from './Info.svelte';
    import Thing from './Thing.svelte';

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

    let cats = [
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
    ];


    let things = [
        { id: 1, color: '#0d0887' },
        { id: 2, color: '#6a00a8' },
        { id: 3, color: '#b12a90' },
        { id: 4, color: '#e16462' },
        { id: 5, color: '#fca636' }
    ];

    function handleClick() {
        things = things.slice(1);
    }
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



<h1>The Famous Cats of YouTube</h1>

<ul>
    <!-- The expression (cats, in this case) can be any array or array-like object (i.e. it has a length property).
         You can loop over generic iterables with each [...iterable].-->
<!--    {#each cats as cat}-->
<!--    {#each cats as cat, i}-->
<!--        <li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">-->
<!--            {i + 1}: {cat.name}-->
    {#each cats as { id, name }, i}
        <li><a target="_blank" href="https://www.youtube.com/watch?v={id}">
            {i + 1}: {name}
        </a></li>
    {/each}
</ul>



<button on:click={handleClick}>
    Remove first thing
</button>

<!--{#each things as thing}-->
<!-- If you use the above syntax, it will remove <Thing> components from the end and updating the color for those that remain.-->

<!--The (thing.id) tells Svelte how to figure out what changed.
    You can use any object as the key, as Svelte uses a Map internally — in other words you could do (thing)
    instead of (thing.id). Using a string or number is generally safer, however, since it means identity persists
    without referential equality, for example when updating with fresh data from an API server.-->
{#each things as thing (thing.id)}
        <Thing current={thing.color}/>
{/each}
