import React, { useState } from "react"
import textData from "./textData.js";

function Sectionblog({name , setName}) {
    const [activeId, setActiveId] = useState(1);

  const activeStyle = {
    background: '#1382C7',
    color: 'white'
  };

  const handleClick = (id)=> (e)=> {
    const activeElement = textData.find((item)=> item.id === id )

    activeElement && setActiveId(id)
    setName(e.target.innerHTML)
    console.log(name)
  }

  return (
    <div className="max-w-[1200px] m-auto min-h-[180px] my-[100px] px-2 ">
      <h1 className="text-primary font-bold text-[24px] leading-[36px]">
        Categories
      </h1>
      <ul className="text-primary my-10 flex flex-wrap justify-start items-center ">
       {textData.map(({ id, text }) => {
        return (
            <li className="bg-blogs h-[35px] px-2 sm:px-5 mt-5 mr-5 sm:px-10 flex justify-center items-center text-[18px] leading-[24px] rounded-[3px]"
            key={id}
            style={id === activeId ? activeStyle : {}}
            onClick={handleClick(id)}
            value={name}
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
