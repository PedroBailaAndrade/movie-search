<script>
	import FavouriteButton from '../../../components/FavouriteButton.svelte';

	export let data;
	const { movie } = data;
</script>

<p>{movie.Title}</p>
<FavouriteButton {movie} />
