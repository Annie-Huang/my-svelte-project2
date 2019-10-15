import { writable } from 'svelte/store';

// Not all application state belongs inside your application's component hierarchy. Sometimes, you'll have values
// that need to be accessed by multiple unrelated components, or by a regular JavaScript module.
//
// In Svelte, we do this with stores. A store is simply an object with a subscribe method that allows
// interested parties to be notified whenever the store value changes.

// It's a writable store, which means it has set and update methods in addition to subscribe.
export const count = writable(0);
