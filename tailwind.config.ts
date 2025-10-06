import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"hv-beige-1": "#e3e2dd",
				"hv-beige-2": "#e4e3de",
				"hv-beige-3": "#dfd1c4",
				"hv-beige-4": "#e0d2c5",
				"hv-beige-5": "#e0d2c7",
				"hv-beige-6": "#e1d3c8",
				"hv-gold": "#c7a35e",
				"hv-green": "#a9c2a3",
				"hv-green-dark": "#8fa98f",
			},
		},
	},

	plugins: [],
};
export default config;
