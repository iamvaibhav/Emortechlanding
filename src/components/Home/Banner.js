import React from 'react'
import Footer from '../Footer'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'

function Banner() {
    return (
        <>
        <main>
            <h1>
            The perfect platform to deliver your IT Project
            </h1>
            <h2>We hold expertize in building intelligent, highly scalable, and elegant systems</h2>
        </main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        </>
    )
}

export default Banner
