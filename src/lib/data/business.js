// Single source of truth for business facts, flavors and FAQ.
// Pages, JSON-LD, /llms.txt and /sitemap.xml all read from here so they stay consistent.

export const site = {
	url: 'https://stuffiescookies.com',
	name: "Stuffie's Cookies",
	tagline: 'Big, chewy cookies, baked to order.',
	description:
		"Stuffie's Cookies is a home bakery making big, chewy cookies to order in classic and rotating flavors. Order by the dozen on Instagram for local pickup.",
	locale: 'en_US',
	themeColor: '#fdf6f0',
	logo: '/favicon.svg',
	ogImage: {
		src: '/images/og-cookies.jpg',
		width: 1200,
		height: 630,
		alt: 'A baking tray of big, chewy cookies, some topped with toasted marshmallow'
	}
};

export const instagram = {
	handle: '@blubeaar2',
	url: 'https://www.instagram.com/blubeaar2/'
};

export const ordering = {
	minimumCookies: 12,
	leadTimeHours: 72,
	maxMixFlavors: 3,
	pickupOnly: true
};

/** Prices are in US dollars. */
export const pricing = [
	{
		id: 'bakers-dozen',
		name: "Baker's dozen",
		price: 30,
		count: 13,
		detail: '13 cookies, single flavor'
	},
	{
		id: 'mix-and-match-dozen',
		name: 'Mix-and-match dozen',
		price: 39,
		count: 12,
		detail: '12 cookies, up to 3 flavors'
	}
];

export const currency = 'USD';

export const hours = [
	{
		label: 'Monday – Friday',
		days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		opens: '09:00',
		closes: '18:00',
		display: { opens: '9am', closes: '6pm' }
	},
	{
		label: 'Saturday',
		days: ['Saturday'],
		opens: '10:00',
		closes: '16:00',
		display: { opens: '10am', closes: '4pm' }
	},
	{
		label: 'Sunday',
		days: ['Sunday'],
		closed: true
	}
];

/** @param {string} slug */
function photo(slug) {
	return {
		src: `/images/${slug}-800.webp`,
		srcset: `/images/${slug}-480.webp 480w, /images/${slug}-800.webp 800w`,
		width: 800,
		height: 800
	};
}

export const categories = [
	{
		id: 'classic',
		name: 'Classic',
		heading: 'The classics',
		blurb: 'On the menu all year.'
	},
	{
		id: 'rotating',
		name: 'Rotating',
		heading: 'Rotating flavors',
		blurb: 'These come and go. Here’s what’s in rotation now.'
	}
];

export const flavors = [
	{
		slug: 'chocolate-chip',
		name: 'Chocolate Chip',
		category: 'classic',
		description: 'The classic, done big: chewy and loaded with melty chocolate.',
		photo: photo('chocolate-chip'),
		alt: 'A chocolate chip cookie with pools of melted chocolate'
	},
	{
		slug: 'red-velvet-cake',
		name: 'Red Velvet Cake',
		category: 'classic',
		description: 'Red velvet cake in cookie form: deep red, a touch of cocoa, studded with white chips.',
		photo: photo('red-velvet'),
		alt: 'A deep red velvet cookie studded with white chocolate chips'
	},
	{
		slug: 'cookies-and-cream',
		name: 'Cookies and Cream',
		category: 'classic',
		description: 'Packed with crushed chocolate cookie pieces and white chocolate chips.',
		photo: photo('cookies-and-cream'),
		alt: 'A cookies and cream cookie flecked with dark cookie pieces'
	},
	{
		slug: 'peanut-butter',
		name: 'Peanut Butter',
		category: 'classic',
		description: 'Rich peanut butter flavor in a soft, chewy cookie.',
		photo: null,
		alt: ''
	},
	{
		slug: 'birthday-cake',
		name: 'Birthday Cake',
		category: 'classic',
		description: 'A vanilla cookie loaded with rainbow sprinkles. A party in every bite.',
		photo: null,
		alt: ''
	},
	{
		slug: 'ube',
		name: 'Ube',
		category: 'rotating',
		description: 'Filipino purple yam, with a warm, mellow flavor and a vivid purple color.',
		photo: null,
		alt: ''
	},
	{
		slug: 'matcha',
		name: 'Matcha',
		category: 'rotating',
		description: 'Earthy Japanese green tea matcha with creamy white chocolate chips.',
		photo: photo('matcha'),
		alt: 'A green matcha cookie studded with white chocolate chips'
	}
];

/** @param {string} category */
export const flavorsIn = (category) => flavors.filter((f) => f.category === category);

const rotatingNames = flavorsIn('rotating').map((f) => f.name);
const [bakersDozen, mixDozen] = pricing;

/** Human-readable list: ["a","b","c"] -> "a, b and c" */
export function listOf(/** @type {string[]} */ items) {
	if (items.length < 2) return items.join('');
	return `${items.slice(0, -1).join(', ')} and ${items.at(-1)}`;
}

export const hoursSentence = (() => {
	const open = hours.filter((h) => !h.closed);
	const closed = hours.filter((h) => h.closed);
	const parts = open.map((h) => `${h.label.replace(' – ', ' to ')} ${h.display?.opens}–${h.display?.closes}`);
	return `${listOf(parts)}. Closed ${listOf(closed.map((h) => h.label))}.`;
})();

/** Visible FAQ on /flavors; the FAQPage JSON-LD is generated from the same strings. */
export const faq = [
	{
		q: 'How do I order?',
		a: `Send us a message on Instagram at ${instagram.handle} with the flavors you’d like and when you’d like to pick them up.`
	},
	{
		q: 'Is there a minimum order?',
		a: `Yes. Orders start at ${ordering.minimumCookies} cookies, and you can mix and match flavors.`
	},
	{
		q: 'How far ahead should I order?',
		a: `Please order at least ${ordering.leadTimeHours} hours before you’d like to pick up. We’ll confirm your pickup time when you order.`
	},
	{
		q: 'How much are the cookies?',
		a: `$${bakersDozen.price} for a baker’s dozen (${bakersDozen.count} cookies) in a single flavor, or $${mixDozen.price} for a dozen with up to ${ordering.maxMixFlavors} flavors.`
	},
	{
		q: 'Can I mix and match flavors?',
		a: `Yes. A mix-and-match dozen can include up to ${ordering.maxMixFlavors} different flavors.`
	},
	{
		q: 'Do you deliver?',
		a: 'All orders are local pickup only. We’ll set a pickup time with you when you place your order.'
	},
	{
		q: 'When can I pick up?',
		a: `Pickup hours are ${hoursSentence}`
	},
	{
		q: 'What are rotating flavors?',
		a: `Flavors that come and go alongside the classics. Right now that’s ${listOf(rotatingNames)}.`
	}
];

export const nav = [
	{ href: '/', label: 'Home' },
	{ href: '/flavors', label: 'Flavors' },
	{ href: '/flavors#ordering', label: 'How to order' }
];
