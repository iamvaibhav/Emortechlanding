import React from 'react'
import {Link} from 'gatsby'
function Header() {
    return (
       <header>
          <img className='logo' src='./logo.png'/>
           <ul>
              <Link className='link' to='/'> <li>Home</li></Link>
             <Link  className='link'  to='/portfolio'>  <li>Portfolio</li></Link>
             <Link  className='link'  to='/services'> <li>Services</li></Link> 
             <Link  className='link'  to='/blogs'>  <li>Blog</li></Link>
              <Link  className='link'  to='/contact'> <li>Contact</li></Link>
           </ul>
           <img className='theme' src='./theme.png'/>
       </header>
    )
}

export default Header
