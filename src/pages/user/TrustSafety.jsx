import React from "react";
import { trustSafetyFeatures, trustStatement } from "../../data/data";
import TrustCard from "../../component/ui/cards/TrustCard";
import { FaShieldAlt } from "react-icons/fa";
import Navbar from "../../component/user/Navbar";
import Footer from "../../component/common/Footer";

const TrustSafety = () => {
  return (
    <>
    <Navbar/>
    
    <div className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-20">

        <section className="text-center space-y-6">
          <FaShieldAlt className="mx-auto text-5xl text-blue-600" />
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Trust & Safety
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Built with security, transparency, and protection at every step.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {trustSafetyFeatures.map((item) => (
            <TrustCard key={item.id} {...item} />
          ))}
        </section>

        <section
          className="
            bg-gradient-to-r from-blue-600 to-cyan-500
            rounded-3xl p-14
            shadow-2xl text-center text-white
          "
        >
          <h2 className="text-3xl font-bold mb-4">
            {trustStatement.title}
          </h2>
          <p className="max-w-3xl mx-auto text-white/90 text-lg">
            {trustStatement.text}
          </p>
        </section>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TrustSafety;
