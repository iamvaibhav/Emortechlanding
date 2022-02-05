import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ThemeProvider } from './themeContext'

function Layout(props) {

    const [chat , setChat] = useState(false)

    return (
        <div>
            <ThemeProvider>
            <Header chat={chat} setChat={setChat} />
            {props.children}
            <Footer chat={chat} setChat={setChat} />
            </ThemeProvider>
        </div>
    )
}

export default Layout
