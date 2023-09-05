<div class="movie-card-skeleton" />

<style>
	.movie-card-skeleton {
		animation: skeleton-loading 1s linear infinite alternate;
		aspect-ratio: 1/1.45;
		border-radius: 16px;
	}

	@keyframes skeleton-loading {
		0% {
			background-color: hsl(200, 20%, 70%);
		}
		100% {
			background-color: hsl(200, 20%, 95%);
		}
	}
</style>
