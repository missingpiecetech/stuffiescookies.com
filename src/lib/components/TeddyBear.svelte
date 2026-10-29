<script>
	import Bow from './Bow.svelte';

	/** Hand-drawn style teddy bear face. Decorative unless `title` is given. */
	let { size = 48, bow = false, title = '', class: className = '', ...rest } = $props();
</script>

<span class={['bear', className]} style:--size="{size}px">
	<svg
		width={size}
		height={size}
		viewBox="0 0 64 64"
		role={title ? 'img' : undefined}
		aria-hidden={title ? undefined : 'true'}
		focusable="false"
		{...rest}
	>
		{#if title}<title>{title}</title>{/if}
		<g stroke="var(--bear-stroke, var(--toffee))" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round">
			<path fill="var(--bear-fill, var(--caramel))" d="M16.4 8.6c5-.2 8.6 3.6 8.4 8.3-.2 4.8-4 8.2-8.7 8-4.5-.2-7.9-3.9-7.6-8.4.3-4.5 3.4-7.7 7.9-7.9zM47.7 8.5c4.6.1 7.9 3.6 7.8 8.1-.1 4.7-3.8 8.3-8.4 8.2-4.7-.1-8.3-3.8-8.1-8.4.2-4.6 4-8 8.7-7.9z" />
			<path fill="var(--bear-inner, var(--pink))" stroke="none" d="M16.5 12.6c2.4 0 4.2 1.9 4.1 4.2 0 2.3-1.9 4-4.2 3.9-2.2-.1-3.9-1.9-3.8-4.1.1-2.3 1.7-4 3.9-4zM47.6 12.5c2.3.1 4 1.9 3.9 4.2-.1 2.2-1.9 3.9-4.2 3.8-2.2-.1-3.9-1.9-3.8-4.1.1-2.3 1.9-4 4.1-3.9z" />
			<path fill="var(--bear-fill, var(--caramel))" d="M32.3 14.4c12.6-.3 21.6 8.5 21.4 20.6-.2 12.4-9.6 20.6-21.9 20.6-12.1 0-21.6-8.4-21.5-20.5.1-12 9.4-20.4 22-20.7z" />
			<path fill="var(--bear-muzzle, var(--latte-light))" d="M32.1 36.3c5.6-.1 9.6 3.1 9.5 7.3-.1 4.3-4.3 7.3-9.7 7.3-5.3 0-9.4-3-9.4-7.2 0-4.3 4.1-7.3 9.6-7.4z" />
			<path fill="var(--bear-ink, var(--cocoa))" stroke="none" d="M28.6 39.7c0-1.7 6.9-1.8 6.9 0 0 1.9-2.4 3.4-3.5 3.4s-3.4-1.5-3.4-3.4z" />
			<path fill="none" stroke="var(--bear-ink, var(--cocoa))" stroke-width="1.8" d="M32 43.1v2.4M28.4 46.4c1.6 1.4 3.1 1 3.6-.9.5 1.9 2 2.3 3.6.9" />
			<circle cx="24.2" cy="31.6" r="2.3" fill="var(--bear-ink, var(--cocoa))" stroke="none" />
			<circle cx="39.9" cy="31.6" r="2.3" fill="var(--bear-ink, var(--cocoa))" stroke="none" />
			<ellipse cx="18.6" cy="40.8" rx="3.2" ry="2.1" fill="var(--bear-cheek, var(--rose))" stroke="none" opacity=".7" />
			<ellipse cx="45.6" cy="40.8" rx="3.2" ry="2.1" fill="var(--bear-cheek, var(--rose))" stroke="none" opacity=".7" />
		</g>
	</svg>
	{#if bow}
		<Bow size={size * 0.5} class="bear-bow" />
	{/if}
</span>

<style>
	.bear {
		position: relative;
		display: inline-flex;
		flex: none;
		line-height: 0;
	}

	.bear :global(.bear-bow) {
		position: absolute;
		top: calc(var(--size) * -0.04);
		right: calc(var(--size) * -0.1);
		transform: rotate(18deg);
	}
</style>
