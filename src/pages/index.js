import React from 'react'
import Bannerhome from '../components/Home/Bannerhome'
import Layout from '../components/Layout'
import '../styles/Index.css'
import '../styles/Banner.css'


function index({dark , setDark}) {
  return (
    <div>
     <Layout>
       <Bannerhome dark={dark} setDark={setDark} />
     </Layout>
    </div>
  )
}

export default index
