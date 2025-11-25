import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#dce7ff] via-[#eef3ff] to-[#dce7ff] px-4 overflow-hidden relative">

      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/40 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400/40 blur-[120px] rounded-full"></div>

      {/* CARD WRAPPER */}
      <div className="w-full max-w-5xl flex bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.20)] border border-white/40 overflow-hidden animate-fadeInUp">

        {/* LEFT SECTION */}
        <div className="hidden md:flex flex-col justify-center items-start w-1/2 px-12 py-16 bg-linear-to-br from-blue-600 to-blue-800 text-white relative">

          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 blur-[80px]"></div>

          {/* Welcome Content */}
          <h1 className="text-4xl font-bold drop-shadow-md">Welcome Back</h1>
          <p className="mt-4 text-lg text-blue-100">
            Your renting journey continues —  
            <br />
            <span className="font-semibold">Connect. Rent. Earn.</span>
          </p>

          {/* Quote */}
          <p className="mt-6 italic text-blue-200">
            “Rent anything you need. Earn from anything you own.”
          </p>

          {/* Illustration / Icon */}
          <img
            src="./images/3d-login.webp"
            className="w-64 mt-10 drop-shadow-xl"
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

          {/* Heading */}
          <h2 className="text-3xl font-semibold text-slate-800 mb-2">
            Sign In
          </h2>
          <p className="text-slate-500 mb-8">
            To access your rentals and listings
          </p>

          {/* Email field */}
          <div className="mb-5">
            <label className="text-slate-700 font-medium">Email Address</label>
            <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border border-slate-200 shadow-sm focus-within:border-blue-500 focus-within:shadow-blue-200 focus-within:shadow-md transition">
              <FontAwesomeIcon icon={faEnvelope} className="text-slate-500" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none text-slate-700"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="mb-5">
            <label className="text-slate-700 font-medium">Password</label>
            <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border border-slate-200 shadow-sm focus-within:border-blue-500 focus-within:shadow-blue-200 focus-within:shadow-md transition">
              <FontAwesomeIcon icon={faLock} className="text-slate-500" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-slate-700"
              />
              <FontAwesomeIcon icon={faEye} className="text-slate-500 cursor-pointer" />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <span className="text-slate-600 text-sm">Remember me</span>
            </div>
            <a className="text-blue-600 text-sm hover:underline cursor-pointer">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-300 hover:shadow-blue-400 transition">
            Log In
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-300"></div>
            <span className="text-slate-500">Or continue with</span>
            <div className="h-px flex-1 bg-slate-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center justify-center gap-3 w-1/2 py-3 rounded-lg bg-white border border-slate-200 shadow hover:shadow-md transition">
              <FontAwesomeIcon icon={faGoogle} className="text-slate-700" />
              <span className="font-medium text-slate-700">Google</span>
            </button>

            <button className="flex items-center justify-center gap-3 w-1/2 py-3 rounded-lg bg-white border border-slate-200 shadow hover:shadow-md transition">
              <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" />
              <span className="font-medium text-slate-700">Facebook</span>
            </button>
          </div>

          {/* Signup */}
          <p className="text-center text-slate-600 mt-6">
            Don't have an account?{" "}
            <a className="text-blue-600 font-medium hover:underline cursor-pointer">
              <Link to="/ChooseSignup">Sign up</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
