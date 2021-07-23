<script>
    export let index, title, poster, year
</script>

<style>
    article {
        border: 1px solid white;
        border-radius: 5px;
        padding: 16px;
        margin-bottom: 8px;
    }
    h3 {
        font-size: 24px;
        margin-bottom: 4px;
    }
</style>

<article>
    <small>#{index}</small>
    <img alt={title} src={poster}>
    <h3>{title}</h3>
    <span>{year}</span>
    {#if 2021 - year < 5}
      <i>:new</i>
    {/if}
  </article>