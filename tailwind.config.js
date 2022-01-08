module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'primary': '#26C0D5',
        'secondary': '#1B8CCC',
        'danger': '#1B6CCC',
    }),
    backgroundImage: {
      'bn': "url(../bannerimg.png')",
    },
      colors:{

        bg:'#ebebeb',
        bgray:'#dcdcdc',
        pink:'#fc2779',
        darkred:'#ff000',
        
      },
      height: {
        head:'61px',
        bn:'718px'
           },
           width:{
            fullw:'100%'
          },
          fontSize:{
            bnh1:'56px',
            bnh2:'24px'
          },
         
    },
  },
  plugins: [],
}