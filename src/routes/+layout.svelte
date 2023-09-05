<svelte:head>
	<title>Movie Search App</title>
</svelte:head>

<nav>
	<div class="logo">
		<a href="/"><img src="/logo.svg" alt="logo" /></a>
	</div>
</nav>

<slot />

<style>
	nav .logo {
		margin: 2rem auto 4rem auto;
		width: fit-content;
	}
	.logo img {
		width: 10rem;
	}
</style>
