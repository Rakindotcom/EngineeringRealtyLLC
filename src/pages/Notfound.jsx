import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-bold text-teal-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-6">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-teal-800 text-white px-5 py-3 rounded-xl shadow hover:bg-teal-700 transition"
      >
        <FaHome />
        Back to Home
      </Link>

      <div className="mt-12">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6195/6195700.png"
          alt="Not Found Illustration"
          className="w-60 mx-auto opacity-90"
        />
        <p className="text-sm text-gray-500 mt-4">Engineering Realty LLC — Reliable Real Estate Solutions</p>
      </div>
    </div>
  );
};

export default NotFound;