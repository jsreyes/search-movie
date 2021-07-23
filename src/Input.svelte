<script>
  import Movie from './Movie.svelte';

  let value = '';
  let loading = false
  let response = [];

  const handleInput = (event) => value = event.target.value;

  $: if (value.length > 3) {
    loading = true
    
    fetch(`https://www.omdbapi.com/?s=${value}&apikey=422350ff`)
      .then(res => res.json())
      .then(apiResponse => {
        response = apiResponse.Search || []
        loading = false
      })
    }
</script>

<input 
    placeholder="Search movies..." 
    value={value} 
    on:input={handleInput} 
/>

{#if loading}
  <strong>Loading....</strong>
{:else}
  <!-- <strong>Tenemos {response.length} peliculas</strong> -->
  {#each response as {Title, Poster, Year}, index}
    <Movie 
      index={index}
      title={Title}
      poster={Poster}
      year={Year}
      />
  {:else}
    <strong>No hay resultados</strong>
  {/each}
{/if}


<!-- {
  Forma incorrecta de render Svelte
    response.length > 0 
        ? `Tenemos ${response.length} peliculas` 
        : `No se han encontrado peliculas`
} -->

