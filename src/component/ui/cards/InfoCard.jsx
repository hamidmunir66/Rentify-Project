import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const InfoCard = ({ icon, title, description, iconColor }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={icon} className={`${iconColor} text-4xl`} />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </>
  )
}

export default InfoCard
