import React from "react";
import {
  aboutHighlights,
  roleDetails,
  whyRentify,
  vision,
  checkIcon,
} from "../../data/data.js";
import AboutCard from "../../component/ui/cards/AboutCard.jsx";
import Navbar from "../../component/user/Navbar.jsx";
import Footer from "../../component/common/Footer.jsx";

const About = () => {
  const CheckIcon = checkIcon;

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-20">

        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            About Rentify
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Rentify is a modern rental marketplace designed to help people rent smart and earn more.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutHighlights.map((item, i) => (
            <AboutCard key={i} {...item} />
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              One Platform. Three Roles.
            </h2>
            <p className="text-gray-600">
              Rentify is built for everyone in the rental ecosystem.
            </p>

            <div className="space-y-4">
              {roleDetails.map((role, i) => (
                <div key={i} className="flex items-center gap-4">
                  <role.icon className="text-blue-600 text-xl" />
                  <span className="text-gray-700">{role.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border border-blue-100 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Why Rentify?
            </h3>
            <ul className="space-y-4">
              {whyRentify.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckIcon className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="text-center space-y-6">
          <vision.icon className="mx-auto text-5xl text-blue-600" />
          <h2 className="text-3xl font-semibold text-gray-900">
            {vision.title}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            {vision.text}
          </p>
        </section>

        <section className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 shadow-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Rent Smart. Earn More. Live Better.
          </h2>
          <p className="text-white/90 text-lg">
            Rentify is not just a platform — it’s a smarter way to use resources.
          </p>
        </section>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
