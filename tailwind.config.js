/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html','./src/**/*.{js,jsx}'], theme: { extend: { colors: { ink:'#18251f', moss:'#355b43', lime:'#d8f36a', paper:'#f7f8f3', muted:'#68736b' }, fontFamily: { sans:['Inter','ui-sans-serif','system-ui'] }, boxShadow:{ soft:'0 18px 60px rgba(24,37,31,.09)' } } }, plugins: [] };
