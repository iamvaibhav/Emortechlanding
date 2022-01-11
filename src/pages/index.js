import React from 'react'
import Bannerhome from '../components/Home/Bannerhome'
import Layout from '../components/Layout'
import '../styles/Index.css'
import '../styles/Banner.css'


function index() {
  return (
    <div>
     <Layout>
       <Bannerhome />
     </Layout>
    </div>
  )
}

export default index
