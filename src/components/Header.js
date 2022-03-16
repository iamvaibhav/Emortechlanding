import React, { useState } from 'react'
import {Link} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Toggle, Togglebtn } from './toggle'
import { ThemeContext } from './themeContext'
import logo from '../images/logo.png'
function Header({chat , setChat}) {

   const [menu , setMenu] = useState(false)
   const { theme, setTheme } = React.useContext(ThemeContext)

    return (
       <>
       {menu ? 
       <div>
          {theme == 'dark' ?
             <StaticImage onClick={() => {
               setMenu(!menu)
            }} src='../images/close2.png' className='float-right mr-5' />
            :
              <StaticImage onClick={() => {
               setMenu(!menu)
            }} src='../images/close.png' className='float-right mr-5' />
           }
          
    
          <div className='visible menuw:hidden h-screen w-screen bg-secondary flex flex-col justify-start items-center'>
       <ul className='flex flex-col items-center font-semibold text-primary opacity-[0.4] text-[20px]'>
              <Link className='link' to='/'> <li  onClick={() => {
          setMenu(!menu)
       }} className='mx-10 my-10'>Home</li></Link>
             <Link  className='link'  to='/portfolio'>  <li  onClick={() => {
          setMenu(!menu)
       }} className='mx-10 my-10'>Portfolio</li></Link>
             <Link  className='link'  to='/services'> <li  onClick={() => {
          setMenu(!menu)
       }} className='mx-10 my-10'>Services</li></Link> 
             <Link  className='link'  to='/blogs'>  <li  onClick={() => {
          setMenu(!menu)
       }} className='mx-10 my-10'>Blog</li></Link>
              <Link  className='link'  to='/contact'> <li  onClick={() => {
          setMenu(!menu)
       }} className='mx-10 my-10'>Contact</li></Link>
            
            <a  className='link' href='#chat'> <li  onClick={() => {
          setMenu(!menu)
          setChat(!chat)
       }} className='mx-10 my-10'>Chat with us</li></a>
            
            <li className='mx-10 my-10 flex flex-col justify-center items-center'>
            <Togglebtn />
            </li>

           </ul>
       </div>
       </div>
      : null}
       <header className='flex justify-between items-center h-head w-screen bg-gradient-to-r  ' 
       style={{background: "linear-gradient(93.93deg, #26C0D5 -6.86%, #1B8CCC 107.58%, #1B6CCC 107.58%)"}}>
          <img src={logo} className='min-w-[100px] sm:ml-[55px]' />
        <div className='visible menuw:hidden'>
          <StaticImage onClick={() => {
             setMenu(!menu)
          }}  src='../images/menu.png' className='block menuw:hidden mr-5'/> </div>
           <ul className=' hidden menuw:flex items-center font-semibold text-black opacity-[0.4] text-[16px] lg:text-[20px]'>
              <Link className='link' to='/'> <li className='mx-10'>Home</li></Link>
             <Link  className='link'  to='/portfolio'>  <li className='mx-10'>Portfolio</li></Link>
             <Link  className='link'  to='/services'> <li className='mx-10'>Services</li></Link> 
             <Link  className='link'  to='/blogs'>  <li className='mx-10'>Blog</li></Link>
              <Link  className='link'  to='/contact'> <li className='mx-10'>Contact</li></Link>
           </ul>
          <div className='hidden menuw:block'><Togglebtn /></div> 
       </header>
    

       </>
    )
}

export default Header
