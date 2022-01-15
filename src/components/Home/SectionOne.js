import React from 'react'
import { ThemeContext } from '../themeContext'
function SectionOne() {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'> 
                <img src={theme == 'dark' ? './arroww.png' : './arrowb.png'}/>
                <img src={theme == 'dark' ? './arroww.png' : './arrowb.png'}/>
            </div>

            <section className='h-[500px] my-[80px] flex flex-col justify-between items-center'>
                <h1 className='font-bold text-[30px] leading=[39px] flex uppercase text-[#1382C7]'>Our Capabilities</h1>
                 <div className='w-[1200px]  flex justify-between items-center'>
                    <div className='max-w-[212px]'>
                        <img src={theme == 'dark' ? './mobilew.png' : './mobileb.png'  }/>
                         <span className='h-[10px] w-[129px] block my-[20px] bg-[#1382C7] opacity-[0.2] rounded-[6px]'></span>
                         <p className='font-normal text-[20px] leading-[26px] text-primary'>Mobile Applications</p>
                    </div>

                    <div>
                        <img src={theme == 'dark' ? './Aiw.png' : './Aib.png'} />
                         <span className='h-[10px] w-[129px] block my-[20px] bg-[#1382C7] opacity-[0.2] rounded-[6px]'></span>
                         <p className='font-normal max-w-[212px] text-[20px] leading-[26px] text-primary'>Artificial Intelligence & Machine Learning</p>
                    </div>

                    <div>
                        <img src={theme == 'dark' ? './webw.png' : './webb.png'} />
                         <span className='h-[10px] w-[129px] block my-[20px] bg-[#1382C7] opacity-[0.2] rounded-[6px]'></span>
                         <p className='font-normal text-[20px] leading-[26px] text-primary'>Web Development</p>
                    </div>

                    <div>
                        <img src={theme == 'dark' ? './inoftw.png' : './inoftb.png'} />
                         <span className='h-[10px] w-[129px] block my-[20px] bg-[#1382C7] opacity-[0.2] rounded-[6px]'></span>
                         <p className='font-normal text-[20px] leading-[26px] text-primary'>Internet Of things</p>
                    </div>

                    <div>
                        <img src={theme == 'dark' ? './uiw.png' : './uib.png'} />
                         <span className='h-[10px] w-[129px] block my-[20px] bg-[#1382C7] opacity-[0.2] rounded-[6px]'></span>
                         <p className='font-normal text-[20px] leading-[26px] text-primary'>UI UX Design</p>
                    </div>


                 </div>

                 <button className='h-[45px] w-[274px] font-bold text-[20px] leading-[26px] border-1 border-[#1382C7] bg-[#1382C7] rounded-[5px] text-white  flex justify-center items-center text-center'>View More</button>
            </section>
        </div>
    )
}

export default SectionOne
