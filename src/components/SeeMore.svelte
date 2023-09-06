<script>
	export let imdbID;
</script>

<div class="see-more">
	<a data-sveltekit-preload-data="tap" href={'movie/' + imdbID}> See More </a>
</div>

<style>
	.see-more a {
		color: black;
		font-size: 1.2rem;
		font-weight: 500;
		text-decoration: none;
	}
</style>
