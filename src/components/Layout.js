import React from 'react'
import Header from './Header'
import '../styles/Header.css'
import Footer from './Footer'
import '../styles/Footer.css'

function Layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
