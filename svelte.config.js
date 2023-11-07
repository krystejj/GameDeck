import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
        csp: {
            directives: {
                'default-src': [ 'self' ]
            }
        }
	},
	preprocess: vitePreprocess(),
};

export default config;
