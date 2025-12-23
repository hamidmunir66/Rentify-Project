import React from "react";
import MerchantHero from "../../component/merchant/MerchantHero";
import MyListings from "../../component/merchant/MyListings";
import WhyChooseUs from '../../component/common/WhyChooseUs'


const MerchantHome = () => {
  return (
    <>
      <MerchantHero />
      <WhyChooseUs/>
      <MyListings/>
    </>
  );
};

export default MerchantHome;
