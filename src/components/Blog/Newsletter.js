import React from "react"

function Newsletter() {
  return (
    <div className="min-h-[181px] w-[90%] lg:max-w-[1400px] m-auto bg-[#2E2E2E] mt-20 flex flex-wrap sm:flex-nowrap justify-around items-center p-2">
      <div className="w-full m-auto flex flex-wrap sm:flex-nowrap justify-around items-center">
      <section>
        <h2 className="text-white font-[500] text-[20px] leading-[26px] p-2">
          Like what you see? for more such articles  <br></br>Subscribe to our Newsletter
        </h2>
        <p className="text-[#1382C7] font-normal text-[18px] leading-[22px] p-2">No, We don’t spam</p>
      </section>

      <section className="w-[280px] sml:w-[300px] md:w-[500px] flex flex-col justify-center items-center p-2">
          <input className="h-[36px] w-[90%] lg:w-[500px] rounded-[10px] px-5" placeholder="Enter email address" type='email' />
          <br></br>
          <button className="h-[45px] sml:w-[274px] font-bold sml:text-[20px] leading-[26px] border-1 border-[#1382C7] bg-[#1382C7] rounded-[10px] text-white  flex justify-center items-center text-center px-2">Get Newsletter</button>
      </section>
      </div>
    </div>
  )
}

export default Newsletter
