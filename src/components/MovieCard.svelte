<script>
	export let movie;
	export let favouriteButton = true;
	export let skeleton = false;
	import Info from './Info.svelte';
	import MovieCardSkeleton from './MovieCardSkeleton.svelte';
</script>

<div class="movie-card">
	{#if skeleton}
		<MovieCardSkeleton />
	{:else}
		<img class="movie-poster" src={movie.Poster} alt="Movie Poster" />
		<div class="info-wrapper">
			<Info {movie} {favouriteButton} />
		</div>
	{/if}
</div>

<style>
	.movie-card {
		position: relative;
		display: grid;
		grid-template-columns: 200px;
	}

	.movie-poster {
		aspect-ratio: 1/1.45;
		border-radius: 16px;
		object-fit: cover;
		position: relative;
		width: 100%;
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

	.movie-card:last-child {
		margin-right: 7rem;
	}
</style>
