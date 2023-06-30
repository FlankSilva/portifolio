/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        boxBorderMenu: '0 0 3px rgba(39, 174, 96,0.5)',
      },
    },
    colors: {
      'black-950': '#000',
      'black-900': 'rgba(0,0,0,0.93)',
      'black-800': 'rgba(0,0,0,.66)',
      'black-600': 'rgb(15, 15, 15)',
      'black-500': 'rgba(255, 255, 255, 0.2)',
      'zinc-50': 'rgb(250 250 250)',
      'zinc-100': '#ddd',
      'zinc-150': '#95a5a6',
      'zinc-200': 'rgba(255, 255, 255, 0.3)',
      'red-400': '#d63031',
      'green-200': 'rgba(46, 204, 113,0.4)',
      'green-300': 'rgba(46, 204, 113,0.7)',
      'green-500': 'rgb(0, 173, 111)',
    },
  },
  plugins: [],
}
