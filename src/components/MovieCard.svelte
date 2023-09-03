<script>
	export let movie;
	import {
		favouriteMovies,
		addToFavouriteMovies,
		removeFromFavouriteMovies
	} from '../routes/favouritesMovies';
</script>

<div class="movie-card">
	<p>{movie.Title}</p>
	{#if $favouriteMovies.some((favouriteMovie) => favouriteMovie.imdbID === movie.imdbID)}
		<button on:click={() => removeFromFavouriteMovies(movie)}>Remove from favourites</button>
	{:else}
		<button on:click={() => addToFavouriteMovies(movie)}>Add to favourites</button>
	{/if}

	<a href={'movie/' + movie.imdbID}> See More </a>
</div>
