import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/common/Footer";
import MerchantNavbar from "../component/merchant/MerchantNavbar";

const MerchantLayout = () => {
  return (
    <>
      <MerchantNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MerchantLayout;
