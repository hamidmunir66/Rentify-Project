import React, { useState } from "react";
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
import signupsideimage from "../../assets/images/3d-signup.webp";

const UserSignup = () => {
  const [formdata, setformdata] = useState({
    fullName: "",
    email: "",
    phone: "",
    cnic: "",
    location: "",
    password: "",
  });
  const [errors, seterrors] = useState({});

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });

    seterrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formdata.fullName.trim()) {
      newErrors.fullName = "Name is required";
    } else if (formdata.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }
    if (!formdata.password.trim()) {
      newErrors.password = "Password is required";
    } else {
      const password = formdata.password.trim();
      const regex =
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

      if (!regex.test(password)) {
        newErrors.password =
          "Password must be at least 8 characters, include one uppercase letter and one special character";
      }
    }

    if (!formdata.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formdata.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{11}$/.test(formdata.phone)) {
      newErrors.phone = "Phone must be 11 digits";
    }

    if (!formdata.cnic.trim()) {
      newErrors.cnic = "CNIC is required";
    } else {
      const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
      if (!cnicRegex.test(formdata.cnic.trim())) {
        newErrors.cnic = "CNIC must be in the format XXXXX-XXXXXXX-X";
      }
    }

    if (!formdata.location.trim()) {
      newErrors.location = "Location is required";
    }

    seterrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Validated Data:", formdata);
  };

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#dce7ff] via-[#eef3ff] to-[#dce7ff] px-4 overflow-hidden relative">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400/40 blur-[120px] rounded-full"></div>

        <div className="w-full max-w-6xl flex bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.20)] border border-white/40 overflow-hidden animate-fadeInUp">
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

            <img src={signupsideimage} className="w-72 mt-10 drop-shadow-xl" />
          </div>

          <div className="w-full md:w-1/2 p-10 animate-slideIn">
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
            {/* Form Data*/}
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label className="text-slate-700 font-medium">
                    Full Name
                  </label>
                  <div
                    className={`flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border shadow-sm focus-within:border-blue-500 transition ${
                      errors.fullName ? "border-red-500" : "border-slate-200"
                    }`}
                  >
                    <FontAwesomeIcon icon={faUser} className="text-slate-500" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Hamid Munir"
                      value={formdata.fullName}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-slate-700 "
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 font-medium">Email</label>
                  <div
                    className={`flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border shadow-sm ${
                      errors.email ? "border-red-500" : "border-slate-200"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-slate-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="hamid@gmail.com"
                      value={formdata.email}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-slate-700 "
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 font-medium">Phone</label>
                  <div
                    className={`flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border shadow-sm ${
                      errors.phone ? "border-red-500" : "border-slate-200"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-slate-500"
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="03XX-XXXXXXX"
                      value={formdata.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-slate-700 "
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 font-medium">CNIC</label>
                  <div
                    className={`flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border shadow-sm ${
                      errors.cnic ? "border-red-500" : "border-slate-200"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faIdCard}
                      className="text-slate-500"
                    />
                    <input
                      type="text"
                      name="cnic"
                      placeholder="35202-XXXXXXX-X"
                      value={formdata.cnic}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-slate-700 "
                    />
                    {errors.cnic && (
                      <p className="text-red-500 text-sm mt-1">{errors.cnic}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 font-medium">Location</label>
                  <div
                    className={`flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border shadow-sm ${
                      errors.location ? "border-red-500" : "border-slate-200"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-slate-500"
                    />
                    <input
                      type="text"
                      name="location"
                      placeholder="City / Area"
                      value={formdata.location}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-slate-700"
                    />
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 font-medium">Password</label>
                  <div
                    className={`flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border shadow-sm ${
                      errors.password ? "border-red-500" : "border-slate-200"
                    }`}
                  >
                    <FontAwesomeIcon icon={faLock} className="text-slate-500" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={formdata.password}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-slate-700"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-300 transition"
                >
                  Create Account
                </button>

                <p className="text-center text-slate-600 mt-6">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
