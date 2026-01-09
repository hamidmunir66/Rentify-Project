import React from "react";

const HowItWorksCard = ({ title, description, icon: Icon, index }) => {
  return (
    <>
      <div
        className="
        relative bg-white rounded-3xl p-8
        border border-blue-100
        shadow-xl hover:shadow-2xl
        transform hover:-translate-y-2
        transition-all duration-300
      "
      >
        <div className="absolute -top-5 -left-5 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-lg font-bold shadow-lg">
          {index}
        </div>

        <Icon className="text-4xl text-blue-600 mb-6" />

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </>
  );
};

export default HowItWorksCard;
