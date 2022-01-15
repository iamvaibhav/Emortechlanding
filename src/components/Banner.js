import React from "react"

function Banner({ title, img }) {
  console.log(title)
  return (
    <div>
      {title != "Contact" ? (
        <main
          className="flex flex-col justify-start items-center h-[484px] w-[100%] bg-cover bg-no-repeat bg-center w-full"
          style={{ backgroundImage: `url(./bannerblog2.png)` }}
        >
          <div
            className="h-[460px] w-[100%]  bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: ` url(${img})`,
            }}
          >
            <h1 className="font-bold text-white text-[114px] leading-[148px] flex justify-center items-center uppercase py-20">
              {title}
            </h1>
          </div>
        </main>
      ) : (
        <main className="flex flex-col justify-start items-center h-[500px] w-[100%] bg-cover bg-no-repeat bg-center w-full">
          <div
            className="h-[440px] w-[100%]  bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: ` url(${img})`,
            }}
          >
            <h1 className="font-bold text-white text-[114px] leading-[148px] flex justify-center items-center uppercase py-20">
              {title}
            </h1>
          </div>
        </main>
      )}
    </div>
  )
}

export default Banner
