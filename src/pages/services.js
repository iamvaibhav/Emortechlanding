import React from 'react'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Box from '../components/Services/Box'
import Stack from '../components/Services/Stack'

function services() {
    return (
    <Layout>
             <Banner title='Services' img={`./services.png`}/>
             <div className='text-primary max-w-[1400px] m-auto flex flex-wrap justify-center items-center'>
           <Box title='Artifical Intelligence & Machine Learning' description='Get our intelligent systems technology to work for your business. Drive growth, drive sales, and get closer to what the customer wants.' img={`../services/ai.png`} />
           <Box title='Web Applications' description='Get blazing fast, responsive, highly scalable, and lean information systems allowing millions of users with surprisingly low server usage.' img={`../services/wa.png`} />
           <Box title='Mobile Applications' description='Get blazing fast, responsive, highly scalable, and lean information systems allowing millions of users with surprisingly low server usage.' img={`../services/ma.png`} />
           <Box title='Internet Of Things' description='Get our intelligent systems technology to work for your business. Drive growth, drive sales, and get closer to what the customer wants.' img={`../services/inoft.png`} />
           <Box title='UI UX Design' description='Get blazing fast, responsive, highly scalable, and lean information systems allowing millions of users with surprisingly low server usage.' img={`../services/ui.png`} />
           <Box title='Data Science' description='Get blazing fast, responsive, highly scalable, and lean information systems allowing millions of users with surprisingly low server usage.' img={`../services/ds.png`} />

          </div>

          <div className='max-w-[1400px] m-auto mt-20 flex flex-col justify-center items-center'>
          <section className='flex flex-col justify-center items-center'>
               <h1 className='text-[#1382C7] font-bold text-[30px] leading-[39px]'>TECHNOLOGY STACK</h1>
               <p className='text-[20px]'>Latest and best</p>
               </section>
             
             <section className='max-w-[1000px] flex flex-wrap justify-center items-start'>
                 <Stack name='React' img={`../services/react.png`}/>
                 <Stack name='Flutter' img={`../services/flutter.png`}/>
                 <Stack name='Web' img={`../services/web.png`}/>
                 <Stack name='Android' img={`../services/android.png`}/>
                 <Stack name='Swift' img={`../services/swift.png`}/>
                 <Stack name='Node js' img={`../services/node.png`}/>
                 <Stack name='Amazon Web Services' img={`../services/aws.png`}/>
                 <Stack name='SQL' img={`../services/database.png`}/>
                 <Stack name='Firebase' img={`../services/firebase.png`}/>
                 <Stack name='Docker' img={`../services/docker.png`}/>

             </section>

          </div>

        </Layout>
    )
}

export default services
