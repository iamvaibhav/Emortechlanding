import React from "react"
import "../../styles/SectionThree.css"

function SectionThree() {
  return (
    <div className="h-[600px] w-full flex flex-col justify-around items-center bg-white">
      <h1 className="font-normal text-[30px] leading-[39px] text-center text-[#1382C7]">
        <span className="text-black">Dont believe us?</span> See what our clients say
      </h1>
      <section className="w-[1000px] flex justify-between items-center">
        <div>
          <h2 className="w-[345px] font-normal text-[24px] leading-[36px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu,
            lectus ac venenatis dolor. Morbi lectus pellentesque augue.
          </h2>
          <div className="float-right">
            <p className="m-2">Client Name</p>
            <p className="m-2">Company name</p>
          </div>
        </div>

        <div>
          <h2 className="w-[345px] font-normal text-[24px] leading-[36px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu,
            lectus ac venenatis dolor. Morbi lectus pellentesque augue.
          </h2>
          <div className="float-right">
            <p className="m-2">Client Name</p>
            <p className="m-2">Company name</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionThree
