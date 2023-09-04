<script>
	export let popularMovies;
	import MovieCard from './MovieCard.svelte';
</script>

<h1>Popular Movies</h1>
<div class="popular-movies">
	{#each popularMovies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.popular-movies {
		display: flex;
		gap: 3rem;
		overflow-x: scroll;
		padding-top: 7rem;
		padding-bottom: 3rem;

		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.popular-movies::-webkit-scrollbar {
		display: none;
	}
</style>
