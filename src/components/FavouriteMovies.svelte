<script>
	import { favouriteMovies } from '../lib/favouritesMovies';
	import MovieCard from './MovieCard.svelte';
</script>

<div class="wrapper">
	{#if $favouriteMovies.length > 0}
		<h1 class="section">Favourite Movies</h1>

		<div class="favourite-movies">
			{#each $favouriteMovies as favouriteMovie}
				<MovieCard movie={favouriteMovie} />
			{/each}
		</div>
	{/if}
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
	.favourite-movies {
		display: flex;
		gap: 3rem;
		overflow-x: scroll;
		padding-top: 7rem;
		padding-bottom: 3rem;

		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.favourite-movies::after {
		content: '';
		background: rgb(255, 255, 255);
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.836594012605042) 75%
		);
		position: absolute;
		right: 0;
		top: 0;
		width: 9rem;
		height: 100%;
		z-index: 1000;
	}

	.favourite-movies::-webkit-scrollbar {
		display: none;
	}
</style>
