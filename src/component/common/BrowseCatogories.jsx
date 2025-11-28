import { faCar, faMobileScreen, faTools } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const BrowseCatogories = () => {
  return (
    <>
      {/* Browse Categories Section */}
      {/*Text Area*/}
      <div className="flex flex-col p-8 m-4 justify-center items-center bg-white">
        <h1 className="text-4xl font-bold">Browse Popular Categories</h1>
        <h3 className="font-semibold p-1 m-1">Find exactly what you're looking for</h3>
      </div>
      {/* Categories Grid */}
      <div className="Cards flex justify-center flex-wrap gap-6 py-10">
        {/* Electronics */}
        <div>
          <div
            className="w-52 h-48  bg-white border border-gray-200 rounded-2xl 
                                   flex flex-col items-center justify-center shadow-sm cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            <div className=" bg-gray-50 py-4 px-4 rounded-xl mt-4  ">
              <FontAwesomeIcon icon={faMobileScreen} className="text-4xl p-1 text-blue-600 r" />
            </div>
            <p className="p-2  text-lg">Electronics</p>
          </div>
        </div>
        {/* Tools */}
        <div>
          <div
            className="w-52 h-48  bg-white border border-gray-200 rounded-2xl 
                                   flex flex-col items-center justify-center shadow-sm cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            <div className=" bg-gray-50 py-4 px-4 rounded-xl mt-4  ">
              <FontAwesomeIcon icon={faTools} className="text-4xl p-1 text-blue-600 r" />
            </div>
            <p className="p-2  text-lg">Tools</p>
          </div>
        </div>
        {/* Vehicles */}
        <div>
          <div
            className="w-52 h-48  bg-white border border-gray-200 rounded-2xl 
                                   flex flex-col items-center justify-center shadow-sm cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            <div className=" bg-gray-50 py-4 px-4 rounded-xl mt-4  ">
              <FontAwesomeIcon icon={faCar} className="text-4xl p-1 text-blue-600 r" />
            </div>
            <p className="p-2  text-lg">Vehicles</p>
          </div>
        </div>
        <div>
          <div
            className="w-52 h-48  bg-white border border-gray-200 rounded-2xl 
                                   flex flex-col items-center justify-center shadow-sm cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            <div className=" bg-gray-50 py-4 px-4 rounded-xl mt-4  ">
              <FontAwesomeIcon icon={faMobileScreen} className="text-4xl p-1 text-blue-600 r" />
            </div>
            <p className="p-2  text-lg">Electronics</p>
          </div>
        </div>
        <div>
          <div
            className="w-52 h-48  bg-white border border-gray-200 rounded-2xl 
                                   flex flex-col items-center justify-center shadow-sm cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            <div className=" bg-gray-50 py-4 px-4 rounded-xl mt-4  ">
              <FontAwesomeIcon icon={faMobileScreen} className="text-4xl p-1 text-blue-600 r" />
            </div>
            <p className="p-2  text-lg">Electronics</p>
          </div>
        </div>
        <div>
          <div
            className="w-52 h-48  bg-white border border-gray-200 rounded-2xl 
                                   flex flex-col items-center justify-center shadow-sm cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            <div className=" bg-gray-50 py-4 px-4 rounded-xl mt-4  ">
              <FontAwesomeIcon icon={faMobileScreen} className="text-4xl p-1 text-blue-600 r" />
            </div>
            <p className="p-2  text-lg">Electronics</p>
          </div>
        </div>
        <div>
          <div
            className="w-52 h-48  bg-white border border-gray-200 rounded-2xl 
                                   flex flex-col items-center justify-center shadow-sm cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            <div className=" bg-gray-50 py-4 px-4 rounded-xl mt-4  ">
              <FontAwesomeIcon icon={faMobileScreen} className="text-4xl p-1 text-blue-600 r" />
            </div>
            <p className="p-2  text-lg">Electronics</p>
          </div>
        </div>
        <div>
          <div
            className="w-52 h-48  bg-white border border-gray-200 rounded-2xl 
                                   flex flex-col items-center justify-center shadow-sm cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            <div className=" bg-gray-50 py-4 px-4 rounded-xl mt-4  ">
              <FontAwesomeIcon icon={faMobileScreen} className="text-4xl p-1 text-blue-600 r" />
            </div>
            <p className="p-2  text-lg">Electronics</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BrowseCatogories
