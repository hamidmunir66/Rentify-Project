import React from 'react'
import Hero from './Hero'
import BrowseCatogories from '../common/BrowseCatogories'
import FeaturdListing from './FeaturdListing'
import WhyChooseUs from '../common/WhyChooseUs'

const UserHome = () => {
  return (
    <div>
      <Hero/>
      <BrowseCatogories/>
      <FeaturdListing/>
      <WhyChooseUs/>
    </div>
  )
}

export default UserHome
