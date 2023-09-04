<script>
	export let movie;
	const { imdbID } = movie;
	import FavouriteButton from './FavouriteButton.svelte';
	import SeeMore from './SeeMore.svelte';
</script>

<div class="movie-card">
	<p>{movie.Title}</p>
	<FavouriteButton {movie} />
	<SeeMore {imdbID} />
</div>
