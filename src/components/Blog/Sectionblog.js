import React, { useState } from "react"

function Sectionblog() {
    const [activeId, setActiveId] = useState(null);
  const textData = [
    {
      id: 1,
      text: "Web Development",
    },
    {
      id: 2,
      text: "Mobile Application",
    },
    {
      id: 3,
      text: "Productivit",
    },
    {
      id: 4,
      text: "Design",
    },
    {
      id: 5,
      text: "Engineering",
    },
  ]

  const activeStyle = {
    background: '#1382C7',
    color: 'white'
  };

  const handleClick = (id)=> ()=> {
    const activeElement = textData.find((item)=> item.id === id )

    activeElement && setActiveId(id)
  }

  return (
    <div className="max-w-[1200px] m-auto h-[180px] my-[100px] px-2 ">
      <h1 className="text-primary font-bold text-[24px] leading-[36px]">
        Categories
      </h1>
      <ul className="text-primary my-10 flex justify-start items-center ">
       {textData.map(({ id, text }) => {
        return (
            <li className="bg-blogs h-[35px] mr-5 px-10 flex justify-center items-center text-[18px] leading-[24px] rounded-[3px]"
            key={id}
            style={id === activeId ? activeStyle : {}}
            onClick={handleClick(id)}
          >
            {text}
          </li>
        );
      })}
      
      </ul>
    </div>
  )
}

export default Sectionblog
