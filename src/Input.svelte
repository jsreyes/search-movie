<script>
    let value = '';
    let response = [];

    const handleInput = (event) => value = event.target.value;

    $: if (value.length > 3) {
        fetch(`https://www.omdbapi.com/?s=${value}&apikey=422350ff`)
            .then(res => res.json())
            .then(apiResponse => {
                response = apiResponse.Search;
                console.log(apiResponse)
                console.log(response)

            })
    }
</script>

<input value={value} on:input={handleInput} />