<script>
	import { favouriteMovies } from '../routes/favouritesMovies';
	import FavouriteButton from './FavouriteButton.svelte';
	import SeeMore from './SeeMore.svelte';
</script>

{#if $favouriteMovies.length > 0}
	<h1>Favourite Movies</h1>

	<div class="favourite-movies">
		{#each $favouriteMovies as favouriteMovie}
			<p>{favouriteMovie.Title}</p>
			<FavouriteButton movie={favouriteMovie} />
			<SeeMore imdbID={favouriteMovie.imdbID} />
		{/each}
	</div>
{/if}
