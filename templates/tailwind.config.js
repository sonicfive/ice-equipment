module.exports = {

  content: [
    './**/*.twig'

  ],
  theme: {
    extend: {
      colors: {
        green: '#2890DA',
        red: '#990000',
        white: '#ffffff',
        yellow: '#FED700',
        gray: {
          '100': '#F8F8F8',
          '200': '#E5E5E5',
          '300': '#666666'
        }
      },
    },
    fontFamily: {
  'sans': ['ui-sans-serif', 'system-ui'],
    'serif': ['ui-serif', 'Georgia'],
    'mono': ['ui-monospace', 'SFMono-Regular'],
    'display': ['Oswald'],
    'body': ['"Open Sans"'],
  }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
