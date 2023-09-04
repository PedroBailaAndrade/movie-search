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
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
	}

	.movie-poster {
		border-radius: 16px;
		position: relative;
		z-index: 1000;
	}

	.movie-card:hover .movie-poster {
		top: -6rem;
	}

	.info-wrapper {
		bottom: 0;
		left: 0;
		position: absolute;
		width: 100%;
	}

	.movie-card:hover .info-wrapper {
		bottom: -2rem;
	}
</style>
