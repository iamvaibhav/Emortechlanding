module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        blogs: `var(--color-bg-blogs)`
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
    
      gradientColorStops: theme => ({
        'primary': '#26C0D5',
        'secondary': '#1B8CCC',
        'danger': '#1B6CCC',
    }),
<<<<<<< HEAD
<<<<<<< HEAD
=======
    backgroundImage: theme => ({
      'hero': "url('./images/logo.png')"
    }),
>>>>>>> eeb02de (added responsive style and blog post)
=======
>>>>>>> 2f6713f (add menu icon)
    screens: {
      'sml': '300px',
      'menuw':'890px'
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