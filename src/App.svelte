<script>
	import Counter from "./Counter.svelte";
	import Input from "./Input.svelte";

	const commonProps = { maxCounter: 5}
</script>

<Counter initialCounter={2} {...commonProps} />
<Counter initialCounter={5} {...commonProps} />
<Counter {...commonProps} /> 

<span>Estos son los contadores</span>