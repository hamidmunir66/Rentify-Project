import React from "react";
import { Link } from "react-router-dom";
import { browseCategories } from "../../data/data";

const BrowseCategories = () => {
  return (
    <>
      <div className="flex flex-col p-8 m-4 justify-center items-center bg-white">
        <h1 className="text-4xl font-bold">Browse Popular Categories</h1>
        <h3 className="font-semibold p-1 m-1">
          Find exactly what you're looking for
        </h3>
      </div>

      <div className="Cards flex justify-center flex-wrap gap-6 py-10">
        {browseCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link to={`/marketplace?category=${cat.slug}`} key={cat.id}>
              <div className="w-52 h-48 bg-white border border-gray-200 rounded-2xl flex flex-col items-center justify-center shadow-sm cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white">
                <div className="bg-gray-50 py-4 px-4 rounded-xl mt-4">
                  <Icon className="text-4xl p-1 text-blue-600" />
                </div>
                <p className="p-2 text-lg">{cat.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BrowseCategories;
