import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
        // we'll learn about props later
        answer: 42
	}
});

export default app;
