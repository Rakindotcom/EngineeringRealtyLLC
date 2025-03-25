import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#152238] text-white px-4 sm:px-10 py-5 flex justify-between items-center">
      <div>
        <Link to="/">
          <img src="erl.png" alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-16 left-0 right-0 bg-[#3c4f70] md:bg-transparent p-4 md:p-0 items-center gap-6 md:gap-10 font-semibold text-lg text-[lightgray] z-10`}
      >
        <Link to="/" className="hover:underline hover:text-amber-300" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="hover:underline hover:text-amber-300" onClick={() => setIsMenuOpen(false)}>
          About Us
        </Link>
        <Link to="/listings" className="hover:underline hover:text-amber-300" onClick={() => setIsMenuOpen(false)}>
          Listings
        </Link>
        <Link to="/review" className="hover:underline hover:text-amber-300" onClick={() => setIsMenuOpen(false)}>
          Reviews
        </Link>
        <Link to="/faqs" className="hover:underline hover:text-amber-300" onClick={() => setIsMenuOpen(false)}>
          FAQs
        </Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-1 px-6 rounded-xl shadow-lg hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;