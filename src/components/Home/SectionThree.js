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
      <section className="w-full sm:max-w-[1000px] mt-5 text-primary flex flex-wrap justify-center sm:justify-between items-center">
      <div className='w-[100%] flex flex-col justify-center items-center'>
      <div className='sm:w-[600px] min-w-full w-full sml:w-[400px] m-auto overflow-hidden'>
        <div className='min-h-[200px] relative min-w-full w-full sm:max-w-[500px] sm:w-[500px] flex ' ref={ref}>
        {data.map(({ quote , name , company  }) => {
        return (
          <div className="w-[100%] max-w-[500px] min-w-full sm:w-[500px] m-auto flex flex-col justify-center items-center ">
          <h2 className="w-[100%] min-w-full sm:min-w-[80%] max-w-500px  sml:w-[400px] px-5 sml:px-2 m-auto sm:w-[500px] font-normal text-[18px] sm:text-[24px] leading-[36px]">
           {quote}
          </h2>
          <div className="float-right">
            <p className="mt-2">{name}</p>
            <p className="mt-2">{company}</p>
          </div>
        </div>
        );
      })}      
        

        </div>
      </div> 
      <div className='w-full min-w-full sm:min-w-[80%] sm:w-[500px] flex justify-between items-center'>
      <div className='bg-white flex justify-center items-center h-[50px] w-[50px] rounded-[100%] p-5 m-5' onClick={prev}><img className="min-w-[30px] w-[50px]" src="./left.png" /></div>

        {data.map(num => (
          <div
          className={`button-2 ${num === current && 'active'}`}
          onClick={desired}     
            id={num}
            key={num}
          />
        ))}
                <div className='bg-white flex justify-center items-center h-[50px] w-[50px] rounded-[100%] p-5 m-10' onClick={next}><img className="min-w-[30px] w-[50px]" src="./right.png" /></div>


      </div>
    </div>
      </section>
   
    </div>
  )
}

export default SectionThree
