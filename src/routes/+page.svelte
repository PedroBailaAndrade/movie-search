<script>
	export let data;
	const { popularMovies } = data;

	import FavouriteMovies from '../components/FavouriteMovies.svelte';
	import PopularMovies from '../components/PopularMovies.svelte';
</script>

<section>
	<PopularMovies {popularMovies} />
	<FavouriteMovies />
</section>
