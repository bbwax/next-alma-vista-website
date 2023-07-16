/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        peach: '#FE8714',
      },
      backgroundImage: {
        'header-image': "url('/images/AlmaVistaSunset.jpg')",
        
      },
      backgroundColor: {
        'sunset': '#FDB813',
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out forwards',
        fadeInDelay: 'fadeIn 2s ease-in-out 2s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        transitionProperty: {
          'height': 'height',
          'spacing': 'margin, padding',
          'opacity': 'opacity',
        },
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
