import React from "react";
import { Link } from "react-router-dom";
import { merchantListings } from "../../data/data";
import { statusColor } from "../../data/data";

import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";

const MyListings = () => {
  return (
    <>
      <div className="px-8 py-14 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">My Listings</h2>

          <Link
            to="/merchant/add-listing"
            className="bg-blue-600 text-white px-6 py-2 rounded-2xl font-medium hover:bg-blue-700 transition"
          >
            + Add New Listing
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {merchantListings.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-blue-600 font-medium">
                  ${item.priceDay}/day . ${item.priceWeek}/week
                </p>
                <p className="text-sm text-gray-500">{item.location}</p>
                <span
                  className={`inline-block text-xs px-3 py-1 rounded-full 
                    ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Rented"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                >
                  {item.status}
                </span>
                <div className="flex justify-between items-center pt-8">
                  <Link
                    to={`/productdetails/${item.id}`}
                    className="flex items-center text-sm gap-1 text-blue-600 hover:underline"
                  >
                    <FiEye /> View
                  </Link>
                  <div className="flex gap-3">
                    <button className="text-gray-600 hover:text-blue-600">
                      <FiEdit />
                    </button>
                    <button className="text-gray-600 hover:text-red-600">
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyListings;
