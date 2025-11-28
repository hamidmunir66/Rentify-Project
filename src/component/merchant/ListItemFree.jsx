import React from 'react'

const ListItemFree = () => {
  return (
    <>
      <div className="bg-blue-600 w-full h-80 mb-8">
        <div className="flex flex-col items-center justify-center text-white w-1/2 mx-auto h-full text-center space-y-4">
          <h2 className="mt-8">Start Earning – List Your Item</h2>
          <p className="mb-8">
            Have items sitting idle? Turn them into income! List your electronics, tools, vehicles,
            or equipment and connect with renters in your area.
          </p>
          <button
            className="bg-white text-blue-600 rounded-2xl px-3 py-2 
                    font-medium  "
          >
            List Your Item For Free
          </button>
        </div>
      </div>
    </>
  )
}

export default ListItemFree
