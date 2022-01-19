import React, { useState } from 'react'
import {Link} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Toggle } from './toggle'

function Header() {

   const [menu , setMenu] = useState(false)

    return (
       <>
       {menu ? 
       <div>
       <StaticImage onClick={() => {
          setMenu(!menu)
       }} src='../images/close.png' className='float-right mr-5' />
          <div className='sm:hidden h-screen w-screen bg-secondary flex flex-col justify-start items-center'>
       <ul onClick={() => {
          setMenu(!menu)
       }} className='flex flex-col items-center font-semibold text-primary opacity-[0.4] text-[20px]'>
              <Link className='link' to='/'> <li className='mx-10 my-10'>Home</li></Link>
             <Link  className='link'  to='/portfolio'>  <li className='mx-10 my-10'>Portfolio</li></Link>
             <Link  className='link'  to='/services'> <li className='mx-10 my-10'>Services</li></Link> 
             <Link  className='link'  to='/blogs'>  <li className='mx-10 my-10'>Blog</li></Link>
              <Link  className='link'  to='/contact'> <li className='mx-10 my-10'>Contact</li></Link>
            <Toggle />

           </ul>
       </div>
       </div>
      : null}
       <header className='flex justify-between items-center h-head w-screen bg-gradient-to-r  ' 
       style={{background:"linear-gradient(93.93deg, #26C0D5 -6.86%, #1B8CCC 107.58%, #1B6CCC 107.58%)"}}>
          <StaticImage src='../images/logo.png' className='sm:ml-[55px]' />
          <StaticImage onClick={() => {
             setMenu(!menu)
          }}  src='../images/menu.png' className='sm:hidden mr-5'/>
           <ul className=' hidden sm:flex items-center font-semibold text-black opacity-[0.4] text-[20px]'>
              <Link className='link' to='/'> <li className='mx-10'>Home</li></Link>
             <Link  className='link'  to='/portfolio'>  <li className='mx-10'>Portfolio</li></Link>
             <Link  className='link'  to='/services'> <li className='mx-10'>Services</li></Link> 
             <Link  className='link'  to='/blogs'>  <li className='mx-10'>Blog</li></Link>
              <Link  className='link'  to='/contact'> <li className='mx-10'>Contact</li></Link>
           </ul>
          <div className='hidden sm:block'><Toggle /></div> 
       </header>
    

       </>
    )
}

export default Header
