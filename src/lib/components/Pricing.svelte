<script>
	import { pricing } from '$lib/data/business.js';
	import Bow from './Bow.svelte';

	let { headingLevel = 3 } = $props();
</script>

<ul class="prices" role="list">
	{#each pricing as option, i (option.id)}
		<li class="price" class:featured={i === 1}>
			{#if i === 1}<Bow size={46} class="corner-bow" />{/if}
			<svelte:element this={`h${headingLevel}`} class="name">{option.name}</svelte:element>
			<p class="amount"><span class="currency">$</span>{option.price}</p>
			<p class="detail">{option.detail}</p>
		</li>
	{/each}
</ul>

<style>
	.prices {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: 1rem;
	}

	.price {
		position: relative;
		padding: 1.5rem 1.5rem 1.6rem;
		border-radius: var(--radius);
		background: var(--paper);
		box-shadow: var(--shadow-sm);
		border: 1.5px solid rgb(138 95 71 / 0.12);
	}

	.featured {
		border-color: var(--pink);
		box-shadow: var(--shadow);
	}

	.price :global(.corner-bow) {
		position: absolute;
		top: -0.9rem;
		right: 1rem;
		transform: rotate(10deg);
	}

	.name {
		font-family: var(--font-body);
		font-size: 0.8125rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--rose-ink);
	}

	.amount {
		margin-top: 0.35rem;
		font-family: var(--font-display);
		font-variation-settings: 'SOFT' 100;
		font-size: 3rem;
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.03em;
	}

	.currency {
		font-size: 0.55em;
		vertical-align: 0.6em;
		margin-right: 0.05em;
	}

	.detail {
		margin-top: 0.5rem;
		color: var(--cocoa-soft);
		font-weight: 600;
	}
</style>
