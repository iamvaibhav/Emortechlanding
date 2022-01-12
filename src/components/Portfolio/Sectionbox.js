import React from 'react'

function Sectionbox({name , description , img , tag1 , tag2 , tag3}) {
    return (
        <div className='h-[500px] w-[500px] flex flex-col justify-center items-start m-20'>
            <img src={img} />
            <h2 className='text-black font-normal text-[28px] leading-[42px]'>{name}</h2>
            <p className='opacity-[0.5] text-black font-normal text-[16px] leading-[24px]'>{description}</p>
            <ul className='my-2 flex flex-wrap justify-start items-center'>
                <li className='bg-[#E7E7E7] h-[35px] mr-5 px-10 flex justify-center items-center text-[14px] leading-[22px] rounded-[3px]'>{tag1}</li>
                <li className='bg-[#E7E7E7] h-[35px] mr-5 px-10 flex justify-center items-center text-[14px] leading-[22px] rounded-[3px]'>{tag2}</li>
                <li className='bg-[#E7E7E7] h-[35px] mt-5 px-10 flex justify-center items-center text-[14px] leading-[22px] rounded-[3px]'>{tag3}</li>
            </ul>
        </div>
    )
}

export default Sectionbox
