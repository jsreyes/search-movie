import App from './App.svelte';

const app = new App({
	target: document.body, // Punto de anclaje para renderizar app Svelte, Donde se quiere renderizar
	props: {
		name: 'world'
	}
});

export default app;