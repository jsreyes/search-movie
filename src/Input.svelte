<script>
  import Movie from './Movie.svelte'; 
  let value = '';
  let response = [];

  const handleInput = (event) => value = event.target.value;

  $: if (value.length > 3) {    
    response = fetch(`https://www.omdbapi.com/?s=${value}&apikey=422350ff`)
      //.then(res => !res.ok && new Error('Ha habido un error consultando las pelis'))
      .then(res => res.json())
      .then(apiResponse => apiResponse.Search || [])
    }
</script>

<input 
    placeholder="Search movies..." 
    value={value} 
    on:input={handleInput} 
/>

{#await response}
  <strong>Loading....</strong>
{:then movies}
  <!-- <strong>Tenemos {response.length} peliculas</strong> -->
  {#each movies as {Title, Poster, Year}}
    <Movie 
      title={Title}
      poster={Poster}
      year={Year}
      />
  {:else}
    <strong>No hay resultados</strong>
  {/each}
{/await}


<!-- {
  Forma incorrecta de render Svelte
    response.length > 0 
        ? `Tenemos ${response.length} peliculas` 
        : `No se han encontrado peliculas`
} -->

