import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Earthy, nature-inspired palette honoring elder wisdom
        terraCotta: {
          50: '#fef6f3',
          100: '#fdeae2',
          200: '#fad2c4',
          300: '#f6b39b',
          400: '#f08866',
          500: '#e76f51', // Primary terra cotta
          600: '#d4583a',
          700: '#b2442f',
          800: '#933a2b',
          900: '#7a3329',
        },
        forestGreen: {
          50: '#f3f6f4',
          100: '#e3e9e5',
          200: '#c7d4cb',
          300: '#a3b8a9',
          400: '#6d8a75',
          500: '#4a6b52', // Deep forest green
          600: '#3a5541',
          700: '#2f4535',
          800: '#27382c',
          900: '#212f26',
        },
        warmOchre: {
          50: '#fefbf3',
          100: '#fdf5e0',
          200: '#fae9b8',
          300: '#f7d985',
          400: '#f3c04a',
          500: '#eba72e', // Warm golden ochre
          600: '#d48820',
          700: '#b0681b',
          800: '#8f511c',
          900: '#75431b',
        },
        cream: {
          50: '#fffefb',
          100: '#fffcf5',
          200: '#fef8ea',
          300: '#fdf3dc',
          400: '#fbecc6',
          500: '#f8e3ab',
          600: '#f0d48f',
          700: '#e5bf6d',
          800: '#d4a550',
          900: '#b88a42',
        },
        // Keep legacy names for backwards compatibility
        warmOrange: {
          50: '#fef6f3',
          100: '#fdeae2',
          200: '#fad2c4',
          300: '#f6b39b',
          400: '#f08866',
          500: '#e76f51',
          600: '#d4583a',
          700: '#b2442f',
          800: '#933a2b',
          900: '#7a3329',
        },
        warmPurple: {
          50: '#fefbf3',
          100: '#fdf5e0',
          200: '#fae9b8',
          300: '#f7d985',
          400: '#f3c04a',
          500: '#eba72e',
          600: '#d48820',
          700: '#b0681b',
          800: '#8f511c',
          900: '#75431b',
        },
        sage: {
          50: '#f3f6f4',
          100: '#e3e9e5',
          200: '#c7d4cb',
          300: '#a3b8a9',
          400: '#6d8a75',
          500: '#4a6b52',
          600: '#3a5541',
          700: '#2f4535',
          800: '#27382c',
          900: '#212f26',
        },
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Senior-friendly larger base sizes
        'base': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};

export default config;
