<script>
	import MovieCard from './MovieCard.svelte';

	let searchInputValue = '';
	let searching = false;
	let timeout;
	let searchedMovies = [];

	const handleSearch = () => {
		searching = true;
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(getMovies, 400);
	};

	const getMovies = async () => {
		if (!searchInputValue) {
			searchedMovies = [];
			return;
		}

		const response = await fetch(`http://www.omdbapi.com/?apikey=dc3f4ee5&s&s=${searchInputValue}`);

		const data = await response.json();

		if (response.ok) {
			searchedMovies = data.Search;
			searching = false;
		}
	};
</script>

<div class="search-movies">
	<label for="search">Movie Search</label>
	<input id="search" bind:value={searchInputValue} on:input={handleSearch} />
</div>

{#if searchedMovies?.length > 0}
	<div class="searched-movies">
		{#each searchedMovies as movie}
			<MovieCard {movie} favouriteButton={false} />
		{/each}
	</div>
{/if}
