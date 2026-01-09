import React from 'react'
import Hero from '../../component/user/Hero'
import BrowseCatogories from '../../component/common/BrowseCatogories'
import FeaturedListing from '../../component/user/FeaturedListing'
import WhyChooseUs from '../../component/common/WhyChooseUs'

const UserHome = () => {
  return (
    <>
      <Hero/>
      <BrowseCatogories/>
      <FeaturedListing/>
      <WhyChooseUs/>
    </>
  )
}

export default UserHome
