<script>
	import FavouriteButton from './FavouriteButton.svelte';
	import SeeMore from './SeeMore.svelte';

	export let movie;
	export let favouriteButton;
	let genreArray = [];

	// if (movie) {
	// 	genreArray = movie.Genre.split(', ').slice(0, 2);
	// }
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
	{#if movie.Genre}
		<div class="genre-wrapper">
			{#each genreArray as genre}
				<p class="genre">{genre}</p>
			{/each}
		</div>
	{/if}

	<SeeMore imdbID={movie.imdbID} />

	{#if favouriteButton}
		<FavouriteButton {movie} />
	{/if}
</div>

<style>
	.info-wrapper {
		background-color: #a28bfd;
		padding: 1rem 1rem 1rem 8rem;
		max-width: 18rem;
	}

	.title-wrapper {
		margin-bottom: 0.2rem;
	}

	.title {
		font-size: 3rem;
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

	.genre-wrapper {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.genre {
		border: 2px solid #fe6f6f;
		border-radius: 16px;
		color: #fe6f6f;
		font-size: 0.75rem;
		margin: 0;
		padding: 0.2rem 0.5rem;
		width: fit-content;
	}
</style>
