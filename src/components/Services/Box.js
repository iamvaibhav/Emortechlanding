import React from 'react'

function Box({title, description , img}) {
    return (
        <div className='min-h-[380px] w-[355px] ml-20 mt-10 flex flex-col justify-between items-start rounded-[5px] p-10 ' style={{ background:"linear-gradient(93.93deg, #26C0D5 -6.86%, #1B8CCC 107.58%, #1B6CCC 107.58%)",
          }}>
              <img src={img} />
              <h2 className='text-white font-semibold text-[24px] leading-[36px]'>{title}</h2>
              <p className='text-white font-normal text-[18px] leading-[24px]'>{description}</p>
          
        </div>
    )
}

export default Box
