<script>
	/** Hand-drawn style ribbon bow. Decorative unless `title` is given. */
	let { size = 48, title = '', class: className = '', ...rest } = $props();
</script>

<svg
	class={['bow', className]}
	width={size}
	height={size * 0.66}
	viewBox="0 0 64 42"
	role={title ? 'img' : undefined}
	aria-hidden={title ? undefined : 'true'}
	focusable="false"
	{...rest}
>
	{#if title}<title>{title}</title>{/if}
	<g stroke="var(--bow-stroke, var(--rose-deep))" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
		<path
			fill="var(--bow-fill, var(--rose))"
			d="M29.5 24.5c-2.6 4.9-6 9.8-10.6 14.6l6.4.6 1.6-4.1 3.2 2.5c1.3-4.3 2.6-8.6 3.1-12.7zM34.6 24.4c2.5 5 5.9 9.9 10.4 14.8l-6.3.5-1.7-4-3.1 2.6c-1.4-4.4-2.6-8.7-3-12.8z"
		/>
		<path
			fill="var(--bow-fill, var(--rose))"
			d="M31.5 20.6C25.8 13.4 17.3 6.4 9.8 5.4 4.6 4.7 2.3 9.8 3.4 15.6c1.1 6 5.4 11.3 11.4 11.7 6.2.4 12.4-2.6 16.7-6.7zM32.6 20.6c5.6-7.3 14-14.4 21.5-15.5 5.2-.8 7.6 4.3 6.6 10.1-1 6-5.2 11.4-11.2 11.9-6.2.5-12.5-2.4-16.9-6.5z"
		/>
		<path fill="none" stroke-width="1.6" opacity=".55" d="M10.5 11.2c5.3 1.4 11.4 5.6 16.8 9.4M53.6 11c-5.3 1.5-11.3 5.7-16.6 9.6" />
		<path
			fill="var(--bow-knot, var(--rose-knot))"
			d="M32 14.6c3.4-.2 5.2 2.6 5 6.2-.2 3.5-2.2 5.8-5.2 5.7-3-.1-4.9-2.5-4.9-6 0-3.4 1.8-5.8 5.1-5.9z"
		/>
	</g>
</svg>

<style>
	.bow {
		display: inline-block;
		flex: none;
		overflow: visible;
	}
</style>
