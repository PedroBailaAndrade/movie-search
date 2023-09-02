<script>
	export let data;
	const { popularMovies } = data;

	import PopularMovies from '../components/PopularMovies.svelte';
</script>

<section>
	<PopularMovies {popularMovies} />
</section>
