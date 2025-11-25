import React from "react";
import { motion } from "framer-motion";
import Footer from "../Component/common/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#dce7ff] via-[#eef3ff] to-[#dce7ff] px-6 py-16 relative overflow-hidden">

      {/* Background Blur Bubbles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/40 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400/40 blur-[120px] rounded-full"></div>

      {/* MAIN CONTAINER */}
      <div className="relative max-w-6xl mx-auto space-y-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-slate-800 mb-4">About Rentify</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Rent anything. Anytime. Anywhere.  
            A smart way to choose convenience over ownership.
          </p>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="/images/about-hero.webp"
          alt="Rentify 3D Illustration"
          className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg shadow-blue-200"
        />

        {/* WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-white/40"
        >
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">Who We Are</h2>
          <p className="text-slate-600 leading-relaxed">
            Rentify is a modern rental marketplace built for convenience.  
            We bridge the gap between people who need something temporarily  
            and those who want to earn by renting their unused items.
          </p>
        </motion.div>

        {/* OUR MISSION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-white/40"
        >
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            Our mission is to make renting a trusted and accessible experience.  
            We want to reduce unnecessary purchases, encourage reuse,  
            and empower people to earn effortlessly.
          </p>
        </motion.div>

        {/* CORE VALUES */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Trust & Safety",
              desc: "Verified users, secure transactions and transparent communication.",
            },
            {
              title: "Convenience",
              desc: "Find anything you need — effortlessly and instantly.",
            },
            {
              title: "Opportunity",
              desc: "Turn unused things into a source of income.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-md border border-white/40 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{v.title}</h3>
              <p className="text-slate-600">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* OUR JOURNEY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-blue-600 text-white p-12 rounded-3xl shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-2">Our Journey Just Started</h2>
          <p className="text-blue-100 text-lg">
            We’re building something meaningful — and you are part of it.
          </p>
        </motion.div>

      </div>
     
    </div>
  );
};

export default About;
