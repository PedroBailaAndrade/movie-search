<script>
	export let imdbID;
</script>

<div class="see-more">
	<a data-sveltekit-preload-data="tap" href={'movie/' + imdbID}> See More </a>
</div>

<style>
	.see-more a {
		color: grey;
		font-size: 2rem;
		text-decoration: none;
	}
</style>
