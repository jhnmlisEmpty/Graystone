import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-red-600 text-white py-4 px-6 flex justify-between items-center shadow-md z-50">
      {/* Left side: Logo and Name */}
      <div className="flex items-center gap-3">
        <img src="/GIP LOGO.jpg" alt="Logo" className="h-15 w-15 rounded-full" />
        <div className='flex flex-col'>
          <span className="text-xl font-bold">Graystone Institute of the Philippines</span>
          <span className="text-sm">(Training and Assessment Center), INC.</span>
        </div>
      </div>

      {/* Right side: Navigation */}
      <nav className="hidden md:flex gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/accreditations" className="hover:underline">Accreditations</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-red-600 text-white flex flex-col items-center gap-4 py-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/accreditations" className="hover:underline">Accreditations</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      )}
    </header>
  );
};

export default Header;