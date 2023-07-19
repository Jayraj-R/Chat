/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			white: '#FBFDFF',
			black: '#14181D',
			'blue-light': '#C1D2DF',
			gray: '#a6acb1',
			'gray-light': '#C3CED3',
			'gray-dark': '#3d4347',
			'brown-golden': '#cb8000',
			'brown-light': '#ffb544',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {},
	},
	plugins: [],
};
