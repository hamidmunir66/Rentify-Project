import React from "react";
import { icons } from "../../data/data";

const OwnerCard = ({ owner }) => {
  const Star = icons.star;

  return (
    <>
      <div className="border rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">
            {owner.name[0]}
          </div>
          <div>
            <h4 className="font-semibold">{owner.name}</h4>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Star className="text-yellow-400" />
              {owner.rating}
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Member since {owner.memberSince}
        </p>
      </div>
    </>
  );
};

export default OwnerCard;
