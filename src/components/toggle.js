import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { ThemeContext } from './themeContext'
import Toggle from 'react-toggle'
import "react-toggle/style.css" 
import theme2 from '../images/theme2.png'
import themew from '../images/theme.png'

export const Togglebtn = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)
  const [dark , setDark] = useState(true)
  function isDark() {
    return theme === 'dark'
  }

  return (
    <>
            <p className='menuw:hidden text-primary mb-2'>Theme</p>

      <label className='menuw:hidden'>
  <Toggle    
     checked={isDark()}
    onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
    icons={{
      checked:  <StaticImage src='../images/theme.png' />,
      unchecked: null,
    }}
    />
</label>
                     
                     { theme == 'dark' ?
                 <img onClick={()=>{
                   isDark()
                   setTheme(dark ? 'dark' : 'light') 
                   setDark(!dark)
                 }} src={theme2} className='mr-[55px] hidden menuw:block' />:
                 
                 <img onClick={()=>{
                   isDark()
                   setTheme(dark ? 'dark' : 'light') 
                   setDark(!dark)
                 }} src={themew} className='mr-[55px] hidden menuw:block' />
                }
    </>
  )
}