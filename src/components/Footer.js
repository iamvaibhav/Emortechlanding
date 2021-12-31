import React from 'react'

function Footer() {
    return (
     <footer>
         <div className='footer_div_one'>
         <div className='img_container'>
                <img src='./logo.png'/>
           </div> 
             <p className='div_one_p'>Social</p>
             <ul>
                 <li>In</li>
                 <li>F</li>
                 <li>Twitter</li>
             </ul>

             <p className='div_two_p'>copyright</p>
             <p>Emortech @2021</p>
         </div>
         <div>
             <h2>Location</h2>
             <p>Indore , India</p>
         </div>
         <div>
             <h2>Project</h2>
             <ul>
                 <li>Websites</li>
                 <li>Applications</li>
                 <li>Slack bot</li>
                 <li>Multiplayer Games</li>
                 <li>Newsletter</li>
             </ul>
         </div>
         <div>
             <h2>Services</h2>
             <ul>
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
