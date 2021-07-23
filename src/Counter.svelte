<script>
  // Props injection
  export let initialCounter = 0;
  export let maxCounter = 9;
  // Asignacion reactiva
  let contador = initialCounter;
  // Lleg

  function handleClick() {
      contador++;
  }

  // let isEvenOrOdd = contador % 2 === 0 ? ' is Even': 'Is Odd';
  // Way 1: Sentencia reactiva, declaracion reactiva, se ejecuta cada vez que cambie el contador
  $: isEvenOrOdd = contador % 2 === 0 ? ' is Even': 'Is Odd';
  // Tiene su similitud con un efecto, declaracion reactiva
  $: if (contador > maxCounter) {        
      contador = 9;
  }

</script>

<main>
  <button on:click={handleClick}>Incrementar</button>
  <span>{contador}</span>
  <span>{isEvenOrOdd}</span>
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
