<script>
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<main>
	{@render children?.()}
</main>
<Footer />

<style>
	main {
		min-height: calc(100vh - 200px);
	}
</style>

