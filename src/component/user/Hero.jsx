import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'
import herosideimage from '../../assets/images/hero-cover.jfif'

const Hero = () => {
  return (
    <>
     
      <div className="w-full grid grid-cols-2 gap-3 px-8 py-6">
       
        <div className="left-hero  ">
        
          <div className=" space-y-2 my-10 py-10 mx-6 px-8">
            <h1 className="text-6xl font-bold">Turn Your Unused</h1>
            <h1 className="text-6xl font-bold">
              Items Into <span className="text-blue-600">Income</span>{' '}
            </h1>
            <h2 className="font-semibold ">
              Rent Anything. <span className="px-1 text-blue-600">Anytime.</span>{' '}
              <span>
                Near <span className="text-blue-600">You.</span>
              </span>{' '}
            </h2>
            <div>
              <p className="font-medium py-1">
                Join Pakistan's most trusted peer-to-peer rental marketplace. Rent what you need,
                earn from what you own.
              </p>
            </div>
          </div>
        

          <div className="bg-white flex items-center rounded-2xl shadow-lg px-6 py-3 w-[95%] max-w-4xl border border-gray-200">
           
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-xl" />
           
            <input
              type="text"
              placeholder="What are you looking for?"
              className="ml-4 focus:outline-none w-full text-gray-700 "
            />
           
            <div className="border-r border-gray-300 h-8 mx-4"></div>
            
            <FontAwesomeIcon icon={faLocationDot} className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Location"
              className="ml-3 w-32 focus:outline-none text-gray-700"
            />
            
            <button className="bg-blue-600  text-white  ml-6  px-6  py-2  rounded-xl  hover:bg-blue-700 transition font-semibold cursor-pointer">
              Search
            </button>
          </div>
        </div>
        <div className="side-logo">
          <img src={herosideimage} alt="Hero Cover" className="rounded-2xl object-center" />
        </div>
      </div>
    </>
  )
}

export default Hero
