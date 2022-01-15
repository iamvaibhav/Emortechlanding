import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { ThemeContext } from './themeContext'

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)
  const [dark , setDark] = useState(false)
  function isDark() {
    return theme === 'dark'
  }

  return (
    <>
      <StaticImage src='../images/theme.png' onClick={()=>{
          setDark(!dark)
          setTheme(dark ? 'dark' : 'light')
      }} className='mr-[55px]' />

    </>
  )
}