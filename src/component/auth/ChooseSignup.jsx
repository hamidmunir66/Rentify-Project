import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStore, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import BlobBackground from '../affects/BlobBackground'

const ChooseSignup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#e8eefc] to-[#eef3ff] px-4 relative">
      <BlobBackground />

      <div className="max-w-xl w-full bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/40 animate-fadeIn">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">Create Your Account</h1>
        <p className="text-center text-slate-600 mb-10">Choose how you want to use Rentify</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* USER */}
          <Link
            to="/signup/user"
            className="group p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition transform hover:-translate-y-1"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="text-blue-600 text-4xl mb-4 group-hover:scale-110 transition"
            />
            <h2 className="text-xl font-semibold text-slate-800">User</h2>
            <p className="text-sm text-slate-600 mb-3">Rent products and services easily</p>
            <FontAwesomeIcon icon={faArrowRight} className="text-blue-600" />
          </Link>

          {/* MERCHANT */}
          <Link
            to="/signup/merchant"
            className="group p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition transform hover:-translate-y-1"
          >
            <FontAwesomeIcon
              icon={faStore}
              className="text-purple-600 text-4xl mb-4 group-hover:scale-110 transition"
            />
            <h2 className="text-xl font-semibold text-slate-800">Merchant</h2>
            <p className="text-sm text-slate-600 mb-3">Earn by listing your services or items</p>
            <FontAwesomeIcon icon={faArrowRight} className="text-purple-600" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ChooseSignup
