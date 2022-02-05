import React from 'react'

function SectiononeBox({name , img}) {
    return (
        <div>
            <div className='min-h-[200px] max-w-[200px] sm:w-[300px] flex flex-col justify-center sm:justify-start sm:items-start items-center py-5'>
                        <img src={img}/>
                         <span className='h-[10px] w-[129px] block my-[20px] bg-[#1382C7] opacity-[0.2] rounded-[6px]'></span>
                         <p className='font-normal text-[20px] leading-[22px] text-primary'>{name}</p>
                    </div>
        </div>
    )
}

export default SectiononeBox
