import {
	site,
	instagram,
	ordering,
	pricing,
	categories,
	flavorsIn,
	hours,
	faq
} from '$lib/data/business.js';

export const prerender = true;

const abs = (/** @type {string} */ path) => new URL(path, site.url).href;

export function GET() {
	const menu = categories
		.map((c) => {
			const items = flavorsIn(c.id)
				.map((f) => `- ${f.name}: ${f.description}`)
				.join('\n');
			return `### ${c.name} flavors\n\n${c.blurb}\n\n${items}`;
		})
		.join('\n\n');

	const prices = pricing.map((p) => `- $${p.price}: ${p.name} (${p.detail})`).join('\n');

	const hourLines = hours
		.map((h) => `- ${h.label}: ${h.closed ? 'Closed' : `${h.display?.opens}–${h.display?.closes}`}`)
		.join('\n');

	const faqLines = faq.map((f) => `- ${f.q} ${f.a}`).join('\n');

	const body = `# ${site.name}

> ${site.description}

${site.name} is a home bakery. Cookies are baked to order and available for local pickup only (no delivery). Orders are placed by direct message on Instagram at ${instagram.handle}.

## Ordering

- Order by Instagram DM: [${instagram.handle}](${instagram.url})
- Minimum order: ${ordering.minimumCookies} cookies, mix and match flavors
- Lead time: order at least ${ordering.leadTimeHours} hours before pickup
- Pickup: local pickup only; the pickup time is arranged when you order

## Pricing (USD)

${prices}

## Flavors

${menu}

## Hours

${hourLines}

## FAQ

${faqLines}

## Links

- [Home](${abs('/')}): overview, how ordering works, pricing
- [Flavors](${abs('/flavors')}): full flavor menu, ordering details and FAQ
- [Instagram ${instagram.handle}](${instagram.url}): place an order, see the latest bakes
`;

	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
