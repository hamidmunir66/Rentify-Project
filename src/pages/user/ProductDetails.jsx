import React from "react";
import { productDetails, icons } from "../../data/data";
import ImageGallery from "../../component/products/ImageGallery";
import OwnerCard from "../../component/products/OwnerCard";
import ProductTabs from "../../component/products/ProductTabs";

const ProductDetails = () => {
  const Shield = icons.shield;
  const Location = icons.location;

  return (
    <>
      <div className="bg-gray-50 min-h-screen px-6 py-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <ImageGallery images={productDetails.images} />
            <ProductTabs
              description={productDetails.description}
              specs={productDetails.specs}
            />
          </div>

          <div className="space-y-6">
            <div className="border rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-semibold">{productDetails.title}</h2>

              <p className="text-blue-600 text-xl font-bold">
                ₹{productDetails.priceDay} / day
              </p>

              <p className="text-gray-500">
                ${productDetails.priceWeek}/week · ${productDetails.priceMonth}
                /month
              </p>

              <div className="flex items-center gap-2 text-gray-500">
                <Location />
                {productDetails.location}
              </div>

              <button className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-xl font-semibold">
                Request to Rent
              </button>

              <button className="w-full border py-3 rounded-xl cursor-pointer">
                Chat with Owner
              </button>
            </div>

            <div className="border rounded-2xl p-4 bg-green-50 flex gap-3">
              <Shield className="text-green-600 text-xl" />
              <p className="text-green-700 text-sm">
                Protected by Rentify's secure payment system
              </p>
            </div>

            <OwnerCard owner={productDetails.owner} />

            <div className="border rounded-2xl p-4 bg-orange-50 text-orange-700">
              {productDetails.safetyNote}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
