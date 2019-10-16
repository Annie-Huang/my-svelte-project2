<!--From Motion/Spring to-->
<script>
    // The spring function is an alternative to tweened that often works better for values that are frequently changing.
    import { writable, spring } from 'svelte/store';

    // let coords = writable({ x: 50, y: 50 });
    // let size = writable(10);

    // let coords = spring({ x: 50, y: 50 });
    let size = spring(10);

    let coords = spring({ x: 50, y: 50 }, {
        stiffness: 0.1,
        damping: 0.25
    });
</script>

<style>
    svg { width: 100%; height: 100%; margin: -8px; }
    circle { fill: #ff3e00 }
</style>

<div style="position: absolute; right: 1em;">
    <label>
        <h3>stiffness ({coords.stiffness})</h3>
        <input bind:value={coords.stiffness} type="range" min="0" max="1" step="0.01">
    </label>

    <label>
        <h3>damping ({coords.damping})</h3>
        <input bind:value={coords.damping} type="range" min="0" max="1" step="0.01">
    </label>
</div>

<svg
        on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY })}"
        on:mousedown="{() => size.set(30)}"
        on:mouseup="{() => size.set(10)}"
>
    <circle cx={$coords.x} cy={$coords.y} r={$size}/>
</svg>
