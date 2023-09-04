<script>
	import { favouriteMovies } from '../routes/favouritesMovies';
	import MovieCard from './MovieCard.svelte';
</script>

{#if $favouriteMovies.length > 0}
	<h1>Favourite Movies</h1>

	<div class="favourite-movies">
		{#each $favouriteMovies as favouriteMovie}
			<MovieCard movie={favouriteMovie} />
		{/each}
	</div>
{/if}
