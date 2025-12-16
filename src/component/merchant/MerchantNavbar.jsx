import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiInbox,
  FiUser,
  FiPlusCircle,
  FiGrid,
} from "react-icons/fi";

const MerchantNavbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md text-white font-bold text-lg"
            >
              R
            </Link>
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight"
            >
              Rentify
              <span className="text-blue-600 ml-1">Merchant</span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/merchant/dashboard"
              className="flex items-center gap-2 font-medium text-gray-700 hover:text-blue-600 transition"
            >
              <FiGrid />
              Dashboard
            </Link>

            <Link
              to="/merchant/chat"
              className="flex items-center gap-2 font-medium text-gray-700 hover:text-blue-600 transition"
            >
              <FiInbox />
              Messages
            </Link>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/merchant/add-item"
              className="flex items-center gap-2 px-6 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-[0_8px_30px_rgba(59,130,246,0.35)] hover:scale-[1.03] transition-transform"
            >
              <FiPlusCircle className="text-xl" />
              List Item Free
            </Link>

            <Link to="/merchant/profile">
              <FiUser className="text-xl cursor-pointer hover:text-blue-600 transition hover:scale-110" />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            {openMobileMenu ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {openMobileMenu && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-2xl z-50 p-6">
          <h3 className="text-lg font-semibold mb-4">Merchant Menu</h3>

          <Link
            to="/merchant/dashboard"
            onClick={() => setOpenMobileMenu(false)}
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            to="/merchant/chat"
            onClick={() => setOpenMobileMenu(false)}
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Messages
          </Link>

          <Link
            to="/merchant/add-item"
            onClick={() => setOpenMobileMenu(false)}
            className="block mt-4 py-3 bg-blue-600 text-white text-center rounded-xl font-semibold"
          >
            List Item Free
          </Link>

          <Link
            to="/merchant/profile"
            onClick={() => setOpenMobileMenu(false)}
            className="block py-3 mt-2 text-center text-gray-700 hover:text-blue-600"
          >
            Profile
          </Link>
        </div>
      )}
    </>
  );
};

export default MerchantNavbar;
