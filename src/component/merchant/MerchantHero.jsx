import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faChartLine } from "@fortawesome/free-solid-svg-icons";
import HeroSlider from "../user/HeroSlider";

const MerchantHero = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 px-8 py-12">
      <div className="flex flex-col justify-center space-y-10 px-6">
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Turn Your Assets
          </h1>
          <h1 className="text-6xl font-extrabold">
            Into <span className="text-blue-600">Monthly Income</span>
          </h1>
          <h2 className="text-lg font-semibold text-gray-700">
            List. Rent. Earn.{" "}
            <span className="text-blue-600">Effortlessly.</span>
          </h2>
          <p className="font-medium text-gray-600 max-w-xl">
            Rentify empowers merchants to monetize unused items, manage
            bookings, and grow rental income — all from one powerful dashboard.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          <Link
            to="/merchant/add-listing"
            className="flex items-center gap-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-[0_15px_40px_rgba(59,130,246,0.4)] hover:scale-[1.03] transition-transform"
          >
            <FontAwesomeIcon icon={faPlusCircle} />
            List Your First Item — Free
          </Link>

          <Link
            to="/merchant/dashboard"
            className="flex items-center gap-3 px-8 py-3 rounded-2xl font-semibold text-lg border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
          >
            <FontAwesomeIcon icon={faChartLine} />
            View Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-8 pt-4 text-sm text-gray-500">
          <span>✔ No listing fees</span>
          <span>✔ Full control</span>
          <span>✔ Secure payments</span>
        </div>
      </div>

      <HeroSlider />
    </div>
  );
};

export default MerchantHero;
