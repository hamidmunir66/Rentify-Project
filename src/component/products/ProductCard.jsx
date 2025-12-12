import React from "react";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <>
      <Link
        to="#"
        className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-[0_6px_20px_rgba(13,38,76,0.06)] hover:shadow-[0_12px_40px_rgba(13,38,76,0.12)] transition-transform transform hover:-translate-y-1"
      >
        <div className="h-56 w-full overflow-hidden bg-gray-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {item.name}
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-blue-600 font-bold text-lg">
                ₹{item.price}
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                <FaLocationDot className="text-blue-600" />
                <span>{item.city}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                {item.condition}
              </div>

              <div className="flex items-center justify-end gap-1 mt-3 text-yellow-500 font-semibold">
                <FaStar />
                <span className="text-sm">{item.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
