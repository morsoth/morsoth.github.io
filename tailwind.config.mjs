/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				black: "#18181a",
				gray: "#2d3539",
				white: "#ebf9ff",
				beige: "#d5d2c7",
				olive: "#757873",
				blue: "#6095af",
			},
			fontFamily: {
				montserrat: ["Montserrat Variable", "sans-serif"],
			},
			boxShadow: {
				"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.5)",
				"glow": "0px 0px 10px 1px rgba(235,249,255,0.5);",
				"inner-xl": "inset 0 0 10px rgba(0, 0, 0, 0.5)",
			}
		},
	},
	plugins: [],
}
