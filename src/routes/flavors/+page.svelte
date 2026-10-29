<script>
	import Seo from '$lib/components/Seo.svelte';
	import Bow from '$lib/components/Bow.svelte';
	import TeddyBear from '$lib/components/TeddyBear.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import FlavorCard from '$lib/components/FlavorCard.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import { site, instagram, ordering, pricing, categories, flavors, flavorsIn, faq, hours } from '$lib/data/business.js';
	import { faqPage, breadcrumbs } from '$lib/data/jsonld.js';

	const path = '/flavors';
	const [bakersDozen, mixDozen] = pricing;
	const crumbs = [
		{ name: 'Home', path: '/' },
		{ name: 'Flavors', path }
	];
</script>

<Seo
	title="Flavors, pricing and ordering | {site.name}"
	description="All {flavors.length} Stuffie’s Cookies flavors, from Chocolate Chip to Ube. ${bakersDozen.price} baker’s dozen or ${mixDozen.price} mix-and-match dozen. Order {ordering.leadTimeHours} hours ahead on Instagram for local pickup."
	{path}
	jsonLd={[breadcrumbs(crumbs), faqPage(path)]}
/>

<header class="page-head">
	<div class="container">
		<nav aria-label="Breadcrumb">
			<ol class="crumbs" role="list">
				{#each crumbs as crumb, i (crumb.path)}
					<li>
						{#if i === crumbs.length - 1}
							<span aria-current="page">{crumb.name}</span>
						{:else}
							<a href={crumb.path}>{crumb.name}</a>
						{/if}
					</li>
				{/each}
			</ol>
		</nav>
		<h1>The flavors</h1>
		<p class="lede">
			{flavorsIn('classic').length} classics on the menu all year, plus rotating flavors that come and go. Mix
			and match up to {ordering.maxMixFlavors} in a dozen.
		</p>
		<a class="btn btn-primary" href={instagram.url} rel="noopener" target="_blank">
			<Icon name="instagram" />
			Order on Instagram<span class="visually-hidden"> (opens in a new tab)</span>
		</a>
	</div>
</header>

{#each categories as category (category.id)}
	<section class="section flavors {category.id}" aria-labelledby="{category.id}-title" id={category.id}>
		<div class="container">
			<div class="section-head">
				<p class="eyebrow"><Bow size={24} /> {category.name}</p>
				<h2 id="{category.id}-title">{category.heading}</h2>
				<p>{category.blurb}</p>
			</div>
			<ul class="flavor-grid" role="list">
				{#each flavorsIn(category.id) as flavor (flavor.slug)}
					<li><FlavorCard {flavor} /></li>
				{/each}
			</ul>
		</div>
	</section>
{/each}

<section class="section ordering" id="ordering" aria-labelledby="ordering-title">
	<div class="container">
		<div class="order-panel plaid">
			<div class="order-card">
				<div class="section-head">
					<p class="eyebrow"><Bow size={24} /> Ordering</p>
					<h2 id="ordering-title">Good to know before you order</h2>
				</div>
				<ul class="info" role="list">
					<li>
						<Icon name="cookie" size={26} />
						<div>
							<h3>Minimum order</h3>
							<p>{ordering.minimumCookies} cookies. Mix and match flavors.</p>
						</div>
					</li>
					<li>
						<Icon name="calendar" size={26} />
						<div>
							<h3>Lead time</h3>
							<p>Order at least {ordering.leadTimeHours} hours ahead.</p>
						</div>
					</li>
					<li>
						<Icon name="bag" size={26} />
						<div>
							<h3>Pickup</h3>
							<p>Local pickup only. We’ll set your pickup time when you order.</p>
						</div>
					</li>
					<li>
						<Icon name="clock" size={26} />
						<div>
							<h3>Hours</h3>
							<p>
								{#each hours as h, i (h.label)}
									<span class="nowrap"
										>{h.label}:
										{#if h.closed}Closed{:else}<time datetime={h.opens}>{h.display?.opens}</time>–<time
												datetime={h.closes}>{h.display?.closes}</time
											>{/if}</span
									>{#if i < hours.length - 1}<br />{/if}
								{/each}
							</p>
						</div>
					</li>
				</ul>
				<h3 class="pricing-title">Pricing</h3>
				<Pricing headingLevel={4} />
				<div class="order-cta">
					<a class="btn btn-primary" href={instagram.url} rel="noopener" target="_blank">
						<Icon name="instagram" />
						Message {instagram.handle}<span class="visually-hidden"> on Instagram (opens in a new tab)</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section faq" id="faq" aria-labelledby="faq-title">
	<div class="container faq-grid">
		<div class="section-head">
			<p class="eyebrow"><Bow size={24} /> FAQ</p>
			<h2 id="faq-title">Questions, answered</h2>
			<TeddyBear size={96} bow class="faq-bear" />
		</div>
		<div class="faq-list">
			{#each faq as item (item.q)}
				<div class="faq-item">
					<h3>{item.q}</h3>
					<p>{item.a}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* ---------- Page header ---------- */
	.page-head {
		padding-block: clamp(2rem, 5vw, 3.5rem) clamp(2.5rem, 6vw, 4rem);
		background:
			radial-gradient(50rem 24rem at 90% 0%, var(--blush), transparent 70%),
			var(--cream);
	}

	.crumbs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-bottom: 1.25rem;
		font-size: 0.9375rem;
		font-weight: 700;
		color: var(--cocoa-soft);
	}

	.crumbs li + li::before {
		content: '/';
		margin-right: 0.4rem;
		color: var(--rose-deep);
	}

	.crumbs a {
		color: var(--cocoa-soft);
	}

	.page-head .lede {
		max-width: 36rem;
		margin-block: 1rem 1.75rem;
	}

	/* ---------- Flavor sections ---------- */
	.flavors {
		padding-top: clamp(2.5rem, 6vw, 4rem);
	}

	.rotating {
		background: var(--blush);
		padding-top: var(--section);
	}

	.flavor-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 1fr));
		gap: clamp(1rem, 2.5vw, 1.75rem);
	}

	/* ---------- Ordering ---------- */
	.order-panel {
		padding: clamp(0.75rem, 3vw, 2rem);
		border-radius: var(--radius-lg);
	}

	.order-card {
		padding: clamp(1.5rem, 5vw, 3.5rem);
		border-radius: calc(var(--radius-lg) - 0.5rem);
		background: var(--cream);
		box-shadow: var(--shadow-lg);
	}

	.info {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 12rem), 1fr));
		gap: 1.75rem 2rem;
		margin-bottom: 3rem;
	}

	.info li {
		display: flex;
		gap: 0.9rem;
		align-items: flex-start;
	}

	.info :global(.icon) {
		margin-top: 0.1rem;
		color: var(--rose-ink);
	}

	.info h3 {
		font-size: 1.15rem;
	}

	.info p {
		margin-top: 0.25rem;
		color: var(--cocoa-soft);
	}

	.pricing-title {
		margin-bottom: 1.25rem;
	}

	.order-cta {
		margin-top: 2rem;
	}

	.nowrap {
		white-space: nowrap;
	}

	/* ---------- FAQ ---------- */
	.faq {
		padding-top: 0;
	}

	.faq-grid {
		display: grid;
		gap: 1rem 4rem;
	}

	@media (min-width: 56rem) {
		.faq-grid {
			grid-template-columns: 1fr 2fr;
			align-items: start;
		}

		.faq-grid .section-head {
			position: sticky;
			top: calc(var(--header-h) + 2rem);
		}
	}

	.faq-grid :global(.faq-bear) {
		margin-top: 2rem;
		rotate: -8deg;
	}

	@media (max-width: 55.99rem) {
		.faq-grid :global(.faq-bear) {
			display: none;
		}
	}

	.faq-list {
		display: grid;
		gap: 0.75rem;
	}

	.faq-item {
		padding: 1.25rem 1.5rem 1.35rem;
		border-radius: var(--radius);
		background: var(--paper);
		box-shadow: var(--shadow-sm);
		border: 1.5px solid rgb(138 95 71 / 0.1);
	}

	.faq-item h3 {
		font-size: 1.2rem;
	}

	.faq-item p {
		margin-top: 0.4rem;
		color: var(--cocoa-soft);
	}
</style>
