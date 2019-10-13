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
