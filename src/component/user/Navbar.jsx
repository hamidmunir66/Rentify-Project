import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faBars,
  faInbox,
  faUser,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import categories from "../../API/Catogories";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] rounded-xl px-8 py-4">

      {/* Main navbar container */}
      <div className="flex items-center justify-between">

        {/* LEFT SECTION (Logo + Menu Items) */}
        <div className="flex items-center gap-10">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,255,0.3)]">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight">Rentify</h1>
          </div>

          {/* Categories */}
          <div className="relative hidden md:flex">
            <div
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-blue-600 transition-all font-medium"
            >
              Categories{" "}
              <FontAwesomeIcon
                icon={openDropdown ? faAngleDown : faAngleRight}
                className="transition-transform duration-300"
              />
            </div>

            {openDropdown && (
              <div className="absolute top-10 left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-200 p-3 z-50 animate-fadeIn">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Home */}
          <Link
            to="/"
            className="hidden md:block font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-xl shadow-inner border border-gray-200 w-72">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-500 text-sm"
            />
            <input
              type="text"
              placeholder="Search items..."
              className="bg-transparent outline-none ml-3 text-sm w-full"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-8">

          {/* Inbox */}
          <FontAwesomeIcon
            icon={faInbox}
            className="text-xl cursor-pointer hover:text-blue-600 transition-all hover:scale-110"
          />

          {/* User */}
          <FontAwesomeIcon
            icon={faUser}
            className="text-xl cursor-pointer hover:text-blue-600 transition-all hover:scale-110"
          />

          {/* Login */}
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl text-lg shadow-[0_4px_14px_rgba(0,0,255,0.3)] hover:bg-blue-700 transition-all">
            <Link to="/login">Login</Link>
          </button>
        </div>

        {/* MOBILE BURGER MENU */}
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={openMenu ? faXmark : faBars}
            className="text-2xl cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
