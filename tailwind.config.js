/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		theme: {
			extend: {
				backgroundImage: {
					womanImg: "url('/assets/Mujer .png')",
					'footer-texture': "url('/img/footer-texture.png')"
				}
			}
		}
	},
	plugins: []
};
