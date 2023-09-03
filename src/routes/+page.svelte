<script>
	export let data;
	const { popularMovies } = data;

	import FavouriteMovies from '../components/FavouriteMovies.svelte';
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovies from '../components/SearchMovies.svelte';
</script>

<section>
	<SearchMovies />
	<PopularMovies {popularMovies} />
	<FavouriteMovies />
</section>
