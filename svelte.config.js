import path from 'path';
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import makeAttractionsImporter from 'attractions/importer.js';

const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte'
	},

	preprocess: preprocess({
		scss: {
			importer: makeAttractionsImporter({
				themeFile: path.join(path.resolve(), 'src/lib/styles/theme.scss')
			}),
			includePaths: [path.join(path.resolve(), 'src/lib/styles')]
		}
	})
};

export default config;
