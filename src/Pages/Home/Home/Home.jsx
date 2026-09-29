import React from 'react'
import Banner from '../Banner'
import OurServices from './Servies/OurServices'
import ClientLogoMarquee from './ClientLogoMarquee/ClientLogoMarquee'
import HowItWork from './HowItWorkSction/HowItWork'
import Features from './Features'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HowItWork/>
      <OurServices/>
      <ClientLogoMarquee/>
      <Features/>
    </div>
  )
}

export default Home
