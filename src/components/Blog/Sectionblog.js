import React from 'react'

function Sectionblog() {
    return (
        <div className='max-w-[1400px] m-auto h-[180px] my-[100px] px-5 '>
            <h1 className='font-bold text-[24px] leading-[36px]'>Categories</h1>
            <ul className='my-10 flex justify-start items-center '>
                <li className='bg-[#E7E7E7] h-[35px] mr-5 px-10 flex justify-center items-center text-[18px] leading-[24px] rounded-[3px]'>Web Development</li>
                <li className='bg-[#E7E7E7] h-[35px] mx-5 px-10 flex justify-center items-center text-[18px] leading-[24px] rounded-[3px]'>Mobile Application</li>
                <li className='bg-[#E7E7E7] h-[35px] mx-5 px-10 flex justify-center items-center text-[18px] leading-[24px] rounded-[3px]'>Productivity</li>
                <li className='bg-[#E7E7E7] h-[35px] mx-5 px-10 flex justify-center items-center text-[18px] leading-[24px] rounded-[3px]'>Design</li>
                <li className='bg-[#E7E7E7] h-[35px] mx-5 px-10 flex justify-center items-center text-[18px] leading-[24px] rounded-[3px]'>Engineering</li>
            </ul>
        </div>
    )
}

export default Sectionblog
