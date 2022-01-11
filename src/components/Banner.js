import React from 'react'

function Banner({title , img}) {
    console.log(title)
    return (
        <div>
            <main className='flex flex-col justify-start items-center h-[450px] bg-cover bg-no-repeat bg-center w-full '  style={{ backgroundImage: `url(./bannerblog.png)` }}>
            <div className='h-[400px] w-[100%]  bg-cover bg-no-repeat bg-center ' style={{ backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${img})` }}>
                <h1 className='font-bold text-white text-[114px] leading-[148px] flex justify-center items-center uppercase py-20'>{title}</h1>
            </div>
        
        </main>
      
        </div>
    )
}

export default Banner
