<script>
	// Props injection
	export let initialCounter = 0;
	let contador = initialCounter

	function handleClick() {
		contador++;
	}
</script>

<main>
	<button on:click={handleClick}>Incrementar</button>
	<span>{contador}</span>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	span {
		color: #ff3e00;
	}
</style>
