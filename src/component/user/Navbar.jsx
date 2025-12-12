import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/data";

import { FiMenu, FiX, FiUser, FiInbox, FiSearch, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryClick = () => {
    setOpenDropdown(false);
    setOpenMobileMenu(false);
  };

  return (
    <>
      {/* Navbar Main */}
      <div className="w-full bg-white shadow-lg rounded-xl px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <Link to="/" className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md text-white font-bold text-lg">
              R
            </Link>
            <Link to="/" className="text-2xl font-extrabold tracking-tight">Rentify</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">

            {/* Categories Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-blue-600 transition font-medium"
              >
                Categories <FiChevronDown className={`${openDropdown && "rotate-180"} duration-300`} />
              </div>

              {openDropdown && (
                <div className="absolute top-10 left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-200 p-3 z-50">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/marketplace?category=${cat.slug}`}
                      onClick={handleCategoryClick}
                      className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>

            {/* Search Bar */}
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl border border-gray-200 w-72">
              <FiSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search items..."
                className="bg-transparent outline-none ml-3 text-sm w-full"
              />
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-6">
            <FiInbox className="text-xl cursor-pointer hover:text-blue-600 transition hover:scale-110" />
            <FiUser className="text-xl cursor-pointer hover:text-blue-600 transition hover:scale-110" />

            <Link
              to="/login"
              className="px-6 py-2 bg-blue-600 text-white rounded-xl text-lg shadow-md hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            {openMobileMenu ? (
              <FiX className="text-3xl" onClick={() => setOpenMobileMenu(false)} />
            ) : (
              <FiMenu className="text-3xl" onClick={() => setOpenMobileMenu(true)} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {openMobileMenu && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-2xl z-50 animate-slideIn p-6">

          {/* Mobile Categories */}
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/marketplace?category=${cat.slug}`}
              onClick={handleCategoryClick}
              className="block px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition"
            >
              {cat.name}
            </Link>
          ))}

          <hr className="my-4" />

          {/* Other Links */}
          <Link to="/" onClick={() => setOpenMobileMenu(false)} className="block py-2 text-gray-700 hover:text-blue-600">
            Home
          </Link>

          <Link to="/login" onClick={() => setOpenMobileMenu(false)} className="block py-3 mt-3 bg-blue-600 text-white text-center rounded-xl">
            Login
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
