import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLocationDot,
  faIdCard,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserSignup = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#dce7ff] via-[#eef3ff] to-[#dce7ff] px-4 overflow-hidden relative">

      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/40 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400/40 blur-[120px] rounded-full"></div>

      {/* WRAPPER CARD */}
      <div className="w-full max-w-6xl flex bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.20)] border border-white/40 overflow-hidden animate-fadeInUp">

        {/* LEFT SECTION */}
        <div className="hidden md:flex flex-col justify-center items-start w-1/2 px-12 py-16 bg-linear-to-br from-blue-600 to-blue-800 text-white relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 blur-[80px]"></div>

          <h1 className="text-4xl font-bold">Create Your Account</h1>

          <p className="mt-4 text-blue-100 text-lg">
            Join the Rentify community —
            <br /> Find the best rentals near you.
          </p>

          <p className="mt-6 italic text-blue-200">
            “Your next rental is just a click away.”
          </p>

          <img
            src="/images/3d-signup.webp"
            className="w-72 mt-10 drop-shadow-xl"
          />
        </div>

        {/* RIGHT SECTION — FORM */}
        <div className="w-full md:w-1/2 p-10 animate-slideIn">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-300 border border-blue-400/40">
              <Link to="/">R</Link>
            </div>
            <h1 className="text-3xl font-semibold text-slate-800 tracking-wide">
              <Link to="/">Rentify</Link>
            </h1>
          </div>

          <h2 className="text-3xl font-semibold text-slate-800 mb-2">
            User Sign Up
          </h2>
          <p className="text-slate-500 mb-8">Create your personal account</p>

          {/* INPUT FIELDS */}
          <div className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="text-slate-700 font-medium">Full Name</label>
              <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border border-slate-200 shadow-sm focus-within:border-blue-500 transition">
                <FontAwesomeIcon icon={faUser} className="text-slate-500" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent outline-none text-slate-700"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-slate-700 font-medium">Email</label>
              <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border border-slate-200 shadow-sm">
                <FontAwesomeIcon icon={faEnvelope} className="text-slate-500" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent outline-none text-slate-700"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-slate-700 font-medium">Phone</label>
              <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border border-slate-200 shadow-sm">
                <FontAwesomeIcon icon={faPhone} className="text-slate-500" />
                <input
                  type="text"
                  placeholder="03XX-XXXXXXX"
                  className="w-full bg-transparent outline-none text-slate-700"
                />
              </div>
            </div>

            {/* CNIC */}
            <div>
              <label className="text-slate-700 font-medium">CNIC</label>
              <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border border-slate-200 shadow-sm">
                <FontAwesomeIcon icon={faIdCard} className="text-slate-500" />
                <input
                  type="text"
                  placeholder="35202-XXXXXXX-X"
                  className="w-full bg-transparent outline-none text-slate-700"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="text-slate-700 font-medium">Location</label>
              <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border border-slate-200 shadow-sm">
                <FontAwesomeIcon icon={faLocationDot} className="text-slate-500" />
                <input
                  type="text"
                  placeholder="City / Area"
                  className="w-full bg-transparent outline-none text-slate-700"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-slate-700 font-medium">Password</label>
              <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border border-slate-200 shadow-sm">
                <FontAwesomeIcon icon={faLock} className="text-slate-500" />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full bg-transparent outline-none text-slate-700"
                />
              </div>
            </div>

            <button className="w-full py-3 mt-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-300 transition">
              Create Account
            </button>

            <p className="text-center text-slate-600 mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-medium hover:underline">
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
