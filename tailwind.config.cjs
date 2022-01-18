const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
      spacing: {
        '128': '32rem',
      },
			colors: {
        'regal-blue': '#243c5a',
				'theme-dark-blue': 'hsl(238, 29%, 16%)',
				'theme-gray-blue': 'hsl(240, 6%, 50%)',
				'theme-dark-gray-blue': 'hsl(237, 12%, 33%)',
				'theme-red': 'hsl(14, 88%, 65%)',
				'theme-violet': 'hsl(273, 75%, 66%)',
				'theme-blue': 'hsl(240, 73%, 65%)',
				'theme-light-gray-blue': 'hsl(240, 5%, 91%)',
      },
    }
	},

	plugins: []
};

module.exports = config;
