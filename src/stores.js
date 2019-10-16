import { readable } from 'svelte/store';

// The first argument to readable is an initial value, which can be null or undefined if you don't have one yet.
// The second argument is a start function that takes a set callback and returns a stop function.
// The start function is called when the store gets its first subscriber; stop is called when the last subscriber unsubscribes.
export const time = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});
