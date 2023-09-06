<script>
	import FavouriteButton from './FavouriteButton.svelte';
	import SeeMore from './SeeMore.svelte';

	export let movie;
	export let favouriteButton;
</script>

<div class="info-wrapper">
	<div class="title-wrapper">
		<p class="title">{movie.Title}</p>
	</div>
	<div class="sub-info-wrapper">
		<p class="year">{movie?.Year}</p>
		{#if movie.Runtime}
			<p class="runtime">{movie?.Runtime}</p>
		{/if}
		{#if movie.imdbRating && movie.imdbRating !== 'N/A'}
			<div class="rating-wrapper">
				<p class="rating-text">{movie?.imdbRating}<span>/10</span></p>
			</div>
		{/if}
	</div>

	<div class="bottom-info-wrapper">
		<SeeMore imdbID={movie.imdbID} />
		{#if favouriteButton}
			<FavouriteButton {movie} />
		{/if}
	</div>
</div>

<style>
	.info-wrapper {
		border: 4px solid black;
		border-radius: 16px;
		padding: 4rem 0.5rem 0.5rem;
	}

	.title-wrapper {
		margin-bottom: 0.2rem;
	}

	.title {
		font-size: 1.5rem;
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}

	.sub-info-wrapper {
		align-items: center;
		display: flex;
		margin-bottom: 0.7rem;
	}

	.year,
	.runtime,
	.rating-text {
		font-size: 1rem;
		margin: 0;
	}

	.rating-wrapper {
		align-items: center;
		display: flex;
	}

	.rating-text span {
		font-size: 0.7rem;
	}

	.runtime::before,
	.rating-text::before {
		margin: 0 0.5rem 0.2rem;
		content: '|';
		font-size: 1rem;
		padding: 1px;
		vertical-align: unset;
	}

	.bottom-info-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
