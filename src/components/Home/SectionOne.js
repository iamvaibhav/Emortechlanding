import React from 'react'
import { ThemeContext } from '../themeContext'
import SectiononeBox from './SectiononeBox'
function SectionOne() {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <div className='flex flex-col justify-center items-center'>
           <a href='#section'> <div className='animate-bounce hidden sm:flex flex-col justify-center items-center'> 
                <img src={theme == 'dark' ? './arroww.png' : './arrowb.png'}/>
                <img src={theme == 'dark' ? './arroww.png' : './arrowb.png'}/>
            </div></a>

            <section id='section' className='min-h-[500px] my-[80px] flex flex-col justify-between items-center'>
                <h1 className='font-bold text-[30px] leading=[39px] flex uppercase text-[#1382C7]'>Our Capabilities</h1>
                 <div className='w-[300px] py-2 mt-10 sm:w-[1200px] flex flex-col sm:flex-row flex-wrap justify-between items-center'>
                     <SectiononeBox name='Mobile Applications' img={theme == 'dark' ? './mobilew.png' : './mobileb.png'  } />
                     <SectiononeBox name='Artificial Intelligence & Machine Learning' img={theme == 'dark' ? './Aiw.png' : './Aib.png'}  />
                     <SectiononeBox name='Web Development' img={theme == 'dark' ? './webw.png' : './webb.png'}  />
                     <SectiononeBox name='Internet Of things' img={theme == 'dark' ? './inoftw.png' : './inoftb.png'} />
                     <SectiononeBox name='UI UX Design' img={theme == 'dark' ? './uiw.png' : './uib.png'} />



                 </div>

                 <button className='h-[45px] w-[274px] font-bold text-[20px] leading-[26px] border-1 border-[#1382C7] bg-[#1382C7] rounded-[5px] text-white  flex justify-center items-center text-center'>View More</button>
            </section>
        </div>
    )
}

export default SectionOne
