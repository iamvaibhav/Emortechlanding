import React from 'react'
import Bannerhome from '../components/Home/Bannerhome'
import Layout from '../components/Layout'
import '../styles/Index.css'
import '../styles/Banner.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/themeContext'


function index() {
  return (
    <ThemeProvider>
    <Header />
    <Bannerhome />
    <Footer />
    </ThemeProvider>
  )
}

export default index
