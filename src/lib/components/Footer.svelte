<script>
	import { site, instagram, hours } from '$lib/data/business.js';
	import TeddyBear from './TeddyBear.svelte';
	import Icon from './Icon.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="plaid band" aria-hidden="true"></div>
	<div class="container grid">
		<div class="about">
			<a class="brand" href="/">
				<TeddyBear size={44} bow />
				<span>{site.name}</span>
			</a>
			<p>Big, chewy cookies, baked to order for local pickup.</p>
		</div>

		<div>
			<h2>Order</h2>
			<address>
				<a href={instagram.url} rel="noopener" target="_blank">
					<Icon name="instagram" size={18} />
					{instagram.handle}
				</a>
			</address>
			<p>Local pickup only</p>
		</div>

		<div>
			<h2>Hours</h2>
			<dl class="hours">
				{#each hours as h (h.label)}
					<div>
						<dt>{h.label}</dt>
						<dd>
							{#if h.closed}
								Closed
							{:else}
								<time datetime={h.opens}>{h.display?.opens}</time>–<time datetime={h.closes}
									>{h.display?.closes}</time
								>
							{/if}
						</dd>
					</div>
				{/each}
			</dl>
		</div>

		<nav aria-label="Footer">
			<h2>Explore</h2>
			<ul role="list">
				<li><a href="/">Home</a></li>
				<li><a href="/flavors">Flavors</a></li>
				<li><a href="/flavors#ordering">Pricing</a></li>
				<li><a href="/flavors#faq">FAQ</a></li>
			</ul>
		</nav>
	</div>
	<div class="container legal">
		<p>© {year} {site.name}</p>
	</div>
</footer>

<style>
	.site-footer {
		margin-top: auto;
		background: var(--latte);
		color: var(--cocoa);
	}

	.band {
		height: 14px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
		gap: 2.5rem 2rem;
		padding-block: 3.5rem 2.5rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--cocoa);
		text-decoration: none;
		font-family: var(--font-display);
		font-variation-settings: 'SOFT' 100;
		font-size: 1.35rem;
		font-weight: 650;
	}

	.about p {
		margin-top: 0.75rem;
		max-width: 22rem;
		color: var(--cocoa-soft);
	}

	h2 {
		margin-bottom: 0.75rem;
		font-family: var(--font-body);
		font-size: 0.8125rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--cocoa-soft);
	}

	address {
		font-style: normal;
	}

	address a {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		font-weight: 800;
		color: var(--cocoa);
	}

	address + p {
		margin-top: 0.35rem;
		color: var(--cocoa-soft);
	}

	.hours div {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		max-width: 16rem;
		padding-block: 0.15rem;
	}

	dt {
		font-weight: 700;
	}

	dd {
		color: var(--cocoa-soft);
		font-variant-numeric: tabular-nums;
	}

	nav ul {
		display: grid;
		gap: 0.25rem;
	}

	nav a {
		color: var(--cocoa);
		font-weight: 700;
		text-decoration: none;
	}

	nav a:hover {
		text-decoration: underline;
	}

	.legal {
		padding-block: 1.25rem 2rem;
		border-top: 1px solid rgb(74 49 40 / 0.14);
		font-size: 0.9375rem;
		color: var(--cocoa-soft);
	}
</style>
