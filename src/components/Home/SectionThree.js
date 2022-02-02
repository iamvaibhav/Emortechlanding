import React, { useEffect, useRef, useState } from "react"




function SectionThree() {

  const data = [
    {
      quote: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu,lectus ac venenatis dolor. Morbi lectus pellentesque augue.",
      name:"Client Name",
      company:"Company Name"
    },
    {
      quote: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu,lectus ac venenatis dolor. Morbi lectus pellentesque augue.",
      name:"Client Name",
      company:"Company Name"
    }
    
    
    ]

  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const TOTAL_SLIDES = data.length -1
  const next = () => {
    if ( current >= TOTAL_SLIDES ) return
    else setCurrent(current + 1)
  }
  
  const prev = () => {
    if ( current === 0 ) return
    else setCurrent(current - 1)
  }
  
  const desired = e => {
    setCurrent(Number(e.target.id))
  }
  
  useEffect(() => {
    ref.current.style.transition = 'all 0.2s ease-in-out'
    ref.current.style.transform = `translateX(-${current}00%)`
  }, [current])
  return (
    <div className="h-[600px] w-full bg-secondary flex flex-col justify-around items-center bg-white">
      <h1 className="font-normal text-[30px] leading-[39px] text-center text-[#1382C7]">
        <span className="text-primary">Dont believe us?</span> See what our clients say
      </h1>
      <section className="sm:max-w-[1000px] mt-5 text-primary flex flex-wrap justify-center sm:justify-between items-center">
      <div className='w-full flex flex-col justify-center items-center'>
      <div className='sm:max-w-[500px] m-auto overflow-hidden'>
        <div className='flex' ref={ref}>
        {data.map(({ quote , name , company  }) => {
        return (
          <div>
          <h2 className="w-[500px] font-normal text-[24px] leading-[36px]">
           {quote}
          </h2>
          <div className="float-right">
            <p className="m-2">{name}</p>
            <p className="m-2">{company}</p>
          </div>
        </div>
        );
      })}      
        

        </div>
      </div>
      <div className='w-[500px] flex justify-between items-center'>
      <div className='bg-white flex justify-center items-center rounded-[100%] h-[100px] w-[100px] p-5 m-5' onClick={prev}><img className="w-[20px]" src="./left.png" /></div>

        {data.map(num => (
          <div
          className={`button-2 ${num === current && 'active'}`}
          onClick={desired}     
            id={num}
            key={num}
          />
        ))}
                <div className='bg-white flex justify-center items-center rounded-[100%] h-[100px] w-[100px] p-5 m-10' onClick={next}><img className="w-[20px]" src="./right.png" /></div>


      </div>
    </div>
      </section>
   
    </div>
  )
}

export default SectionThree
