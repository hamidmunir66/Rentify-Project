import React from "react";
import { howItWorksSteps } from "../../data/data";
import HowItWorksCard from "../../component/ui/cards/HowItWorksCard";
import Navbar from "../../component/user/Navbar";
import Footer from "../../component/common/Footer";

const HowItWorks = () => {
  return (
    <>
    
      <div className="min-h-screen bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-22">
          <section className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500">
              How Rentify Works
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              A simple, secure, and smart way to rent or earn — designed for
              everyone.
            </p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {howItWorksSteps.map((step, i) => (
              <HowItWorksCard key={step.id} {...step} index={i + 1} />
            ))}
          </section>

          <section className="text-center bg-linear-to-r from-blue-600 to-cyan-500 rounded-3xl p-14 shadow-2xl text-white">
            <h2 className="text-3xl font-bold mb-4">
              Start Renting Smarter Today
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Whether you want to save money or earn from what you own, Rentify
              makes it effortless.
            </p>
          </section>
        </div>
      </div>
      
    </>
  );
};

export default HowItWorks;
