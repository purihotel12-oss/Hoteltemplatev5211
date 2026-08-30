/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,tsx}'],
  theme: { extend: { fontFamily: { display:['Cormorant Garamond','serif'], sans:['Inter','sans-serif'] }, maxWidth:{'8xl':'90rem'} } },
  plugins: []
};
