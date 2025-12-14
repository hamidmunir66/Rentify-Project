import React from "react";

const SafetyCard = ({ title, description, icon: Icon }) => {
  return (
    <>
      <div
        className="
        bg-white rounded-3xl p-8
        border border-blue-100
        shadow-xl hover:shadow-2xl
        transform hover:-translate-y-2
        transition-all duration-300"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg mb-6">
          <Icon className="text-2xl" />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </>
  );
};

export default SafetyCard;
