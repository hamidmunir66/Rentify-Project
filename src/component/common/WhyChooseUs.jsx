import { chooseUsData } from '../../data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WhyChooseUs = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Why Choose Rentify?</h1>
        <p className="text-blue-600 mt-2">
          We've built the most secure and user-friendly rental marketplace in Pakistan
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {chooseUsData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={item.icon} className={`${item.iconColor} text-4xl`} />
            </div>

            <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>

            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
