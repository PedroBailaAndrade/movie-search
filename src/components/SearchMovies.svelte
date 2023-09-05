<script>
	import MovieCard from './MovieCard.svelte';

	let error = false;
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

		const response = await fetch(
			`https://www.omdbapi.com/?apikey=dc3f4ee5&s&s=${searchInputValue}`
		);

		const data = await response.json();

		if (response.ok) {
			if (data.Error) {
				error = true;
			}
			searchedMovies = data.Search;
			searching = false;
		} else {
			error = true;
		}
	};
</script>

<div class="wrapper">
	<div class="search-movies">
		<label for="search">Movie Search</label>
		<input id="search" bind:value={searchInputValue} on:input={handleSearch} />
	</div>

	{#if searchInputValue}
		<div class="searched-movies">
			{#if !searching && searchedMovies?.length > 0}
				{#each searchedMovies as movie}
					<MovieCard {movie} favouriteButton={false} />
				{/each}
			{:else if searching}
				<MovieCard skeleton={true} />
				<MovieCard skeleton={true} />
				<MovieCard skeleton={true} />
			{:else if error}
				<p>Something went wrong!</p>
			{/if}
		</div>
	{/if}
</div>

<style>
	.wrapper {
		position: relative;
		min-height: 5rem;
	}

	.search-movies {
		position: absolute;
	}
	.searched-movies {
		display: flex;
		gap: 3rem;
		overflow-x: scroll;
		padding-top: 7rem;
		padding-bottom: 3rem;

		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.searched-movies::after {
		content: '';
		background: rgb(255, 255, 255);
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.836594012605042) 75%
		);
		position: absolute;
		right: 0;
		top: 0;
		width: 9rem;
		height: 100%;
		z-index: 1000;
	}

	.searched-movies::-webkit-scrollbar {
		display: none;
	}
</style>
