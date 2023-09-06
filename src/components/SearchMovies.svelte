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
		<input
			id="search"
			placeholder="Search for movies..."
			bind:value={searchInputValue}
			on:input={handleSearch}
		/>
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
				<p>Try something else! Like Spider-Man or Oppenheimer</p>
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

	label {
		display: none;
	}

	input {
		background-color: transparent;
		border: 3px solid black;
		border-radius: 16px;
		font-size: 2rem;
		padding: 5px;
	}

	input:focus {
		outline: none;
	}

	.searched-movies::-webkit-scrollbar {
		display: none;
	}

	@media only screen and (min-width: 768px) {
		.searched-movies::after {
			content: '';
			background: rgb(226, 226, 226);
			background: linear-gradient(
				90deg,
				rgba(226, 226, 226, 0.0046612394957983305) 0%,
				rgba(226, 226, 226, 1) 50%
			);
			position: absolute;
			right: 0;
			top: 0;
			width: 7rem;
			height: 100%;
			z-index: 1000;
		}
	}
</style>
