<script>
	import {
		addToFavouriteMovies,
		favouriteMovies,
		removeFromFavouriteMovies
	} from '../../favouritesMovies.js';

	export let data;
	const { movie } = data;
</script>

<button><a href="/">Home</a></button>

<p>{movie.Title}</p>

{#if $favouriteMovies.some((favouriteMovie) => favouriteMovie.imdbID === movie.imdbID)}
	<button on:click={() => removeFromFavouriteMovies(movie)}>Remove from favourites</button>
{:else}
	<button on:click={() => addToFavouriteMovies(movie)}>Add to favourites</button>
{/if}
