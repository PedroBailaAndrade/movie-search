<script>
	export let movie;
	export let favouriteButton = true;
	import Info from './Info.svelte';
</script>

<div class="movie-card">
	<img class="movie-poster" src={movie.Poster} alt="Movie Poster" />
	<div class="info-wrapper">
		<Info {movie} {favouriteButton} />
	</div>
</div>

<style>
	.movie-card {
		display: flex;
	}

	.movie-poster {
		border-radius: 16px;
		width: 10rem;
		z-index: 2;
	}

	.movie-card:hover .movie-poster {
		rotate: -6deg;
		transform: scale(1.6);
		transform-origin: bottom right;
	}

	.info-wrapper {
		clip-path: inset(0 100% 0 0);
		opacity: 0;
		margin-left: -4rem;
		width: 0;
		z-index: 1;

		transition: clip-path 1s, opacity 2s;
	}

	.movie-card:hover .info-wrapper {
		clip-path: inset(0 0 0 0);
		opacity: 1;
		width: 100%;
	}
</style>
