import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Deployed to Cloudflare Pages via git integration (build output: .svelte-kit/cloudflare).
		// Every route is prerendered (see src/routes/+layout.js).
		adapter: adapter()
	}
};

export default config;
