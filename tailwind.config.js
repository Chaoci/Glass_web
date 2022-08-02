module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container:{
      center:true,
      padding:'12px', //只會設定左右 
      screens: {
        xl: '1320px',
      },
    },
    extend: {
      colors:{
        'maroon':{
            light: '#AA0601',
            DEFAULT: '#650300',
        },
        'p-brown':'#5F3E2D',
        'p-brown-light':'#B75929',
        'skin':'#FBF2F2',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}