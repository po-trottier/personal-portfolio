import preprocess from 'svelte-preprocess';

const config = {
	kit: {
		target: '#svelte'
	},

	preprocess: preprocess()
};

export default config;
