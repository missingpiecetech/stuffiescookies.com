<script>
	import { page } from '$app/state';
	import { site, instagram } from '$lib/data/business.js';
	import TeddyBear from './TeddyBear.svelte';
	import Icon from './Icon.svelte';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/flavors', label: 'Flavors' },
		{ href: '/flavors#faq', label: 'FAQ' }
	];

	const isCurrent = (/** @type {string} */ href) => !href.includes('#') && page.url.pathname === href;
</script>

<header class="site-header">
	<div class="container bar">
		<a class="brand" href="/" aria-label="{site.name} home">
			<TeddyBear size={40} bow />
			<span class="wordmark">Stuffie’s <span>Cookies</span></span>
		</a>

		<nav aria-label="Main">
			<ul role="list">
				{#each links as link (link.href)}
					<li class:home={link.href === '/'}>
						<a href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<a class="btn btn-primary btn-sm order" href={instagram.url} rel="noopener" target="_blank">
			<Icon name="instagram" size={18} />
			Order<span class="visually-hidden"> on Instagram (opens in a new tab)</span>
		</a>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgb(253 246 240 / 0.88);
		backdrop-filter: saturate(1.4) blur(12px);
		-webkit-backdrop-filter: saturate(1.4) blur(12px);
		border-bottom: 1px solid rgb(138 95 71 / 0.14);
	}

	.bar {
		display: flex;
		align-items: center;
		gap: clamp(0.5rem, 2vw, 1.5rem);
		min-height: var(--header-h);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--cocoa);
		text-decoration: none;
		margin-right: auto;
		border-radius: 999px;
	}

	.brand :global(.bear) {
		transition: transform 250ms ease;
	}

	.brand:hover :global(.bear) {
		transform: rotate(-8deg);
	}

	.wordmark {
		font-family: var(--font-display);
		font-variation-settings: 'SOFT' 100;
		font-size: 1.3rem;
		font-weight: 650;
		letter-spacing: -0.02em;
		line-height: 1;
		white-space: nowrap;
	}

	.wordmark span {
		color: var(--rose-ink);
	}

	ul {
		display: flex;
		gap: 0.25rem;
	}

	nav a {
		display: inline-flex;
		align-items: center;
		min-height: 2.5rem;
		padding: 0.4rem 0.85rem;
		border-radius: 999px;
		color: var(--cocoa);
		font-weight: 700;
		text-decoration: none;
		transition: background-color 160ms ease;
	}

	nav a:hover {
		background: var(--blush);
		color: var(--cocoa);
	}

	nav a[aria-current='page'] {
		background: var(--blush);
		box-shadow: inset 0 0 0 1.5px var(--pink);
	}

	@media (max-width: 40rem) {
		.wordmark {
			font-size: 1.125rem;
		}

		.wordmark span {
			display: block;
			font-size: 0.85em;
		}

		.home,
		nav li:last-child {
			display: none;
		}

		nav a {
			padding-inline: 0.6rem;
			font-size: 0.9375rem;
		}
	}
</style>
