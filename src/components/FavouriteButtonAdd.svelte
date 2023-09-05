<script>
	import { addToFavouriteMovies } from '../lib/favouritesMovies';

	export let movie;
</script>

<button on:click={() => addToFavouriteMovies(movie)}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="668"
		height="600"
		viewBox="0 0 668 600"
		fill="none"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M334 100.006C274.02 30.1057 173.792 8.50335 98.641 72.5113C23.4893 136.519 12.909 243.537 71.926 319.24C120.995 382.18 269.493 514.93 318.163 557.897C323.607 562.703 326.33 565.107 329.507 566.05C332.277 566.873 335.31 566.873 338.083 566.05C341.26 565.107 343.98 562.703 349.427 557.897C398.097 514.93 546.593 382.18 595.663 319.24C654.68 243.537 645.39 135.846 568.947 72.5113C492.503 9.17668 393.98 30.1057 334 100.006Z"
			stroke="black"
			stroke-width="66.6667"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</button>

<style>
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		height: 2rem;
		width: 2rem;
	}

	button svg {
		height: 100%;
		width: 100%;
	}
</style>
