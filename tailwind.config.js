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
      backgroundImage: {
        'header-image': "url('/images/AlmaVistaSunset.jpg')",
        
      },
      backgroundColor: {
        'sunset': '#FDB813',
      },
      animation: {
        fadeIn: 'fadeIn 4s ease-in-out',
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
