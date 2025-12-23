import React from "react";
import { FiUser, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { rentalRequests } from "../../data/data";

const Requests = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6">Rental Requests</h2>

      <div className="space-y-4">
        {rentalRequests.map((req) => (
          <div
            key={req.id}
            className="flex items-center justify-between border rounded-xl p-4 hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FiUser className="text-blue-600 text-xl" />
              </div>

              <div>
                <p className="font-medium text-gray-900">{req.user}</p>
                <p className="text-sm text-gray-500">
                  {req.product} • {req.days} days
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-1 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition">
                <FiCheckCircle /> Accept
              </button>
              <button className="flex items-center gap-1 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition">
                <FiXCircle /> Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
