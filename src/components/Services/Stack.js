import React from 'react'

function Stack({name , img}) {
    return (
        <div className='text-primary ml-20 mt-10 max-w-[100px] flex flex-col justify-center items-center'>
            <div className='h-[140px] w-[120px] flex justify-center items-center bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(../../services/bg.png)` }}>
              <img src={img} />
            </div>
           <p>{name}</p> 
        </div>
    )
}

export default Stack
