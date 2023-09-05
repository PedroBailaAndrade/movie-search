<script>
	import { fly } from 'svelte/transition';
	import FavouriteButton from '../../../components/FavouriteButton.svelte';

	export let data;
	const { movie, error } = data;
	let genreArray = [];
	let actorsArray = [];
	let writersArray = [];

	genreArray = movie?.Genre.split(', ');
	actorsArray = movie?.Actors.split(', ');
	writersArray = movie?.Writer.split(', ');
</script>

{#if error}
	<p>Something went wrong!</p>
{:else}
	<div
		class="movie-details-wrapper"
		in:fly={{ y: 50, duration: 500, delay: 500 }}
		out:fly={{ duration: 500 }}
	>
		<div class="main-info-wrapper">
			<img class="poster" src={movie.Poster} alt="Movie Poster" />
			<div class="info">
				<div class="title-wrapper">
					<p class="title">{movie.Title}</p>
					<div class="favourite-button">
						<FavouriteButton {movie} />
					</div>
				</div>
				<div class="sub-info-wrapper">
					<p class="year">{movie.Year}</p>
					<p class="runtime">{movie.Runtime}</p>
					{#if movie.imdbRating && movie.imdbRating !== 'N/A'}
						<div class="rating-wrapper">
							<p class="rating">{movie.imdbRating}<span>/10</span></p>
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
				<p class="plot">{movie.Plot}</p>
			</div>
		</div>

		{#if movie.Actors}
			<div class="actor-wrapper">
				<p class="header">
					{#if actorsArray.length > 1}
						Actors:
					{:else}
						Actor:
					{/if}
				</p>
				<div class="content">
					{#each actorsArray as actor}
						<div class="person-card">
							<img src="/avatar.png" alt="avatar" />
							<p class="actor">{actor}</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		{#if movie.Writer}
			<div class="writer-wrapper">
				<p class="header">
					{#if writersArray.length > 1}
						Writers:
					{:else}
						Writer:
					{/if}
				</p>
				<div class="content">
					{#each writersArray as writer}
						<div class="person-card">
							<img src="/avatar.png" alt="avatar" />
							<p class="writer">{writer}</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
{/if}

<style>
	.main-info-wrapper {
		display: grid;
		gap: 3rem;
		grid-template-columns: min-content 1fr;
		grid-template-rows: 1fr;
		margin-bottom: 3rem;
	}

	.poster {
		border: 4px solid grey;
		border-radius: 26px;
		max-width: 24rem;
	}

	.title-wrapper {
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	.title {
		font-size: 4rem;
		font-weight: bold;
		margin: 0;
	}

	.sub-info-wrapper {
		align-items: center;
		display: flex;
		margin-bottom: 8rem;
	}

	.year,
	.runtime,
	.rating {
		font-size: 1rem;
		margin: 0;
	}

	.rating-wrapper {
		align-items: center;
		display: flex;
	}

	.rating span {
		font-size: 0.7rem;
	}

	.runtime::before,
	.rating::before {
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

	.actor-wrapper .header,
	.writer-wrapper .header {
		font-size: 2rem;
		margin: 0 auto 1rem;
	}

	.actor-wrapper .content,
	.writer-wrapper .content {
		display: flex;
		gap: 2rem;
	}

	.person-card {
		display: grid;
		width: min-content;
		justify-items: center;
	}

	.person-card img {
		width: 5rem;
	}

	.person-card p {
		white-space: nowrap;
	}
</style>
