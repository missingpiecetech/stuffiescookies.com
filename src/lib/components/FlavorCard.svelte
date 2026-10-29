<script>
	import TeddyBear from './TeddyBear.svelte';
	import Bow from './Bow.svelte';

	/** @type {{ flavor: (typeof import('$lib/data/business.js').flavors)[number], sizes?: string }} */
	let { flavor, sizes = '(min-width: 72rem) 22rem, (min-width: 40rem) 45vw, 92vw' } = $props();
</script>

<article class="card">
	<div class="media">
		{#if flavor.photo}
			<img
				src={flavor.photo.src}
				srcset={flavor.photo.srcset}
				{sizes}
				width={flavor.photo.width}
				height={flavor.photo.height}
				alt={flavor.alt}
				loading="lazy"
				decoding="async"
			/>
		{:else}
			<div class="placeholder">
				<TeddyBear size={72} bow />
				<p>Photo coming soon</p>
			</div>
		{/if}
		{#if flavor.category === 'rotating'}
			<span class="badge"><Bow size={18} />Rotating</span>
		{/if}
	</div>
	<div class="body">
		<h3>{flavor.name}</h3>
		<p>{flavor.description}</p>
	</div>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
		border-radius: var(--radius);
		background: var(--paper);
		box-shadow: var(--shadow);
		transition:
			transform 220ms ease,
			box-shadow 220ms ease;
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.media {
		position: relative;
		aspect-ratio: 1;
		overflow: hidden;
		background: var(--latte-light);
	}

	@media (max-width: 40rem) {
		.media {
			aspect-ratio: 4 / 3;
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 500ms ease;
	}

	.card:hover img {
		transform: scale(1.04);
	}

	.placeholder {
		display: grid;
		place-content: center;
		justify-items: center;
		gap: 0.75rem;
		height: 100%;
		background:
			radial-gradient(circle at 50% 45%, var(--paper) 0 28%, transparent 60%),
			repeating-linear-gradient(90deg, rgb(242 201 198 / 0.45) 0 14px, transparent 14px 28px),
			repeating-linear-gradient(0deg, rgb(242 201 198 / 0.45) 0 14px, transparent 14px 28px),
			var(--blush);
	}

	.placeholder p {
		padding: 0.25rem 0.8rem;
		border-radius: 999px;
		background: var(--paper);
		font-size: 0.875rem;
		font-weight: 800;
		color: var(--cocoa-soft);
	}

	.badge {
		position: absolute;
		top: 0.75rem;
		left: 0.75rem;
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.3rem 0.75rem 0.3rem 0.5rem;
		border-radius: 999px;
		background: var(--paper);
		box-shadow: var(--shadow-sm);
		font-size: 0.8125rem;
		font-weight: 800;
		color: var(--rose-ink);
	}

	.body {
		padding: 1.25rem 1.4rem 1.5rem;
	}

	.body p {
		margin-top: 0.4rem;
		color: var(--cocoa-soft);
	}
</style>
