import React from "react";
import MerchantHero from "../../component/merchant/MerchantHero";
import BrowseCategories from "../../component/common/BrowseCatogories";
import FeaturedListing from "../../component/user/FeaturedListing";

const MerchantHome = () => {
  return (
    <>
      <MerchantHero />
      <BrowseCategories/>
      <FeaturedListing/>
    </>
  );
};

export default MerchantHome;
