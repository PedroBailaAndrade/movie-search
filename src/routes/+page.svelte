<script>
	export let data;
	const { popularMovies } = data;

	import FavouriteMovies from '../components/FavouriteMovies.svelte';
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovies from '../components/SearchMovies.svelte';
	import { fly } from 'svelte/transition';
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovies />
	{#if popularMovies}
		<PopularMovies {popularMovies} />
	{/if}
	<FavouriteMovies />
</section>

<style>
	@media only screen and (min-width: 768px) {
		section {
			margin: 0 auto;
			max-width: 1100px;
		}
	}
</style>
