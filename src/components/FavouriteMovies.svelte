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

<style>
	.favourite-movies {
		display: flex;
		gap: 3rem;
		overflow-x: scroll;
		padding-top: 7rem;
		padding-bottom: 3rem;

		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.favourite-movies::-webkit-scrollbar {
		display: none;
	}
</style>
