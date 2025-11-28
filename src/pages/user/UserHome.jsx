import React from 'react'
import Hero from '../../component/user/Hero'
import BrowseCatogories from '../../component/common/BrowseCatogories'
import FeaturdListing from '../../component/user/FeaturdListing'
import WhyChooseUs from '../../component/common/WhyChooseUs'

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
