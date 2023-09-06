<script>
	export let popularMovies;
	import MovieCard from './MovieCard.svelte';
</script>

<div class="wrapper">
	<h1 class="section">Popular Movies</h1>
	<div class="popular-movies">
		{#each popularMovies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		position: relative;
	}

	.section {
		position: absolute;
		top: 3rem;
		margin: 0;
	}
	.popular-movies {
		display: flex;
		gap: 3rem;
		overflow-x: scroll;
		padding-top: 7rem;
		padding-bottom: 3rem;

		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.popular-movies::-webkit-scrollbar {
		display: none;
	}

	@media only screen and (min-width: 768px) {
		.popular-movies::after {
			content: '';
			background: rgb(226, 226, 226);
			background: linear-gradient(
				90deg,
				rgba(226, 226, 226, 0.0046612394957983305) 0%,
				rgba(226, 226, 226, 1) 50%
			);
			position: absolute;
			right: 0;
			top: 0;
			width: 7rem;
			height: 100%;
			z-index: 1000;
		}
	}
</style>
