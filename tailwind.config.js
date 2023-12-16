/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsl(30, 38%, 92%)',
          200: 'hsl(158, 36%, 37%)',
        },
        secondary: {
          100: 'hsl(0, 0%, 100%)',
          200: 'hsl(228, 12%, 48%)',
          300: 'hsl(212, 21%, 14%)',
        }
      },
      fontFamily: {
        primary: ['Fraunces'],
        secondary: ['Montserrat']
      },
      letterSpacing: {
        widest2: '.25em',
      },
      maxWidth: {
        'max-w-super-sm': '0.875rem;',
      },
    },
  },
  plugins: [],
}

