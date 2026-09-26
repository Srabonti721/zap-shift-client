import React from 'react'
import Banner from '../Banner'
import OurServices from './Servies/OurServices'
import ClientLogoMarquee from './ClientLogoMarquee/ClientLogoMarquee'
import HowItWork from './HowItWorkSction/HowItWork'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HowItWork/>
      <OurServices/>
      <ClientLogoMarquee/>
    </div>
  )
}

export default Home
