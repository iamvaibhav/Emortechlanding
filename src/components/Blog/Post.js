import { Link } from 'gatsby'
import React from 'react'

function Post({key , title , date , description , readtime, thumbnail, link,excerpt , name , setName}) {
    return (
       
               <article
              className="mr-10"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header className="h-[408px] w-[497px] bg-white shadow-lg rounded-[10px]">
                <img className="rounded-t-[5px] h-[151px]" src={thumbnail} />

                <section
                  className="h-[257px] shadow-lg rounded-b-[5px] py-2 px-10"
                  style={{
                    background:
                      "linear-gradient(93.93deg, #26C0D5 -6.86%, #1B8CCC 107.58%, #1B6CCC 107.58%)",
                  }}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: description || excerpt,
                    }}
                    itemProp="description"
                    className="text-white"
                  />
                  <h2 className="text-[24px] leading-[36px] font-bold ">
                    <Link to={link} itemProp="url">
                      <span
                        className="text-[24px] leading-[36px] font-bold "
                        itemProp="headline"
                      >
                        {title}
                      </span>
                    </Link>
                  </h2>

                  <section
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                    itemProp="articleBody"
                    className="py-2"
                  />
                                  <p className='text-white float-right'>{readtime}</p>

                </section>
              </header>
            </article>
          
        
    )
}

export default Post