<script>
	import { favouriteMovies, removeFromFavouriteMovies } from '../routes/favouritesMovies';
</script>

{#if $favouriteMovies.length > 0}
	<h1>Favourite Movies</h1>

	<div class="favourite-movies">
		{#each $favouriteMovies as favouriteMovie}
			<p>{favouriteMovie.Title}</p>
			<button on:click={() => removeFromFavouriteMovies(favouriteMovie)}>
				Remove from favourites
			</button>
			<a href={'movie/' + favouriteMovie.imdbID}>See More</a>
		{/each}
	</div>
{/if}
