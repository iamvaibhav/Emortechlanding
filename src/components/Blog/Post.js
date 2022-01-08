import React from 'react'

function Post({key , title , date , description , excerpt}) {
    return (
        <div className='h-[408px] w-[497px] bg-[#000] shadow-lg rounded-[10px]'>
            <img className='h-[151px] shadow-lg rounded-t-[5px]' src='./blog.png' />
            <div className='h-[257px] shadow-lg rounded-b-[5px] p-10' style={{background:"linear-gradient(93.93deg, #26C0D5 -6.86%, #1B8CCC 107.58%, #1B6CCC 107.58%)"}}>
                <h1 className='text-[32px] leading-[42px] font-bold '>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Post
