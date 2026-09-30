import React from 'react'
import Banner from '../Banner'
import OurServices from './Servies/OurServices'
import ClientLogoMarquee from './ClientLogoMarquee/ClientLogoMarquee'
import HowItWork from './HowItWorkSction/HowItWork'
import Features from './Features'
import BeMerchant from './BeMerchant'
import Faq from './Faq'
import Reviews from './Reviews'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HowItWork/>
      <OurServices/>
      <ClientLogoMarquee/>
      <Features/>
      <BeMerchant/>
      <Reviews/>
      <Faq/>
    </div>
  )
}

export default Home
