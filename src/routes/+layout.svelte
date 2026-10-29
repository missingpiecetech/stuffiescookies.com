<script>
	import '@fontsource-variable/fraunces/soft.css';
	import '@fontsource-variable/nunito';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { siteGraph, ldScript } from '$lib/data/jsonld.js';

	let { children } = $props();
</script>

<svelte:head>
	{@html ldScript(siteGraph())}
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>
<Header />
<main id="main" tabindex="-1">
	{@render children()}
</main>
<Footer />

<style>
	.skip-link {
		position: absolute;
		top: 0.75rem;
		left: 0.75rem;
		z-index: 100;
		padding: 0.6rem 1rem;
		border-radius: 999px;
		background: var(--cocoa);
		color: var(--cream);
		font-weight: 800;
		transform: translateY(-200%);
	}

	.skip-link:focus {
		transform: none;
	}

	main:focus {
		outline: none;
	}
</style>
