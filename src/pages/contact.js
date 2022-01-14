import React from 'react'
import Banner from '../components/Banner'
import Layout from '../components/Layout'

function contact() {
    return (
        <Layout>
      <Banner title='Contact' img={`./contact2.png`}/>
      <div className='max-w-[1400px] m-auto flex flex-col justify-between items-center'>
        <section className='flex flex-col justify-center items-center'> 
          <h2 className='text-black font-normal text-[72px] leadg-[100px]'>Get in Touch.</h2>
          <p className='text-black font-normal text-[18px] leading-[22px]'>Let’s discuss how we can help you</p>
        </section>

        <section className='flex justify-between items-start'>
          <div className='h-[800px] w-[800px]'>
            <form>
              <input className='h-[40px] w-[600px] border-b-2 border-[#1382C7] mt-10 p-2' placeholder='First Name'  type='text' />
              <input className='h-[40px] w-[600px] border-b-2 border-[#1382C7] mt-10 p-2' placeholder='Last Name' type='text' />
              <input className='h-[40px] w-[600px] border-b-2 border-[#1382C7] mt-10 p-2' placeholder='Company Name' type='text' />
              <p className='mt-5 mb-2'>What type of service are you looking for?</p>
              <ul className='max-w-[600px] flex flex-wrap justify-start items-center '>
                <li className='h-[35px] border-2 border-black mr-2 px-5 flex justify-center items-center text-[18px] leading-[24px] rounded-[10px]'><input className='mr-5' type='radio' /> AI/ML</li>
                <li className='h-[35px] border-2 border-black mr-2 px-5 flex justify-center items-center text-[18px] leading-[24px] rounded-[10px]'><input className='mr-5' type='radio' /> Android App</li>
                <li className='h-[35px] border-2 border-black mr-2 px-5 flex justify-center items-center text-[18px] leading-[24px] rounded-[10px]'><input className='mr-5' type='radio' /> Web development</li>
                <li className='h-[35px] border-2 border-black mt-2 mr-2 px-5 flex justify-center items-center text-[18px] leading-[24px] rounded-[10px]'><input className='mr-5' type='radio' /> UI UX Design</li>
                <li className='h-[35px] border-2 border-black mt-2 mr-2 px-5 flex justify-center items-center text-[18px] leading-[24px] rounded-[10px]'><input className='mr-5' type='radio' /> AI/ML</li>
            </ul>
            <textarea className='h-[200px] w-[600px] border-2 border-black mt-5'>

            </textarea><br></br>
            <button className='h-[45px] w-[274px] font-bold text-[20px] leading-[26px] border-1 border-[#1382C7] bg-[#1382C7] rounded-[5px] text-white  flex justify-center items-center text-center mt-5'>Submit</button>
            </form>
          </div>
          <div>
            <img src='./contactimage.png' />
          </div>
        </section>
      </div>
        </Layout>
    )
}

export default contact
