import React from 'react'

function Footer() {
    return (
     <footer className='h-[414px] w-[fullw] flex justify-around items-start bg-[#2E2E2E]'>
         <div className='mt-[80px] flex flex-col justify-start items-center'>
         <div className='bg-white flex justify-center items-center h-[76px] mt-[-15px] w-[160px] rounded-[10px]'>
                <img src='./logo.png'/>
           </div> 
             <p className='mt-[20px]'>Social</p>
             <ul className='flex font-normal text-white mt-2 text-[18px] text-center'>
                 <li>In</li>
                 <li>F</li>
                 <li>Twitter</li>
             </ul>

             <p className='mt-[20px]'>copyright</p>
             <p>Emortech @2021</p>
         </div>
         <div className='mt-[80px] flex flex-col justify-start items-center'>
             <h2 className='font-bold text-[22px] leading-[36px] text-center text-white'>Location</h2>
             <p>Indore , India</p>
         </div>
         <div className='mt-[80px] flex flex-col justify-start items-center'>
             <h2 className='font-bold text-[22px] leading-[36px] text-center text-white'>Project</h2>
             <ul className='font-normal text-white mt-2 text-[18px] text-center'>
                 <li>Websites</li>
                 <li>Applications</li>
                 <li>Slack bot</li>
                 <li>Multiplayer Games</li>
                 <li>Newsletter</li>
             </ul>
         </div>
         <div className='mt-[80px] flex flex-col justify-start items-center'>
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
