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

	.favourite-movies::-webkit-scrollbar {
		display: none;
	}

	@media only screen and (min-width: 768px) {
		.favourite-movies::before {
			content: '';
			background: rgb(226, 226, 226);
			background: linear-gradient(
				90deg,
				rgba(226, 226, 226, 1) 50%,
				rgba(226, 226, 226, 0.0046612394957983305) 100%
			);
			position: absolute;
			left: 0;
			top: 0;
			width: 2rem;
			height: 100%;
			z-index: 10000;
		}

		.favourite-movies::after {
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

		.favourite-movies {
			padding-left: 4rem;
		}

		.section {
			margin-left: 4rem;
		}
	}
</style>
