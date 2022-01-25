import { Link } from 'gatsby'
import React from 'react'

function Post({key , title , date , description , readtime, thumbnail, link,excerpt , name , setName}) {
    return (
       
               <article
              className="sm:mr-10"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header className="relative max-h-[420px] max-w-[497px] bg-white shadow-lg rounded-[10px]">
                <img className="rounded-t-[5px] h-[151px] w-full" src={thumbnail} />

                <section
                  className="h-[270px] shadow-lg rounded-b-[5px] px-5 py-2 sm:px-10"
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
                  <h2 className="text-[24px] sm:leading-[36px] font-bold ">
                    <Link to={link} itemProp="url">
                      <span
                        className="text-[16px] sml:text-[24px] sm:leading-[36px] font-bold "
                        itemProp="headline"
                      >
                        {title}
                      </span>
                    </Link>
                  </h2>

                  <section
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                    itemProp="articleBody"
                    className="text-[12px] sml:text-[18px] max-h-[100px] py-2"
                  />
                                  <p className='absolute bottom-0 right-0 pr-2 text-white float-right'>{readtime}</p>

                </section>

              </header>
            </article>
          
        
    )
}

export default Post