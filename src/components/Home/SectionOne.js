import React from 'react'
import '../../styles/SectionOne.css'
function SectionOne() {
    return (
        <div className='section_one'>
            <div className='arrow'> 
                <img src='./arrow.png' />
                <img src='./arrow.png' />
            </div>

            <section>
                <h1>Our Capabilities</h1>
                 <div className='section_div_one'>
                    <div>
                        <img src='./mobile.png' />
                         <span></span>
                         <p>Mobile Applications</p>
                    </div>

                    <div>
                        <img src='./Ai.png' />
                         <span></span>
                         <p>Artificial Intelligence & Machine Learning</p>
                    </div>

                    <div>
                        <img src='./web.png' />
                         <span></span>
                         <p>Web Development</p>
                    </div>

                    <div>
                        <img src='./inoft.png' />
                         <span></span>
                         <p>Internet Of things</p>
                    </div>

                    <div>
                        <img src='./ui.png' />
                         <span></span>
                         <p>UI UX Design</p>
                    </div>


                 </div>

                 <button>View More</button>
            </section>
        </div>
    )
}

export default SectionOne
