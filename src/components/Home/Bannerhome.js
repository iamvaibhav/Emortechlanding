import React, { useState } from 'react'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'

function Bannerhome() {

    return (
        <>
        <main className='flex flex-col justify-start items-center h-bn bg-cover bg-no-repeat bg-center w-full '  style={{ backgroundImage:`url(./bannerimg.png)` }}>
            <h1 className='text-[30px] sm:text-[56px] max-w-[816px] my-[80px] leading-[73px] text-center text-white'>
            The perfect platform to deliver your IT Project
            </h1>
            <h2 className='text-[24px] opacity-[0.9] text-center leading-[31px] text-white font-normal'>We hold expertize in building intelligent, highly scalable, and elegant systems</h2>
        </main>
      
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        </>
    )
}

export default Bannerhome
