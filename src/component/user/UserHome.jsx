import React from 'react'
import Hero from './Hero'
import BrowseCatogories from '../common/BrowseCatogories'
import FeaturdListing from './FeaturdListing'
import WhyChooseUs from '../common/WhyChooseUs'

const UserHome = () => {
  return (
    <>
      <Hero/>
      <BrowseCatogories/>
      <FeaturdListing/>
      <WhyChooseUs/>
    </>
  )
}

export default UserHome
