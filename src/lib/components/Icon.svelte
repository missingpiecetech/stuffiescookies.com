<script>
	/** Small inline stroke icons (24px grid). Decorative unless `title` is given. */
	let { name, size = 20, title = '', class: className = '' } = $props();

	/** @type {Record<string, string>} */
	const paths = {
		instagram:
			'M7.5 2.75h9a4.75 4.75 0 0 1 4.75 4.75v9a4.75 4.75 0 0 1-4.75 4.75h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75zM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zM17.25 6.4v.1',
		arrow: 'M4.5 12h14.5M13.5 6.5 19 12l-5.5 5.5',
		clock: 'M12 21.25a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5zM12 7v5.25l3.5 2',
		calendar:
			'M5.5 4.75h13a1.75 1.75 0 0 1 1.75 1.75v12a1.75 1.75 0 0 1-1.75 1.75h-13A1.75 1.75 0 0 1 3.75 18.5v-12A1.75 1.75 0 0 1 5.5 4.75zM3.75 9.5h16.5M8 2.75v4M16 2.75v4',
		cookie:
			'M20.9 12.6A9 9 0 1 1 11.4 3.1a3 3 0 0 0 3.6 3.6 3 3 0 0 0 3.9 3.9 3 3 0 0 0 2 2zM8.5 9v.01M8 14.5v.01M12.5 12v.01M15.5 16v.01M11.5 17v.01',
		tag: 'M3.75 12.6V4.75a1 1 0 0 1 1-1h7.85a1 1 0 0 1 .7.3l7.6 7.6a1.5 1.5 0 0 1 0 2.1l-7.8 7.8a1.5 1.5 0 0 1-2.1 0l-7.6-7.6a1 1 0 0 1-.3-.7zM8.25 8.25v.01',
		bag: 'M5.2 7.75h13.6l-1 12.1a1.5 1.5 0 0 1-1.5 1.4H7.7a1.5 1.5 0 0 1-1.5-1.4zM8.75 7.75V6.5a3.25 3.25 0 0 1 6.5 0v1.25',
		message:
			'M20.25 11.6a8.1 8.1 0 0 1-11.8 7.2L3.75 20.25l1.5-4.4A8.1 8.1 0 1 1 20.25 11.6z',
		heart:
			'M12 20.25s-8.25-4.9-8.25-10.6A4.65 4.65 0 0 1 12 6.9a4.65 4.65 0 0 1 8.25 2.75c0 5.7-8.25 10.6-8.25 10.6z'
	};
</script>

<svg
	class={['icon', className]}
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.75"
	stroke-linecap="round"
	stroke-linejoin="round"
	role={title ? 'img' : undefined}
	aria-hidden={title ? undefined : 'true'}
	focusable="false"
>
	{#if title}<title>{title}</title>{/if}
	<path d={paths[name]} />
</svg>

<style>
	.icon {
		display: inline-block;
		flex: none;
		vertical-align: -0.2em;
	}
</style>
