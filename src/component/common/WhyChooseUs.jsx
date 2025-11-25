import { faCheckCircle  } from '@fortawesome/free-regular-svg-icons';
import { faHeadset, faLock, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


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

        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faLock} className="text-yellow-600 text-4xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Secure Transactions</h2>
          <p className="text-gray-600 mt-2">
            All payments are processed securely with complete buyer protection.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 text-4xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Verified Owners</h2>
          <p className="text-gray-600 mt-2">
            Every owner is ID verified and approved to ensure safe rentals.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faHeadset} className="text-blue-500 text-4xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">24/7 Support</h2>
          <p className="text-gray-600 mt-2">
            Our team is available anytime to help answer your questions.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faMoneyBill} className="text-blue-500 text-4xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Earn Passive Amount</h2>
          <p className="text-gray-600 mt-2">
            Let your unused items work for you by renting them out and earning extra income.
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
