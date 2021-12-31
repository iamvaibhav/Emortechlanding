import React from 'react'
import Banner from '../components/Home/Banner'
import Layout from '../components/Layout'
import '../styles/Index.css'
import '../styles/SectionOne.css'
import '../styles/Banner.css'


function index() {
  return (
    <div>
     <Layout>
       <Banner />
     </Layout>
    </div>
  )
}

export default index
