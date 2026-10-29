<script>
	import { site } from '$lib/data/business.js';
	import { ldScript } from '$lib/data/jsonld.js';

	/**
	 * @type {{
	 *   title: string,
	 *   description: string,
	 *   path?: string,
	 *   image?: { src: string, width: number, height: number, alt: string },
	 *   jsonLd?: object[]
	 * }}
	 */
	let { title, description, path = '/', image = site.ogImage, jsonLd = [] } = $props();

	const canonical = $derived(new URL(path, site.url).href);
	const imageUrl = $derived(new URL(image.src, site.url).href);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content={site.locale} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content={String(image.width)} />
	<meta property="og:image:height" content={String(image.height)} />
	<meta property="og:image:alt" content={image.alt} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={image.alt} />

	{#each jsonLd as data, i (i)}
		{@html ldScript(data)}
	{/each}
</svelte:head>
