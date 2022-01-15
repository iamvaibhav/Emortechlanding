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
      <label className="text-primary">
        <input
          type="checkbox"
          checked={isDark()}
          onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
        ></input>
        Dark Mode
      </label>
                 <StaticImage src='../images/theme.png' className='mr-[55px]' />

    </>
  )
}