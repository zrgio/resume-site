const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'raleway': 'Raleway',
			},
			spacing: {
				'104': '28rem',
				'128': '32rem',
			},
		},
	},

	plugins: [],
};

module.exports = config;
