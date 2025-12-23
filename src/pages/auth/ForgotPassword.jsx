import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiArrowLeft } from "react-icons/fi";
import loginsideimage from "../../assets/images/3d-login.webp";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email address");
      return;
    }

    setError("");
    setSuccess("Password reset link has been sent to your email");

    console.log("Reset password email:", email);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#dce7ff] via-[#eef3ff] to-[#dce7ff] px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/40 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400/40 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-5xl flex bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.20)] border border-white/40 overflow-hidden animate-fadeInUp">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-start w-1/2 px-12 py-16 bg-linear-to-br from-blue-600 to-blue-800 text-white relative">
          <h1 className="text-4xl font-bold drop-shadow-md">
            Forgot Password?
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Don’t worry —
            <br />
            We’ll help you get back in.
          </p>

          <p className="mt-6 italic text-blue-200">
            “Secure access. Simple recovery.”
          </p>

          <img
            src={loginsideimage}
            alt="Forgot Password"
            className="w-64 mt-10 drop-shadow-xl"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-300">
              <Link to="/">R</Link>
            </div>
            <h1 className="text-3xl font-semibold text-slate-800">
              <Link to="/">Rentify</Link>
            </h1>
          </div>

          <h2 className="text-3xl font-semibold text-slate-800 mb-2">
            Reset Password
          </h2>
          <p className="text-slate-500 mb-8">
            Enter your email and we’ll send you a reset link
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="text-slate-700 font-medium">
                Email Address
              </label>

              <div
                className={`flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-white border shadow-sm transition ${
                  error ? "border-red-500" : "border-slate-200"
                }`}
              >
                <FiMail className="text-slate-500 text-lg" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-transparent outline-none text-slate-700"
                />
              </div>

              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              {success && (
                <p className="text-green-600 text-sm mt-1">{success}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-300 transition"
            >
              Send Reset Link
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
            >
              <FiArrowLeft />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
