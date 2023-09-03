<script>
	export let movie;
	const { imdbID } = movie;
	import {
		favouriteMovies,
		addToFavouriteMovies,
		removeFromFavouriteMovies
	} from '../routes/favouritesMovies';
	import SeeMore from './SeeMore.svelte';
</script>

<div class="movie-card">
	<p>{movie.Title}</p>
	{#if $favouriteMovies.some((favouriteMovie) => favouriteMovie.imdbID === movie.imdbID)}
		<button on:click={() => removeFromFavouriteMovies(movie)}>Remove from favourites</button>
	{:else}
		<button on:click={() => addToFavouriteMovies(movie)}>Add to favourites</button>
	{/if}

	<SeeMore {imdbID} />
</div>
