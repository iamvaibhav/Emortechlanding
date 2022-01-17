import React from 'react'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Sectionbox from '../components/Portfolio/Sectionbox'

function portfolio() {
    return (
       <Layout>
      
      <Banner title='Portfolio' img={`./portfolio.png`}/>
      <div className='w-screen sm:max-w-[1400px] m-auto flex flex-wrap justify-center items-center mt-20'>
      <Sectionbox name='Touch Type Racing' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu, lectus ac venenatis dolor. Morbi lectus pellentesque augue augue iaculis adipiscing.' img='../portfolio/tt.png' tag1='Web development' tag2='Online Multiplayer Game' tag3='UI UX Design' />
      <Sectionbox name='Smart Alarm' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu, lectus ac venenatis dolor. Morbi lectus pellentesque augue augue iaculis adipiscing.' img='../portfolio/tt.png' tag1='App development' tag2='Daily Essential' tag3='UI UX Design' />
      <Sectionbox name='Touch Type Racing' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu, lectus ac venenatis dolor. Morbi lectus pellentesque augue augue iaculis adipiscing.' img='../portfolio/tt.png' tag1='Web development' tag2='Online Multiplayer Game' tag3='UI UX Design' />
      <Sectionbox name='Smart Alarm' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu, lectus ac venenatis dolor. Morbi lectus pellentesque augue augue iaculis adipiscing.' img='../portfolio/tt.png' tag1='App development' tag2='Daily Essential' tag3='UI UX Design' />
      <Sectionbox name='Touch Type Racing' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu, lectus ac venenatis dolor. Morbi lectus pellentesque augue augue iaculis adipiscing.' img='../portfolio/tt.png' tag1='Web development' tag2='Online Multiplayer Game' tag3='UI UX Design' />
      <Sectionbox name='Smart Alarm' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu, lectus ac venenatis dolor. Morbi lectus pellentesque augue augue iaculis adipiscing.' img='../portfolio/tt.png' tag1='App development' tag2='Daily Essential' tag3='UI UX Design' />
      </div>

       </Layout>
    )
}

export default portfolio
