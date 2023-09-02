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
