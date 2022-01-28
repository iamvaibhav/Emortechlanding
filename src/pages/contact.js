import React from 'react'
import Banner from '../components/Banner'
import Layout from '../components/Layout'

function contact() {
    return (
        <Layout>
      <Banner title='Contact' img={`./contact2.png`}/>
      <div className='w-screen sm:max-w-[1400px] m-auto flex flex-col justify-between items-center'>
        <section className='flex flex-col justify-center items-center'> 
          <h2 className='text-primary font-normal text-[42px] sm:text-[72px] leadg-[100px]'>Get in Touch.</h2>
          <p className='text-primary font-normal text-[18px] leading-[22px]'>Let’s discuss how we can help you</p>
        </section>

        <section className='flex flex-wrap-reverse justify-center lg:justify-between items-center'>
          <div className='flex flex-col sm:justify-center items-center min-h-[800px] w-[100%] sm:w-[800px]'>
          
                <form className='max-w-[300px] w-[90%] sm:max-w-[600px]' name="Contact Form" method="POST" data-netlify="true" onSubmit='submit'>
      <input type="hidden" name="form-name" value="Contact Form" />
              <input className='h-[40px] w-[90%] sm:w-[600px] bg-secondary border-b-2 border-[#1382C7] mt-10 p-2' placeholder='First Name'  type='text' />
              <input className='h-[40px] w-[90%] sm:w-[600px] bg-secondary border-b-2 border-[#1382C7] mt-10 p-2' placeholder='Last Name' type='text' />
              <input className='h-[40px] w-[90%] sm:w-[600px] bg-secondary border-b-2 border-[#1382C7] mt-10 p-2' placeholder='Company Name' type='text' />
              <p className='text-primary mt-5 mb-2'>What type of service are you looking for?</p>
              <ul className='max-w-[600px] px-2 flex flex-wrap justify-start items-center '>
                <li className='h-[35px] mt-2 text-primary bg-secondary border-2 border-primary mr-2 px-5 flex justify-center items-center text-[12px] sml:text-[18px] leading-[24px] rounded-[10px]'><input className='mr-5' type='radio' /> AI/ML</li>
                <li className='h-[35px] mt-2 text-primary bg-seconday border-2 border-primary mr-2 px-5 flex justify-center items-center text-[12px] sml:text-[18px] leading-[24px] rounded-[10px]'><input className='mr-5' type='radio' /> Android App</li>
                <li className='h-[35px] mt-2 text-primary bg-secondary border-2 border-primary mr-2 px-5 flex justify-center items-center text-[12px] sml:text-[18px] leading-[24px] rounded-[10px]'><input className='mr-5' type='radio' /> Web development</li>
                <li className='h-[35px] mt-2 text-primary bg-secondary border-2 border-primary mt-2 mr-2 px-5 flex justify-center items-center text-[12px] sml:text-[18px] leading-[24px] rounded-[10px]'><input className='mr-5' type='radio' /> UI UX Design</li>
                <li className='h-[35px] mt-2 text-primary bg-secondary border-2 border-primary mt-2 mr-2 px-5 flex justify-center items-center text-[12px] sml:text-[18px] leading-[24px] rounded-[10px]'><input className='mr-5' type='radio' /> AI/ML</li>
            </ul>
            <textarea className='h-[200px] w-full bg-secondary border-2 border-[#1382C7] mt-5'>

            </textarea><br></br>
            <button type='submit' className='h-[45px] w-[200px] sml:w-[274px] font-bold text-[20px] leading-[26px] border-1 border-[#1382C7] bg-[#1382C7] rounded-[5px] text-white  flex justify-center items-center text-center mt-5'>Submit</button>
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
