import animations from '@midudev/tailwind-animations'
const plugin = require('tailwindcss/plugin')
const backfaceVisibility = plugin(function({addUtilities}) {
	addUtilities({
	  '.backface-visible': {
		'backface-visibility': 'visible',
	  },
	  '.backface-hidden': {
		'backface-visibility': 'hidden',
	  }
	})
  });

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [animations, backfaceVisibility],
}
