/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mm: '200px', // Add your custom breakpoint here
      },
    },
  },
  plugins: [],
}
