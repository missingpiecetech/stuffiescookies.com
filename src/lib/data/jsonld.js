import {
	site,
	instagram,
	pricing,
	currency,
	hours,
	categories,
	flavorsIn,
	faq
} from './business.js';

const abs = (/** @type {string} */ path) => new URL(path, site.url).href;

export const ids = {
	bakery: `${site.url}/#bakery`,
	website: `${site.url}/#website`,
	menu: `${site.url}/flavors#menu`
};

export function bakery() {
	return {
		'@type': 'Bakery',
		'@id': ids.bakery,
		name: site.name,
		url: `${site.url}/`,
		description: site.description,
		logo: abs(site.logo),
		image: [abs(site.ogImage.src), abs('/images/cookies-tray-1440.webp')],
		sameAs: [instagram.url],
		servesCuisine: ['Cookies', 'Desserts'],
		priceRange: `$${Math.min(...pricing.map((p) => p.price))}–$${Math.max(...pricing.map((p) => p.price))}`,
		currenciesAccepted: currency,
		openingHoursSpecification: hours
			.filter((h) => !h.closed)
			.map((h) => ({
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
				opens: h.opens,
				closes: h.closes
			})),
		makesOffer: pricing.map((p) => ({
			'@type': 'Offer',
			name: p.name,
			description: p.detail,
			price: p.price.toFixed(2),
			priceCurrency: currency,
			availability: 'https://schema.org/PreOrder',
			url: instagram.url,
			itemOffered: {
				'@type': 'Product',
				name: `${p.name} of cookies`,
				description: p.detail
			}
		})),
		hasMenu: { '@id': ids.menu }
	};
}

export function menu() {
	return {
		'@type': 'Menu',
		'@id': ids.menu,
		name: `${site.name} flavors`,
		url: abs('/flavors'),
		hasMenuSection: categories.map((c) => ({
			'@type': 'MenuSection',
			name: `${c.name} flavors`,
			description: c.blurb,
			hasMenuItem: flavorsIn(c.id).map((f) => ({
				'@type': 'MenuItem',
				name: f.name,
				description: f.description,
				...(f.photo ? { image: abs(f.photo.src) } : {})
			}))
		}))
	};
}

export function website() {
	return {
		'@type': 'WebSite',
		'@id': ids.website,
		url: `${site.url}/`,
		name: site.name,
		description: site.description,
		inLanguage: 'en',
		publisher: { '@id': ids.bakery }
	};
}

/** Site-wide graph: the bakery, its menu and the website. */
export function siteGraph() {
	return {
		'@context': 'https://schema.org',
		'@graph': [bakery(), menu(), website()]
	};
}

export function faqPage(/** @type {string} */ path) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		url: abs(path),
		mainEntity: faq.map(({ q, a }) => ({
			'@type': 'Question',
			name: q,
			acceptedAnswer: { '@type': 'Answer', text: a }
		}))
	};
}

export function breadcrumbs(/** @type {{name: string, path: string}[]} */ items) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: abs(item.path)
		}))
	};
}

/** Serialise for a <script type="application/ld+json"> tag, escaping "<" so content can't close the tag. */
export function ldScript(/** @type {object} */ data) {
	const json = JSON.stringify(data).replace(/</g, '\\u003c');
	return `<script type="application/ld+json">${json}</script>`;
}
