/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", "system-ui", "sans-serif"],
				serif: ["var(--font-playfair)", "Georgia", "serif"],
			},
			colors: {
				brand: {
					50: "#FFF5F7",
					100: "#FFE8ED",
					200: "#FFD0DB",
					300: "#FFa3B8",
					400: "#FF6B8A",
					500: "#E84570",
					600: "#C4284F",
					700: "#9E1D3D",
					800: "#7A1730",
					900: "#5C1226",
				},
				warm: {
					50: "#FFFBF5",
					100: "#FFF3E0",
					200: "#FFE0B2",
					300: "#FFCC80",
					400: "#FFB74D",
					500: "#FFA726",
					600: "#FB8C00",
				},
				midnight: {
					50: "#f5f5f7",
					100: "#e8e8ed",
					200: "#d1d1db",
					300: "#a9a9b8",
					400: "#76768a",
					500: "#55556a",
					600: "#3d3d52",
					700: "#2a2a3d",
					800: "#1a1a2e",
					900: "#0f0f1a",
					950: "#080812",
				},
			},
			animation: {
				"fade-in": "fadeIn 0.8s ease-out forwards",
				"fade-in-up": "fadeInUp 0.8s ease-out forwards",
				"scale-left": "scaleLeft 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both",
				"glow-pulse": "glowPulse 3s ease-in-out infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				scaleLeft: {
					"0%": { transform: "scaleX(0.4)", transformOrigin: "0% 0%" },
					"100%": { transform: "scaleX(1)", transformOrigin: "0% 0%" },
				},
				glowPulse: {
					"0%, 100%": { boxShadow: "0 0 20px rgba(232, 69, 112, 0.3)" },
					"50%": { boxShadow: "0 0 40px rgba(232, 69, 112, 0.6)" },
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
