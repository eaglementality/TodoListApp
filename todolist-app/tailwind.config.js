/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'text-todo': '2.rem',
      },
      background:{
        'blue':'hsl(192, 100%, 67%)',
        'violet' : 'hsl(280, 87%, 65%)'
      },
      backgroundColor: {
        'Verydark':'hsl(235, 21%, 11%)',
        'dark':'hsl(235, 24%, 19%)'
      },
       letterSpacing:{
        'space':'12px'
       },
       screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}
