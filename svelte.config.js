import path from 'path';
import sveltePreprocess from 'svelte-preprocess';
import makeAttractionsImporter from 'attractions/importer.js';

const config = {
	kit: {
		target: '#svelte'
	},

	preprocess: sveltePreprocess({
		scss: {
			importer: makeAttractionsImporter({
				themeFile: path.join(path.resolve(), 'src/lib/styles/theme.scss')
			}),
			includePaths: [path.join(path.resolve(), 'src/lib/styles')]
		}
	})
};

export default config;
