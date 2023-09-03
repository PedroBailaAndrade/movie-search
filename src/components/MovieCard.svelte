<script>
	export let movie;
	import {
		favouriteMovies,
		addToFavouriteMovies,
		removeFromFavouriteMovies
	} from '../routes/favouritesMovies';
</script>

<div class="movie-card">
	<a href={'movie/' + movie.imdbID}>
		<p>{movie.Title}</p>
	</a>
	{#if $favouriteMovies.some((favouriteMovie) => favouriteMovie.imdbID === movie.imdbID)}
		<button on:click={() => removeFromFavouriteMovies(movie)}>Remove from favourites</button>
	{:else}
		<button on:click={() => addToFavouriteMovies(movie)}>Add to favourites</button>
	{/if}
</div>
