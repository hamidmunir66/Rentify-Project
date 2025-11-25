import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faLocationDot, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight'
import featuredListings from '../../API/FeaturedListings'

const FeaturdListing = () => {
  return (
    <div className='px-8 py-16 bg-gray-50'>
     
      <div className='flex flex-col mb-8 justify-center'>
        <h1 className='text-3xl font-semibold px-2 mx-2 my-1 '>Featured Listings </h1>
        <div className='flex justify-between px-2 mx-2'>
          <h2 >Handpicked items available near you </h2>
          <button className='text-blue-600 font-medium flex items-center gap-2 cursor-pointer '>View All <span> <FontAwesomeIcon icon={faArrowCircleRight} /> </span></button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {
          featuredListings.map((lis) => (
            <div className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative" key={lis.id}>
             
              <div className="relative overflow-hidden">
                <img
                  src={lis.image}
                  alt={lis.title}
                  className="w-full h-48 object-cover rounded-t-xl group-hover:scale-110 transition-all duration-500"
                />

               
                <div className="absolute inset-0 bg-black  opacity-1 group-hover:opacity-50 transition-all duration-300"></div>

              
                <button
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            bg-blue-600 text-white px-4 py-2 rounded-lg font-medium
            opacity-0 group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300 shadow-lg cursor-pointer"
                >
                  View Details
                </button>
              </div>
              {/* CONTENT */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{lis.title}</h3>

                <div className="text-blue-600 font-medium mt-2">
                  ${lis.priceDay}/Day <span className="text-gray-500">• ${lis.priceWeek}/Week</span>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm mt-3">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {lis.location}
                </div>

                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-300">
                  <span className="text-gray-700">{lis.owner}</span>
                  <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                    <FontAwesomeIcon icon={faStar} /> {lis.rating}
                  </span>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FeaturdListing
