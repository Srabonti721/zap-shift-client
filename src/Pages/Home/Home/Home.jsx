import React from 'react'
import Banner from '../Banner'
import OurServices from './Servies/OurServices'
import ClientLogoMarquee from './ClientLogoMarquee/ClientLogoMarquee'
import HowItWork from './HowItWorkSction/HowItWork'
import Features from './Features'
import BeMerchant from './BeMerchant'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HowItWork/>
      <OurServices/>
      <ClientLogoMarquee/>
      <Features/>
      <BeMerchant/>
    </div>
  )
}

export default Home
