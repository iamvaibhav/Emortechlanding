import React from 'react'
import {Link} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Toggle } from './toggle'

function Header() {
    return (
       <header className='flex justify-between items-center h-head w-fullw bg-gradient-to-r  ' 
       style={{background:"linear-gradient(93.93deg, #26C0D5 -6.86%, #1B8CCC 107.58%, #1B6CCC 107.58%)"}}>
          <StaticImage src='../images/logo.png' className='ml-[55px]' />
           <ul className='flex items-center font-semibold text-black opacity-[0.4] text-[20px]'>
              <Link className='link' to='/'> <li className='mx-10'>Home</li></Link>
             <Link  className='link'  to='/portfolio'>  <li className='mx-10'>Portfolio</li></Link>
             <Link  className='link'  to='/services'> <li className='mx-10'>Services</li></Link> 
             <Link  className='link'  to='/blogs'>  <li className='mx-10'>Blog</li></Link>
              <Link  className='link'  to='/contact'> <li className='mx-10'>Contact</li></Link>
           </ul>
           <Toggle />
       </header>
    )
}

export default Header
