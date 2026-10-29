<script>
	import Seo from '$lib/components/Seo.svelte';
	import Bow from '$lib/components/Bow.svelte';
	import TeddyBear from '$lib/components/TeddyBear.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import FlavorCard from '$lib/components/FlavorCard.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import { site, instagram, ordering, flavors, flavorsIn, hours } from '$lib/data/business.js';

	const featured = flavors.filter((f) => f.photo);
	const classicCount = flavorsIn('classic').length;
	const rotatingCount = flavorsIn('rotating').length;
	const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
	const cap = (/** @type {string} */ s) => s[0].toUpperCase() + s.slice(1);

	/** @type {HTMLVideoElement | undefined} */
	let video = $state();
	let showControls = $state(false);

	$effect(() => {
		if (!video) return;
		const query = window.matchMedia('(prefers-reduced-motion: reduce)');
		const apply = () => {
			if (!video) return;
			showControls = query.matches;
			if (query.matches) video.pause();
			else video.play().catch(() => {});
		};
		apply();
		query.addEventListener('change', apply);
		return () => query.removeEventListener('change', apply);
	});
</script>

<Seo
	title="{site.name} | Big, chewy cookies, baked to order"
	description="Big, chewy cookies in classic and rotating flavors, baked to order. Order a dozen on Instagram at {instagram.handle} for local pickup."
	path="/"
/>

<section class="hero" aria-labelledby="hero-title">
	<div class="container hero-grid">
		<div class="hero-copy">
			<p class="eyebrow"><Bow size={28} /> Home-baked · Local pickup</p>
			<h1 id="hero-title">Big, chewy cookies, <span class="accent">baked to order.</span></h1>
			<p class="lede">
				Classic and rotating flavors, baked fresh for every order and ready for pickup.
			</p>
			<div class="actions">
				<a class="btn btn-primary" href={instagram.url} rel="noopener" target="_blank">
					<Icon name="instagram" />
					Order on Instagram<span class="visually-hidden"> (opens in a new tab)</span>
				</a>
				<a class="btn btn-secondary" href="/flavors">
					See the flavors
					<Icon name="arrow" size={18} />
				</a>
			</div>
			<ul class="facts" role="list">
				<li><Icon name="cookie" size={18} />{ordering.minimumCookies}-cookie minimum</li>
				<li><Icon name="calendar" size={18} />Order {ordering.leadTimeHours} hours ahead</li>
				<li><Icon name="bag" size={18} />Local pickup</li>
			</ul>
		</div>

		<div class="hero-media">
			<div class="frame plaid">
				<img
					src="/images/cookies-tray-1440.webp"
					srcset="/images/cookies-tray-800.webp 800w, /images/cookies-tray-1440.webp 1440w"
					sizes="(min-width: 60rem) 34rem, 92vw"
					width="1440"
					height="992"
					alt="A baking tray of big, chewy cookies, some topped with toasted marshmallow"
					fetchpriority="high"
					decoding="async"
				/>
			</div>
			<Bow size={88} class="hero-bow" />
			<TeddyBear size={84} class="hero-bear" />
		</div>
	</div>
</section>

<section class="section menu" aria-labelledby="menu-title">
	<div class="container">
		<div class="section-head">
			<p class="eyebrow"><Bow size={24} /> The menu</p>
			<h2 id="menu-title">
				{cap(words[classicCount])} classics, {words[rotatingCount]} in rotation.
			</h2>
			<p>Every one is big, chewy and baked fresh to order.</p>
		</div>
		<ul class="flavor-grid" role="list">
			{#each featured as flavor (flavor.slug)}
				<li><FlavorCard {flavor} sizes="(min-width: 72rem) 17rem, (min-width: 40rem) 45vw, 92vw" /></li>
			{/each}
		</ul>
		<p class="more">
			<a class="btn btn-secondary" href="/flavors">
				See all {flavors.length} flavors
				<Icon name="arrow" size={18} />
			</a>
		</p>
	</div>
</section>

<section class="section how" aria-labelledby="how-title">
	<div class="container how-grid">
		<div>
			<div class="section-head">
				<p class="eyebrow"><Bow size={24} /> How to order</p>
				<h2 id="how-title">Three steps to a box of cookies</h2>
			</div>
			<ol class="steps" role="list">
				<li>
					<span class="step-num" aria-hidden="true">1</span>
					<div>
						<h3>Pick your flavors</h3>
						<p>Go all in on one, or mix and match up to {ordering.maxMixFlavors} in a dozen.</p>
					</div>
				</li>
				<li>
					<span class="step-num" aria-hidden="true">2</span>
					<div>
						<h3>Message us on Instagram</h3>
						<p>
							DM <a href={instagram.url} rel="noopener" target="_blank">{instagram.handle}</a> at least
							{ordering.leadTimeHours} hours before pickup.
						</p>
					</div>
				</li>
				<li>
					<span class="step-num" aria-hidden="true">3</span>
					<div>
						<h3>Pick up fresh</h3>
						<p>We’ll set a pickup time together. Local pickup only.</p>
					</div>
				</li>
			</ol>
		</div>
		<div class="pricing">
			<h3 class="pricing-title">Pricing</h3>
			<Pricing headingLevel={4} />
			<p class="minimum">Minimum order {ordering.minimumCookies} cookies.</p>
		</div>
	</div>
</section>

<section class="section story" aria-labelledby="story-title">
	<div class="container story-grid">
		<div class="video-frame">
			<video
				bind:this={video}
				src="/stuffiescookies.mp4"
				poster="/images/video-poster.webp"
				width="854"
				height="480"
				preload="metadata"
				autoplay
				muted
				loop
				playsinline
				controls={showControls}
				aria-label="A box of assorted Stuffie’s cookies"
			></video>
			<Bow size={64} class="video-bow" />
		</div>
		<div>
			<p class="eyebrow"><Bow size={24} /> About</p>
			<h2 id="story-title">Baked fresh, every order</h2>
			<p class="lede">
				Stuffie’s Cookies is a home bakery with one specialty: big, chewy cookies worth the wait. Every order
				is baked fresh, boxed up and ready for you to pick up.
			</p>
		</div>
	</div>
</section>

<section class="section cta" aria-labelledby="cta-title">
	<div class="container">
		<div class="cta-panel plaid">
			<div class="cta-card">
				<TeddyBear size={72} bow />
				<h2 id="cta-title">Ready for a dozen?</h2>
				<p>Send us your flavors and pickup day on Instagram.</p>
				<a class="btn btn-primary" href={instagram.url} rel="noopener" target="_blank">
					<Icon name="instagram" />
					Order on Instagram<span class="visually-hidden"> (opens in a new tab)</span>
				</a>
				<ul class="hours" role="list">
					{#each hours as h (h.label)}
						<li>
							{h.label}
							{#if h.closed}closed{:else}<time datetime={h.opens}>{h.display?.opens}</time>–<time
									datetime={h.closes}>{h.display?.closes}</time
								>{/if}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	/* ---------- Hero ---------- */
	.hero {
		position: relative;
		overflow: hidden;
		padding-block: clamp(2.5rem, 7vw, 5.5rem) clamp(3.5rem, 8vw, 6rem);
		background:
			radial-gradient(60rem 30rem at 85% 10%, var(--blush), transparent 70%),
			var(--cream);
	}

	.hero-grid {
		display: grid;
		gap: clamp(2.5rem, 6vw, 4rem);
		align-items: center;
	}

	@media (min-width: 60rem) {
		.hero-grid {
			grid-template-columns: 1.05fr 1fr;
		}
	}

	h1 {
		max-width: 13ch;
	}

	.accent {
		color: var(--rose-ink);
	}

	.hero .lede {
		max-width: 30rem;
		margin-top: 1.25rem;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 2rem;
	}

	.facts {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.25rem;
		margin-top: 1.75rem;
		font-size: 0.9375rem;
		font-weight: 700;
		color: var(--cocoa-soft);
	}

	.facts li {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
	}

	.facts :global(.icon) {
		color: var(--rose-ink);
	}

	.hero-media {
		position: relative;
		max-width: 36rem;
		margin-inline: auto;
		width: 100%;
	}

	.frame {
		padding: clamp(0.75rem, 2vw, 1.25rem);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		transform: rotate(1.5deg);
	}

	.frame img {
		width: 100%;
		border-radius: calc(var(--radius-lg) - 0.75rem);
	}

	.hero-media :global(.hero-bow) {
		position: absolute;
		top: -1.6rem;
		left: 50%;
		translate: -50% 0;
		rotate: -4deg;
		filter: drop-shadow(0 4px 6px rgb(74 49 40 / 0.18));
	}

	.hero-media :global(.hero-bear) {
		position: absolute;
		right: -0.5rem;
		bottom: -2rem;
		filter: drop-shadow(0 6px 10px rgb(74 49 40 / 0.2));
		rotate: -10deg;
	}

	@media (max-width: 40rem) {
		.hero-media :global(.hero-bear svg) {
			width: 64px;
			height: 64px;
		}

		.hero-media :global(.hero-bow) {
			width: 64px;
			height: 42px;
			top: -1.2rem;
		}
	}

	/* ---------- Menu ---------- */
	.flavor-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
		gap: clamp(1rem, 2.5vw, 1.75rem);
	}

	.more {
		margin-top: 2.5rem;
		text-align: center;
	}

	/* ---------- How to order ---------- */
	.how {
		background: var(--blush);
	}

	.how-grid {
		display: grid;
		gap: 3rem;
		align-items: start;
	}

	@media (min-width: 60rem) {
		.how-grid {
			grid-template-columns: 1.1fr 1fr;
			gap: 4rem;
		}

		.pricing {
			margin-top: 7.5rem;
		}
	}

	.steps {
		display: grid;
		gap: 1.5rem;
	}

	.steps li {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.step-num {
		display: grid;
		place-items: center;
		flex: none;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 50%;
		background: var(--paper);
		box-shadow: var(--shadow-sm);
		font-family: var(--font-display);
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--rose-ink);
	}

	.steps p {
		margin-top: 0.25rem;
		color: var(--cocoa-soft);
	}

	.pricing-title {
		margin-bottom: 1.25rem;
	}

	.minimum {
		margin-top: 1rem;
		font-weight: 700;
		color: var(--cocoa-soft);
	}

	/* ---------- Story ---------- */
	.story-grid {
		display: grid;
		gap: clamp(2.5rem, 6vw, 4.5rem);
		align-items: center;
	}

	@media (min-width: 52rem) {
		.story-grid {
			grid-template-columns: 1.1fr 1fr;
		}
	}

	.story .lede {
		margin-top: 1rem;
		max-width: 32rem;
	}

	.video-frame {
		position: relative;
		border: 0.6rem solid var(--paper);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		transform: rotate(-1.25deg);
		background: var(--paper);
	}

	video {
		width: 100%;
		aspect-ratio: 854 / 480;
		object-fit: cover;
		border-radius: calc(var(--radius-lg) - 0.6rem);
		background: var(--latte);
	}

	.video-frame :global(.video-bow) {
		position: absolute;
		top: -1.5rem;
		left: -1.25rem;
		rotate: -22deg;
		filter: drop-shadow(0 4px 6px rgb(74 49 40 / 0.18));
	}

	/* ---------- CTA ---------- */
	.cta {
		padding-top: 0;
	}

	.cta-panel {
		padding: clamp(1rem, 4vw, 2.5rem);
		border-radius: var(--radius-lg);
	}

	.cta-card {
		display: grid;
		justify-items: center;
		gap: 0.9rem;
		max-width: 36rem;
		margin-inline: auto;
		padding: clamp(2rem, 6vw, 3.25rem) clamp(1.25rem, 4vw, 3rem);
		border-radius: calc(var(--radius-lg) - 0.5rem);
		background: var(--cream);
		box-shadow: var(--shadow-lg);
		text-align: center;
	}

	.cta-card p {
		color: var(--cocoa-soft);
		font-size: 1.125rem;
	}

	.cta-card .btn {
		margin-top: 0.5rem;
	}

	.hours {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.25rem 0;
		margin-top: 0.5rem;
		font-size: 0.9375rem;
		font-weight: 600;
		color: var(--cocoa-soft);
	}

	.hours li {
		white-space: nowrap;
	}

	.hours li + li::before {
		content: '·';
		margin-inline: 0.5rem;
		color: var(--rose-deep);
	}
</style>
