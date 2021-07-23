<script>
	import Counter from "./Counter.svelte";
	import Input from "./Input.svelte";

	const commonProps = { maxCounter: 5}
</script>

<!-- Reactive declarations 
	<Counter initialCounter={2} {...commonProps} />
	<Counter initialCounter={5} {...commonProps} />
	<Counter {...commonProps} /> 

	<span>Estos son los contadores</span> 
-->

<style>
	h1 {
		font-size: 32px;
	}
	section {
		align-items: center;
		display: flex;
		flex-direction: column;
	}
</style>

<section>
	<h1>Search Movies 🍿</h1>
  <Input />
</section>