import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ThemeProvider } from './themeContext'

function Layout(props) {

    return (
        <div>
            <ThemeProvider>
            <Header />
            {props.children}
            <Footer />
            </ThemeProvider>
        </div>
    )
}

export default Layout
