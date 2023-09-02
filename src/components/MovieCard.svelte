<script>
	export let movie;
</script>

<div class="movie-card">
	<a href={'movie/' + movie.imdbID}>
		<p>{movie.Title}</p>
	</a>
</div>
