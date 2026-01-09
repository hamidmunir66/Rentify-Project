import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons"
import HeroSlider from "./HeroSlider"

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 px-8 py-10">
      <div className="flex flex-col justify-center space-y-8 px-6">
        <div className="space-y-3">
          <h1 className="text-6xl font-bold text-gray-900">
            Turn Your Unused
          </h1>
          <h1 className="text-6xl font-bold">
            Items Into <span className="text-blue-600">Income</span>
          </h1>
          <h2 className="font-semibold text-gray-700">
            Rent Anything. <span className="text-blue-600">Anytime.</span> Near{" "}
            <span className="text-blue-600">You.</span>
          </h2>
          <p className="font-medium text-gray-600 max-w-xl">
            Join Pakistan's most trusted peer-to-peer rental marketplace. Rent
            what you need, earn from what you own.
          </p>
        </div>

        <div className="bg-white flex items-center rounded-2xl shadow-lg px-6 py-3 w-full max-w-3xl border border-gray-200">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="ml-4 focus:outline-none w-full text-gray-700"
          />
          <div className="border-r border-gray-300 h-8 mx-4" />
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-gray-500 text-xl"
          />
          <input
            type="text"
            placeholder="Location"
            className="ml-3 w-32 focus:outline-none text-gray-700"
          />
          <button className="bg-blue-600 text-white ml-6 px-6 py-2 rounded-xl hover:bg-blue-700 transition font-semibold">
            Search
          </button>
        </div>
      </div>

      <HeroSlider />
    </div>
  )
}

export default Hero
