<script>
	export let movie;
	import { favouriteMovies } from '../routes/favouritesMovies';
	import FavouriteButtonAdd from './FavouriteButtonAdd.svelte';
	import FavouriteButtonRemove from './FavouriteButtonRemove.svelte';
</script>

{#if $favouriteMovies.some((favouriteMovie) => favouriteMovie.imdbID === movie.imdbID)}
	<FavouriteButtonRemove {movie} />
{:else}
	<FavouriteButtonAdd {movie} />
{/if}
