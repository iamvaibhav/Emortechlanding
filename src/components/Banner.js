import React from "react"

function Banner({ title, img }) {
  console.log(title)
  return (
    <div>
      {title != "Contact" && title != '' ?  (
        <main
          className="flex flex-col justify-start items-center h-[484px] w-[100%] relative bg-cover bg-no-repeat bg-center w-full"
          style={{ backgroundImage: `url(./bannerblog2.png)` }}
        >
          <div
            className={`h-[460px] w-[100%] 
            ${title == 'blogs'? `bg-[url('../images/blog.png')]` : title == 'Portfolio' ? `bg-[url('../images/portfolio2.png')]` : title =='Contact' ? `bg-[url('../images/contact.png')]` : title =='Services' ? `bg-[url('../images/services2.png')]` : null }
            ${title == 'blogs'? `sm:bg-[url('../images/blog2.png')]` : title == 'Portfolio' ? `sm:bg-[url('../images/portfolio.png')]` : title =='Contact' ? `sm:bg-[url('../images/contact2.png')]` : title =='Services' ? `sm:bg-[url('../images/services.png')]` : null  }
            bg-cover bg-no-repeat bg-center`}
      
          >
            <h1 className="h-[460px] font-bold text-white text-[42px] sm:text-[114px] sm:leading-[148px] flex justify-around items-center uppercase sm:py-20">
              {title}
            </h1>
          </div>
        </main>
      ) : (
        <main className="flex flex-col justify-start items-center h-[500px] w-[100%] bg-cover bg-no-repeat bg-center w-full">
          <div
            className={`h-[440px] w-[100%] 
            ${title =='Contact' ? `bg-[url('../images/contact.png')]` : `bg-[url('../images/blogs.png')]`  }
            ${title =='Contact' ? `sm:bg-[url('../images/contact2.png')]` : null  }
            bg-cover bg-no-repeat bg-center`}
         
          >
            <h1 className="font-bold text-white text-[114px] leading-[148px] flex justify-center items-center uppercase py-20">
            </h1>
          </div>
        </main>
      )}
    </div>
  )
}

export default Banner
