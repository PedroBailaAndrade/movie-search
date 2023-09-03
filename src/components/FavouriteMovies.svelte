<script>
	import { favouriteMovies, removeFromFavouriteMovies } from '../routes/favouritesMovies';
</script>

{#if $favouriteMovies.length > 0}
	<h1>Popular Movies</h1>

	<div class="favourite-movies">
		{#each $favouriteMovies as favouriteMovie}
			<p>{favouriteMovie.Title}</p>
			<button on:click={() => removeFromFavouriteMovies(favouriteMovie)}>
				Remove from favourites
			</button>
		{/each}
	</div>
{/if}
