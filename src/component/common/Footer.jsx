import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faTwitter, faInstagram,} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-10 pt-12 pb-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section (Shifted Left) */}
          <div className="space-y-4 pr-8 lg:pr-20">
            <div className="inline-flex items-center gap-3">
              <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-linear-to-br from-indigo-500 to-blue-500 text-white text-lg font-semibold shadow-md ring-1 ring-white/10">
                R
              </span>
              <span className="text-xl font-semibold tracking-wide">
                Rentify
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Your trusted peer-to-peer rental marketplace. Rent anything,
              anytime, near you.
            </p>

            <div className="mt-2 inline-flex items-center gap-4">
              <div className="px-3 py-2 bg-white/5 rounded-lg ring-1 ring-white/5">
                <p className="text-xs text-slate-300">Trusted</p>
                <p className="text-sm font-medium">Peer-to-peer</p>
              </div>

              <div className="px-3 py-2 bg-white/5 rounded-lg ring-1 ring-white/5">
                <p className="text-xs text-slate-300">Available</p>
                <p className="text-sm font-medium">Near you</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to='/About' className="hover:text-white transition">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition">Safety Tips</a></li>
              <li><a href="#" className="hover:text-white transition">Trust & Safety</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition">Electronics</a></li>
              <li><a href="#" className="hover:text-white transition">Vehicles</a></li>
              <li><a href="#" className="hover:text-white transition">Cameras</a></li>
              <li><a href="#" className="hover:text-white transition">Tools</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/5">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>

              <a
                href="mailto:support@rentify.com"
                className="text-slate-300 hover:text-white transition"
              >
                support@rentify.com
              </a>
            </div>

            <p className="text-slate-300">Follow us on social media</p>

            <div className="flex items-center gap-3">
              <a className="social-hover inline-flex items-center justify-center h-10 w-10 rounded-lg bg-linear-to-br from-indigo-500 to-blue-500 shadow-md transition">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a className="social-hover inline-flex items-center justify-center h-10 w-10 rounded-lg bg-linear-to-br from-sky-500 to-indigo-500 shadow-md transition">
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a className="social-hover inline-flex items-center justify-center h-10 w-10 rounded-lg bg-linear-to-br from-pink-500 to-rose-500 shadow-md transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>

            {/* Newsletter */}
            <form className="mt-3 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full sm:w-auto flex-1 min-w-0 px-4 py-2 rounded-md bg-white/5 placeholder-slate-300 text-slate-100 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-linear-to-r from-indigo-500 to-blue-500 text-white font-medium shadow hover:scale-105 transition"
              >
                Subscribe
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10"></div>

        {/* Bottom Section */}
        <div className="mt-6 pb-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 Rentify. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-slate-300 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span className="hidden sm:inline text-slate-500">•</span>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
