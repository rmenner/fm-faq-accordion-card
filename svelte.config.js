import preprocess from 'svelte-preprocess';
import adapterGhpages from "svelte-adapter-ghpages";

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapterGhpages({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
		}),

		paths: {
			base: dev ? '' : '/fm-faq-accordion-card',
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

	preprocess: [preprocess({})]
};

export default config;
