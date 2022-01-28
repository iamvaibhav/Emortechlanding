import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

function Footer() {
    return (
     <footer className='min-h-[414px] w-[fullw] flex flex-wrap justify-around items-start mt-10 bg-[#2E2E2E]'>
         <div className='mt-[80px] text-white w-full sm:w-auto flex flex-col justify-start items-center'>
         <div className='bg-white flex justify-center items-center h-[76px] mt-[-15px] w-[160px] rounded-[10px]'>
         <StaticImage src='../images/logo.png'  />
           </div> 
             <p className='mt-[20px] text-white'>Social</p>
             <ul className='flex font-normal text-white mt-2 text-[18px] text-center'>
                 <li className='bg-white h-[40px] w-[40px] flex justify-center items-center rounded-[100%]'><StaticImage src='../images/linkedin.png' /> </li>
                 <li className='bg-white mx-2 h-[40px] w-[40px] flex justify-center items-center rounded-[100%]'><StaticImage src='../images/facebook.png' /></li>
                 <li className='bg-white h-[40px] w-[40px] flex justify-center items-center rounded-[100%]'><StaticImage src='../images/twitter.png' /></li>
             </ul>

             <p className='mt-[20px] text-white'>copyright</p>
             <p>Emortech @2021</p>
         </div>
         <div className='mt-[80px] text-white w-full sm:w-auto flex flex-col justify-start items-center'>
             <h2 className='font-bold text-[22px] leading-[36px] text-center text-white'>Location</h2>
             <p>Indore , India</p>
         </div>
         <div className='mt-[80px] w-full sm:w-auto flex flex-col justify-start items-center'>
             <h2 className='font-bold text-[22px] leading-[36px] text-center text-white'>Project</h2>
             <ul className='font-normal text-white mt-2 text-[18px] text-center'>
                 <li>Websites</li>
                 <li>Applications</li>
                 <li>Slack bot</li>
                 <li>Multiplayer Games</li>
                 <li>Newsletter</li>
             </ul>
         </div>
         <div className='mt-[80px]  w-full sm:w-auto flex flex-col justify-start items-center'>
             <h2 className='font-bold text-[22px] leading-[36px] text-center text-white'>Services</h2>
             <ul className='font-normal text-white mt-2 text-[18px] text-center'>
                 <li>Web Development</li>
                 <li>AI/ML</li>
                 <li>Mobile Development</li>
                 <li>UI/UX Design</li>
             </ul>
         </div>
     </footer>
    )
}

export default Footer
