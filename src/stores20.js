import { writable, derived } from 'svelte/store';

// As long as an object correctly implements the subscribe method, it's a store. Beyond that, anything goes.
// It's very easy, therefore, to create custom stores with domain-specific logic.
// For example, the count store from our earlier example could include increment, decrement and reset methods
// and avoid exposing set and update:
function createCount() {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        increment: () => update(n => n + 1),
        decrement: () => update(n => n - 1),
        reset: () => set(0)
    };
}

export const count = createCount();


export const name = writable('world');

export const greeting = derived(
    name,
    $name => `Hello ${$name}!`
);
