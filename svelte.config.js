import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		}),
	],

	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: null,
			strict: true
		}),

		appDir: 'internal',

		/*
		paths: {
			base: dev ? '' : 'https://zrgio.github.io/resume-site'
		}
		*/
	},
};

export default config;
