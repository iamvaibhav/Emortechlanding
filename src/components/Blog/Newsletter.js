import React from "react"

function Newsletter() {
  return (
    <div className="h-[181px] max-w-[1400px] m-auto bg-[#2E2E2E] mt-20 flex justify-around items-center">
      <section>
        <h2 className="text-white font-[500] text-[20px] leading-[26px]">
          Like what you see? for more such articles  <br></br>Subscribe to our Newsletter
        </h2>
        <p className="text-[#1382C7] font-normal text-[18px] leading-[22px]">No, We don’t spam</p>
      </section>

      <section className="flex flex-col justify-center items-center">
          <input className="h-[36px] w-[500px] rounded-[10px] px-5" placeholder="Enter email address" type='email' />
          <br></br>
          <button className="h-[45px] w-[274px] font-bold text-[20px] leading-[26px] border-1 border-[#1382C7] bg-[#1382C7] rounded-[10px] text-white  flex justify-center items-center text-center">Get Newsletter</button>
      </section>
    </div>
  )
}

export default Newsletter
